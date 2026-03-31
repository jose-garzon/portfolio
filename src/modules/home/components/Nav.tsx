import { useState, useEffect } from 'react';
import { Menu } from '@base-ui-components/react/menu';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`,
        backgroundColor: scrolled ? 'var(--color-bg)' : 'transparent',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-accent)',
            fontWeight: 500,
          }}
        >
          jose_garzon
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: 'flex',
            gap: 'var(--space-8)',
            listStyle: 'none',
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-muted)',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--color-text)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--color-text-muted)')
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="nav-mobile">
          <Menu.Root>
            <Menu.Trigger
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: 'var(--space-2)',
                color: 'var(--color-text)',
              }}
              aria-label="Open navigation menu"
            >
              <span
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  borderRadius: '2px',
                }}
              />
            </Menu.Trigger>

            <Menu.Portal>
              <Menu.Positioner
                side="bottom"
                align="end"
                style={{ zIndex: 200 }}
              >
                <Menu.Popup
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    padding: 'var(--space-2)',
                    minWidth: '160px',
                    marginTop: 'var(--space-2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  }}
                >
                  {navLinks.map((link) => (
                    <Menu.Item
                      key={link.href}
                      render={<a href={link.href} />}
                      style={{
                        display: 'block',
                        padding: 'var(--space-3) var(--space-4)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-text-muted)',
                        borderRadius: '6px',
                        cursor: 'pointer',
                      }}
                    >
                      {link.label}
                    </Menu.Item>
                  ))}
                </Menu.Popup>
              </Menu.Positioner>
            </Menu.Portal>
          </Menu.Root>
        </div>
      </div>

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile { display: none; }

        @media (max-width: 640px) {
          .nav-desktop { display: none; }
          .nav-mobile { display: block; }
        }

        [data-highlighted] {
          background: var(--color-accent-dim);
          color: var(--color-text) !important;
        }
      `}</style>
    </nav>
  );
}
