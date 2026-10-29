const prose = document.querySelector('.prose');

prose?.querySelectorAll<HTMLHeadingElement>('h2[id], h3[id]').forEach((heading) => {
  const anchor = document.createElement('a');
  anchor.href = `#${heading.id}`;
  anchor.className = 'heading-anchor';
  anchor.setAttribute('aria-label', `Link to section: ${heading.textContent ?? ''}`);
  anchor.textContent = '#';
  heading.append(anchor);
});

if (navigator.clipboard) {
  prose?.querySelectorAll('pre').forEach((pre) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-button';
    button.textContent = 'copy';
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(pre.querySelector('code')?.innerText ?? pre.innerText);
        button.textContent = 'copied';
      } catch {
        button.textContent = 'failed';
      }
      setTimeout(() => (button.textContent = 'copy'), 1600);
    });
    const wrap = document.createElement('div');
    wrap.className = 'code-block';
    pre.replaceWith(wrap);
    wrap.append(pre, button);
  });
}

const tocLinks = new Map(
  Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-toc-link]')).map((a) => [
    a.dataset.tocLink,
    a,
  ]),
);

if (tocLinks.size > 0) {
  const tocObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tocLinks.forEach((link) => {
          link.removeAttribute('aria-current');
        });
        tocLinks.get(entry.target.id)?.setAttribute('aria-current', 'location');
      });
    },
    { rootMargin: '0px 0px -70% 0px' },
  );
  tocLinks.forEach((_, id) => {
    const target = id && document.getElementById(id);
    if (target) tocObserver.observe(target);
  });
}
