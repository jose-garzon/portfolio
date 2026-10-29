import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { EditorState } from '@codemirror/state';
import {
  drawSelection,
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers,
} from '@codemirror/view';
import { getCM, vim } from '@replit/codemirror-vim';
import { useEffect, useId, useRef, useState } from 'react';
import { isCleared, setCleared } from '../progress';
import styles from './VimEditor.module.css';

interface Props {
  doc: string;
  label: string;
  level: string;
  exercise: string;
  goalId?: string;
  target?: string;
}

type VimMode = 'normal' | 'insert' | 'visual' | 'replace';

const theme = EditorView.theme(
  {
    '&': {
      color: 'var(--color-text)',
      backgroundColor: 'var(--color-bg-alt)',
      fontSize: 'var(--text-sm)',
    },
    '.cm-content': {
      fontFamily: 'var(--font-mono)',
      caretColor: 'var(--color-accent)',
      padding: 'var(--space-3) 0',
    },
    '&.cm-focused': {
      outline: '2px solid var(--mode-color, var(--color-cyan))',
      outlineOffset: '1px',
    },
    '.cm-content:focus-visible': { outline: 'none' },
    '.cm-scroller': { fontFamily: 'var(--font-mono)', lineHeight: '1.7' },
    '.cm-cursor, .cm-dropCursor': { borderLeftColor: 'var(--color-accent)' },
    '&.cm-focused .cm-cursor': { borderLeftColor: 'var(--color-accent)' },
    '.cm-fat-cursor': {
      background: 'var(--color-accent)',
      color: 'var(--color-bg)',
    },
    '&:not(.cm-focused) .cm-fat-cursor': {
      background: 'transparent',
      outline: '1px solid var(--color-accent)',
    },
    '.cm-gutters': {
      backgroundColor: 'var(--color-surface)',
      color: 'var(--color-text-subtle)',
      border: 'none',
      borderRight: '1px solid var(--color-border)',
      fontFamily: 'var(--font-mono)',
    },
    '.cm-activeLineGutter': {
      backgroundColor: 'var(--color-surface-raised)',
      color: 'var(--color-text-muted)',
    },
    '.cm-activeLine': { backgroundColor: 'rgba(255, 255, 255, 0.04)' },
    '.cm-selectionBackground': {
      backgroundColor: 'rgba(255, 43, 214, 0.22)',
    },
    '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground': {
      backgroundColor: 'rgba(255, 43, 214, 0.42)',
      boxShadow: 'inset 0 -2px 0 var(--color-magenta)',
    },
    '.cm-content ::selection, .cm-line::selection, .cm-line ::selection': {
      backgroundColor: 'transparent',
      color: 'var(--color-text)',
    },
  },
  { dark: true },
);

export default function VimEditor({ doc, label, level, exercise, goalId, target }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const [mode, setMode] = useState<VimMode>('normal');
  const [cleared, setClearedState] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const [breached, setBreached] = useState(false);
  const helpId = useId();

  const markCleared = (value: boolean) => {
    setClearedState(value);
    setCleared(level, exercise, value);
    setAnnouncement(value ? `${label}: cleared.` : `${label}: marked not done.`);
    setBreached(value);
  };

  useEffect(() => {
    if (!breached) return;
    const timer = window.setTimeout(() => setBreached(false), 1200);
    return () => window.clearTimeout(timer);
  }, [breached]);

  useEffect(() => {
    setClearedState(isCleared(level, exercise));
  }, [level, exercise]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: the editor mounts once per doc; other props are static per exercise
  useEffect(() => {
    if (!hostRef.current) return;

    const describedBy = [helpId, goalId].filter(Boolean).join(' ');
    const view = new EditorView({
      parent: hostRef.current,
      state: EditorState.create({
        doc,
        extensions: [
          vim(),
          lineNumbers(),
          highlightActiveLineGutter(),
          highlightActiveLine(),
          drawSelection(),
          history(),
          keymap.of([...defaultKeymap, ...historyKeymap]),
          theme,
          EditorView.lineWrapping,
          EditorView.contentAttributes.of({
            'aria-label': `${label}, vim editor`,
            'aria-describedby': describedBy,
          }),
          EditorView.updateListener.of((update) => {
            if (!target || !update.docChanged) return;
            if (
              update.state.doc.toString().trim() === target.trim() &&
              !isCleared(level, exercise)
            ) {
              markCleared(true);
            }
          }),
        ],
      }),
    });
    viewRef.current = view;

    const cm = getCM(view);
    const onModeChange = (e: { mode: string }) => setMode((e.mode as VimMode) ?? 'normal');
    cm?.on('vim-mode-change', onModeChange);

    return () => {
      cm?.off('vim-mode-change', onModeChange);
      view.destroy();
      viewRef.current = null;
    };
  }, [doc]);

  const reset = () => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({
      changes: { from: 0, to: view.state.doc.length, insert: doc },
      selection: { anchor: 0 },
    });
    view.focus();
  };

  return (
    <div className={`${styles.editor} hud`} data-cleared={cleared} data-mode={mode}>
      <div className={`${styles.bar} cut`}>
        <span className={styles.mode} data-mode={mode} aria-hidden="true">
          {mode}
        </span>
        <span className={styles.hint} id={helpId}>
          {mode === 'insert'
            ? 'typing · Esc → normal'
            : 'i to type · hjkl to move · Tab leaves the editor'}
        </span>
        <button type="button" className={styles.action} onClick={reset}>
          reset
        </button>
        <button
          type="button"
          className={styles.action}
          data-variant="clear"
          aria-pressed={cleared}
          onClick={() => markCleared(!cleared)}
        >
          {cleared ? '[ clear ]' : 'mark clear'}
        </button>
      </div>
      <div className={styles.host} ref={hostRef} />
      {breached && (
        <span className={styles.breach} aria-hidden="true">
          <span className={styles.breachText} data-text="access granted">
            access granted
          </span>
        </span>
      )}
      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
}
