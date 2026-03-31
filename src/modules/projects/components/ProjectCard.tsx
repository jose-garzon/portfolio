import type { Project } from '../data/projects';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '10px',
        padding: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)')
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)')
      }
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 'var(--space-4)',
        }}
      >
        <h3
          style={{
            fontSize: 'var(--text-lg)',
            fontWeight: 600,
            color: 'var(--color-text)',
          }}
        >
          {project.name}
        </h3>

        <div style={{ display: 'flex', gap: 'var(--space-3)', flexShrink: 0 }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener"
              aria-label={`${project.name} on GitHub`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-text-muted)',
                padding: 'var(--space-1) var(--space-3)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                transition: 'color 0.15s, border-color 0.15s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--color-text)';
                el.style.borderColor = 'var(--color-text-muted)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--color-text-muted)';
                el.style.borderColor = 'var(--color-border)';
              }}
            >
              gh
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener"
              aria-label={`${project.name} live site`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-accent)',
                padding: 'var(--space-1) var(--space-3)',
                border: '1px solid rgba(126,232,162,0.3)',
                borderRadius: '4px',
              }}
            >
              live ↗
            </a>
          )}
        </div>
      </div>

      <p
        style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-muted)',
          lineHeight: 1.65,
          flexGrow: 1,
        }}
      >
        {project.description}
      </p>

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-2)',
          listStyle: 'none',
        }}
      >
        {project.stack.map((tech) => (
          <li
            key={tech}
            style={{
              padding: '2px 10px',
              background: 'var(--color-accent-dim)',
              border: '1px solid rgba(126,232,162,0.15)',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              color: 'var(--color-accent)',
            }}
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
