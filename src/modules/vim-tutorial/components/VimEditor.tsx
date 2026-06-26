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
import { useEffect, useRef, useState } from 'react';
import styles from './VimEditor.module.css';

interface Props {
  doc: string;
  height?: string;
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
    '.cm-scroller': { fontFamily: 'var(--font-mono)', lineHeight: '1.7' },
    '&.cm-focused': { outline: 'none' },
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
    '.cm-activeLine': { backgroundColor: 'rgba(255, 255, 255, 0.02)' },
    '.cm-selectionBackground': {
      backgroundColor: 'rgba(255, 45, 85, 0.22)',
    },
    '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground': {
      backgroundColor: 'rgba(255, 45, 85, 0.3)',
    },
  },
  { dark: true },
);

export default function VimEditor({ doc, height = 'auto' }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const [mode, setMode] = useState<VimMode>('normal');

  useEffect(() => {
    if (!hostRef.current) return;

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
    <div className={styles.editor}>
      <div className={styles.bar}>
        <span
          className={styles.mode}
          data-mode={mode}
          role="status"
          aria-live="polite"
          aria-label={`${mode} mode`}
        >
          {mode}
        </span>
        <span className={styles.hint}>
          {mode === 'insert'
            ? 'typing enabled · Esc → normal mode'
            : 'press i to type · hjkl to move'}
        </span>
        <button type="button" className={styles.reset} onClick={reset}>
          reset
        </button>
      </div>
      <div className={styles.host} ref={hostRef} style={{ height }} />
    </div>
  );
}
