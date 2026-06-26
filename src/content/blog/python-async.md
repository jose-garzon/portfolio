---
title: 'Python Async — Coroutines, the Event Loop, and Cheap Concurrency'
description: "Coming from JavaScript, I assumed async was async everywhere. Then I met Python's event loop — a guest engine you install yourself. Notes on coroutines, Futures, Tasks, and why none of it runs until something drives it."
pubDate: 2026-02-20
tags: ['learning', 'python', 'async', 'backend']
draft: false
---

I came to Python from JavaScript, where async is just *there* — the event loop is the runtime, and you never think about turning it on. Python broke that assumption fast. Here the loop is something you install, start, and shut down by hand. 

## The event loop is not native to Python

JavaScript was built for the browser from day one — single-threaded, where the event loop *is* the execution model. Python is older and different: it started life in the early 90s as a general-purpose **synchronous** language. `asyncio` only arrived in **Python 3.4 (2014)**, as a library. That's why you have to import it and spin it up explicitly:

```python
import asyncio
asyncio.run(main())  # spin up event loop, run, then shut it down
```

In JavaScript the loop runs forever until the process dies. In Python it has a beginning and an end — you open it, use it, and close it.

## Why Python is synchronous by default

Python was designed in **1991**, before the web existed. It was built for:

- System administration scripts (rename thousands of files)
- Data analysis and scientific computing (process datasets row by row)
- Automation (read config → do work → write output → exit)

Every one of those programs has the same shape: **start, do things in order, finish.** No simultaneous users, no UI to freeze. Blocking for two seconds while a file loads is perfectly fine when the only thing waiting is the script itself.

Synchronous-by-default wasn't an oversight — it was the *right* design for the problem Python was solving.

## Python already had concurrency before asyncio

Python didn't ignore concurrency. It just solved it differently first:

- **Threads (`threading`)** — multiple threads running at once. But the **GIL (Global Interpreter Lock)** lets only one thread execute Python code at a time. Fine for I/O work, painful in practice: race conditions, locks, and shared state that breaks in subtle ways.
- **Multiprocessing** — fully separate processes with no shared memory. Heavier, but it sidesteps the GIL entirely.

**So why add asyncio if threads already existed?**

Because threads are expensive at scale. Each one costs memory and OS resources. Ten thousand simultaneous network connections would mean ten thousand threads for the OS to track and context-switch between — slow and wasteful.

Coroutines are **cheap**. Ten thousand of them sit inside a single event loop, costing almost nothing while they wait, because each is just a paused Python object. The loop switches between them cooperatively, with zero OS overhead.

**My rule of thumb:**

- I/O-bound + high concurrency → `asyncio` 
- CPU-bound work → `multiprocessing`
- Small-scale concurrency with shared state → `threading`

## Coroutine objects are completely inert

Call an `async def` function **without** `await` and you get back a **coroutine object**. Not a single line of its body has run. It's dormant — a blueprint that nobody has built yet.

```python
async def fetch_data():
    return 42

result = fetch_data()  # coroutine object — nothing happened yet
```

**Contrast with JavaScript:** calling an `async function` there immediately runs the body up to the first `await`. Python coroutines do nothing until something drives them.

And if you never `await` one before it gets garbage collected, Python calls you out:

```
RuntimeWarning: coroutine 'fetch_data' was never awaited
```

## Futures — the event loop's currency

When a coroutine hits an `await` on an I/O operation, it yields a **Future** to the event loop. A Future is a container for a result that doesn't exist yet — the same idea as a Promise in JavaScript.

The event loop then:

1. Holds the Future
2. Watches the underlying I/O (network, disk, etc.)
3. When the result arrives, marks the Future as done and resumes the coroutine

**JavaScript bridge:** a `Future` in Python is a `Promise` in JavaScript. Same soul, different name.

## Tasks — the bridge between coroutines and the loop

A **Task** is a subclass of Future that also wraps a coroutine and drives it forward. It's the connective tissue:

- `Future` — a low-level result container. Knows nothing about coroutines.
- `Task` — a Future that takes an inert coroutine, schedules it on the event loop, and advances it from one `await` to the next.

```python
task = asyncio.create_task(fetch_data())  # coroutine is NOW scheduled and alive
```

## await vs create_task() — sequential vs concurrent

This is the distinction I kept getting wrong:

```python
# SEQUENTIAL — waits for each to fully finish before starting the next
async def handle_everything():
    await check_messages()       # nothing else runs until done
    await check_notifications()  # only starts after above
    await sync_database()        # only starts after above

# CONCURRENT with gather() — all three start immediately
async def handle_everything():
    await asyncio.gather(
        check_messages(),
        check_notifications(),
        sync_database()
    )

# CONCURRENT with create_task() — scheduled immediately, individual control
async def handle_everything():
    task1 = asyncio.create_task(check_messages())
    task2 = asyncio.create_task(check_notifications())
    task3 = asyncio.create_task(sync_database())
    await task1
    await task2
    await task3
```

- `asyncio.gather()` is `Promise.all()` — cleaner when you just want everything done.
- `asyncio.create_task()` hands you individual handles, so you can cancel, inspect, or attach callbacks.

## Putting it in my own words

Python's async is a guest engine you install in a car that wasn't built for it. JavaScript ships with the engine already under the hood; in Python you open the hood yourself, drop the engine in (`asyncio.run()`), and pull it back out when you're done.

A coroutine is a recipe card. Holding it cooks nothing — you need a chef (the event loop) to read it and actually run the steps. At every `await`, the chef sets that dish aside, checks on the others, and comes back when the timer goes off (the Future resolves).

A Task is a recipe card that's already been handed to the chef and is actively cooking. A bare coroutine is still sitting on the counter.

## Questions this raises

- [ ] What happens inside `asyncio.gather()` if one coroutine raises — do the others keep running?
- [ ] What is `asyncio.shield()`, and when would I reach for it?
- [ ] When should I prefer `gather()` over `create_task()` in the bot?
- [ ] What's the real difference between `asyncio.sleep()` and `time.sleep()` inside an async context?
- [ ] Can two Tasks ever run truly in parallel (separate CPU cores), or is it always one at a time?

## Practice

**1 — Basic coroutine and event loop.** Write `async def greet(name)` that prints `Hello {name}!`, waits one second with `asyncio.sleep(1)`, then prints `Goodbye {name}!`. Drive it with `asyncio.run()`. *Goal: internalize the `async def` / `await` / `asyncio.run()` pattern.*

**2 — Observe the output order.** Three async functions with **different** sleep times:

```python
async def check_messages():      # sleep 2 seconds
async def check_notifications(): # sleep 1 second
async def sync_database():       # sleep 3 seconds
```

Each prints when it starts and finishes. Run them all with `asyncio.gather()`. *Question: in what order do the "finished" lines print, and why does that order make sense?*

**3 — Sequential vs concurrent timing.** Run the three functions twice — once sequentially with three `await`s, once concurrently with `asyncio.gather()` — and print the total time for each using `time.time()`. *Goal: feel the difference, not just read about it.*

**4 — create_task() and individual control.** Schedule all three with `asyncio.create_task()`, print `All tasks scheduled!` *before* any of them finish, then `await` each one. *Goal: see that `create_task()` queues immediately, unlike `await`, which blocks.*

**5 — Real bot simulation.** Mimic the bot's main loop:

```python
async def listen_for_messages():
    while True:
        print("Checking for new messages...")
        await asyncio.sleep(2)

async def check_due_appointments():
    while True:
        print("Checking due appointments...")
        await asyncio.sleep(5)

async def main():
    await asyncio.gather(
        listen_for_messages(),
        check_due_appointments()
    )

asyncio.run(main())
```

Run it for 15 seconds and watch the interleaving. Then swap `asyncio.sleep()` for `time.sleep()` — what breaks, and why?

