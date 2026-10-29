import { PROGRESS_EVENT, readProgress } from './progress';

function render() {
  const progress = readProgress();
  document.querySelectorAll<HTMLElement>('[data-progress-for]').forEach((el) => {
    const total = Number(el.dataset.total ?? 0);
    const done = Math.min(progress[el.dataset.progressFor ?? '']?.length ?? 0, total);
    el.dataset.state = done === 0 ? 'none' : done >= total ? 'done' : 'partial';
    el.textContent = done >= total && total > 0 ? 'clear' : `${done}/${total}`;
    el.setAttribute('aria-label', `${done} of ${total} exercises cleared`);
    document
      .querySelectorAll<HTMLElement>(
        `[data-node="${el.dataset.progressFor}"], [data-segment-for="${el.dataset.progressFor}"]`,
      )
      .forEach((node) => {
        node.dataset.state = el.dataset.state;
      });
  });

  const nodes = [...document.querySelectorAll<HTMLElement>('[data-node]')];
  for (const node of nodes) delete node.dataset.next;
  const next = nodes.find((node) => node.dataset.state !== 'done');
  if (next) next.dataset.next = '';

  const count = document.querySelector<HTMLElement>('[data-breach-count]');
  if (count)
    count.textContent = String(nodes.filter((node) => node.dataset.state === 'done').length);
}

render();
window.addEventListener(PROGRESS_EVENT, render);
window.addEventListener('storage', render);
