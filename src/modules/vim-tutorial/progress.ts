const STORAGE_KEY = 'vim-progress';
export const PROGRESS_EVENT = 'vim-progress';

type Progress = Record<string, string[]>;

export function readProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Progress) : {};
  } catch {
    return {};
  }
}

export function isCleared(level: string, exercise: string): boolean {
  return readProgress()[level]?.includes(exercise) ?? false;
}

export function setCleared(level: string, exercise: string, cleared: boolean) {
  const progress = readProgress();
  const done = new Set(progress[level] ?? []);
  if (cleared) done.add(exercise);
  else done.delete(exercise);
  progress[level] = [...done];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
  window.dispatchEvent(new CustomEvent(PROGRESS_EVENT));
}

export function countExercises(body: string | undefined): number {
  return body?.match(/<Exercise\b/g)?.length ?? 0;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
