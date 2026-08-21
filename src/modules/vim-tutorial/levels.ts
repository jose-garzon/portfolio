export interface Level {
  slug: string;
  level: number;
  collectionId: string;
  title: string;
  summary: string;
}

export const levels: Level[] = [
  {
    slug: '00-modes',
    level: 0,
    collectionId: 'vim-level-0-modes',
    title: 'Vim Modes',
    summary: 'Normal, Insert, Visual, Command · the modes that make Vim fast.',
  },
  {
    slug: '01-movement',
    level: 1,
    collectionId: 'vim-level-1-movement',
    title: 'Basic Movement',
    summary: 'Move by character, word, line, and file without touching the mouse.',
  },
  {
    slug: '02-search',
    level: 2,
    collectionId: 'vim-level-2-search',
    title: 'Search & Precise Navigation',
    summary: 'Jump straight to what you want with search and in-line motions.',
  },
  {
    slug: '03-insert',
    level: 3,
    collectionId: 'vim-level-3-insert',
    title: 'Inserting Text',
    summary: 'Enter Insert mode the right way: i, a, I, A, o, O.',
  },
  {
    slug: '04-operators',
    level: 4,
    collectionId: 'vim-level-4-operators',
    title: 'Operators + Motions',
    summary: 'The superpower: compose operators with motions and text objects.',
  },
  {
    slug: '05-editing',
    level: 5,
    collectionId: 'vim-level-5-editing',
    title: 'Quick Editing',
    summary: 'x, r, s, J, p, undo/redo, and the mighty dot command.',
  },
  {
    slug: '06-visual',
    level: 6,
    collectionId: 'vim-level-6-visual',
    title: 'Visual Mode',
    summary: 'Select by character, line, and block, then act on the selection.',
  },
  {
    slug: '07-comments',
    level: 7,
    collectionId: 'vim-level-7-comments',
    title: 'Commenting Code',
    summary: 'Toggle comments over lines and motions with gcc and gc.',
  },
  {
    slug: '08-multipliers',
    level: 8,
    collectionId: 'vim-level-8-multipliers',
    title: 'Multipliers',
    summary: 'Prefix almost any command with a count to repeat it.',
  },
  {
    slug: '09-navigation',
    level: 9,
    collectionId: 'vim-level-9-navigation',
    title: 'File & Buffer Navigation',
    summary: 'Move between files and buffers, save, and quit.',
  },
  {
    slug: '10-macros',
    level: 10,
    collectionId: 'vim-level-10-macros',
    title: 'Macros',
    summary: 'Record a sequence of edits and replay it across lines.',
  },
  {
    slug: '11-search-replace',
    level: 11,
    collectionId: 'vim-level-11-search-replace',
    title: 'Search & Replace',
    summary: 'The substitute command and regex for surgical edits.',
  },
  {
    slug: '12-marks',
    level: 12,
    collectionId: 'vim-level-12-marks',
    title: 'Marks',
    summary: 'Drop marks and jump back to exact positions.',
  },
];

export function getLevelBySlug(slug: string): Level | undefined {
  return levels.find((l) => l.slug === slug);
}
