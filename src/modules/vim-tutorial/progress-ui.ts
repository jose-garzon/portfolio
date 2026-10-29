import { PROGRESS_EVENT, readProgress } from './progress';

function render() {
  const progress = readProgress();
  document.querySelectorAll<HTMLElement>('[data-progress-for]').forEach((el) => {
    const total = Number(el.dataset.total ?? 0);
    const done = Math.min(progress[el.dataset.progressFor ?? '']?.length ?? 0, total);
    el.dataset.state = done === 0 ? 'none' : done >= total ? 'done' : 'partial';
    el.textContent = done >= total && total > 0 ? 'clear' : `${done}/${total}`;
    el.setAttribute('aria-label', `${done} of ${total} exercises cleared`);
  });
}

render();
window.addEventListener(PROGRESS_EVENT, render);
window.addEventListener('storage', render);
