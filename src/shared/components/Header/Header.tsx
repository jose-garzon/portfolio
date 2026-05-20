import { Dialog } from '@base-ui/react/dialog';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Writing', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Now', href: '/now' },
  { label: 'Contact', href: 'mailto:jose.garzon.work@gmail.com' },
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let pending = false;
    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        const scroll = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(1, Math.max(0, scroll / max)) : 0;
        setProgress(ratio);
        set('scrolled', scroll > 20);
        pending = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [set]);

  return (
    <Dialog.Root open={has('menu-open')} onOpenChange={(open) => set('menu-open', open)}>
      <nav
        className={`${styles.nav} ${has('scrolled') ? styles.scrolled : ''}`}
        aria-label="Primary"
      >
        <span
          className={styles.progress}
          style={{ width: `${progress * 100}%`, opacity: progress > 0.002 ? 1 : 0 }}
          aria-hidden="true"
        />
        <div className={`container ${styles.inner}`}>
          <div className={styles.identity}>
            <a href="/" className={styles.logo}>
              <span className={styles.logoName}>jose-garzon</span>
              <span className={styles.logoSlash}>{'//'}</span>
            </a>
            <span className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span className={styles.statusLabel}>open to new opportunities</span>
            </span>
          </div>

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
