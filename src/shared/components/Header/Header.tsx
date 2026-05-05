import { Dialog } from '@base-ui/react/dialog';
import { useEffect, useState } from 'react';
import personal from '../../data/personal.json';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/blog' },
];

type UIFlag = 'scrolled' | 'menu-open';

function useUIFlags() {
  const [flags, setFlags] = useState<Set<UIFlag>>(new Set());
  const has = (flag: UIFlag) => flags.has(flag);
  const set = (flag: UIFlag, on: boolean) =>
    setFlags((prev) => {
      const next = new Set(prev);
      on ? next.add(flag) : next.delete(flag);
      return next;
    });
  return { has, set };
}

export default function Header() {
  const { has, set } = useUIFlags();

  useEffect(() => {
    const onScroll = () => set('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [set]);

  return (
    <Dialog.Root open={has('menu-open')} onOpenChange={(open) => set('menu-open', open)}>
      <nav className={`${styles.nav} ${has('scrolled') ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <a href="/" className={styles.logo}>
            {personal.name.first.toLowerCase()}
            <span className={styles.logoAccent}>_</span>
            {personal.name.last.toLowerCase()}
          </a>

          <ul className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.desktopLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.mobileMenu}>
            <Dialog.Trigger
              className={`${styles.trigger} ${has('menu-open') ? styles.triggerOpen : ''}`}
              aria-label={has('menu-open') ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className={styles.triggerLine} />
              <span className={styles.triggerLine} />
              <span className={styles.triggerLine} />
            </Dialog.Trigger>
          </div>
        </div>
      </nav>

      <Dialog.Portal>
        <Dialog.Backdrop className={styles.backdrop} />
        <Dialog.Popup aria-label="Navigation" className={styles.overlay}>
          <nav className={styles.overlayNav}>
            <ul className={styles.overlayLinks}>
              {navLinks.map((link, i) => (
                <li key={link.href} className={styles.overlayItem} data-index={i}>
                  <Dialog.Close
                    render={
                      <a href={link.href}>
                        <span className={styles.overlayLinkIndex}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {link.label}
                      </a>
                    }
                    className={styles.overlayLink}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
