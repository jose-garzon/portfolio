import { Menu } from '@base-ui/react/menu';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>
          jose<span className={styles.logoAccent}>_</span>garzon
        </a>

        {/* Desktop links */}
        <ul className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.desktopLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className={styles.mobileMenu}>
          <Menu.Root>
            <Menu.Trigger className={styles.trigger} aria-label="Open navigation menu">
              <span className={styles.triggerLine} />
              <span className={styles.triggerLine} />
              <span className={styles.triggerLine} />
            </Menu.Trigger>

            <Menu.Portal>
              <Menu.Positioner side="bottom" align="end" className={styles.positioner}>
                <Menu.Popup className={styles.popup}>
                  {navLinks.map((link) => (
                    <Menu.Item
                      key={link.href}
                      // biome-ignore lint/a11y/useAnchorContent: Base UI render prop — Menu.Item children are injected into this anchor at runtime
                      render={<a href={link.href} />}
                      className={styles.menuItem}
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
    </nav>
  );
}
