---
created: 2026-02-20
source: Mentor session
author: Claude Mentor
tags:
  - learning
  - python
  - threading
  - backend
---
[[python]], [[backend]]
# Python Threading — Concurrency with Threads

> 🔒 **To discuss with mentor.** Notes are incomplete — session pending.

## Key ideas

- Python has a built-in `threading` module for running code concurrently
- The **GIL (Global Interpreter Lock)** means only one thread executes Python code at a time
- Threads are useful for I/O-bound work but complex to manage correctly
- Key concepts to explore: race conditions, locks, shared state, deadlocks

## Questions this raises

- [ ] When should I use threads over asyncio?
- [ ] What exactly is the GIL and why does it exist?
- [ ] How do you prevent two threads from corrupting shared data?
- [ ] What is a deadlock and how do you avoid it?
- [ ] How does `threading.Lock()` work?

## Connections

- [[Python Async - Coroutines, Event Loop and Concurrency]] — asyncio is the alternative for I/O-bound concurrency at scale
