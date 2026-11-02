/* Builds the page from content.js. You shouldn't need to edit this file. */
(() => {
  const $ = (s) => document.querySelector(s);
  const el = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; };
  const paras = (box, text) => text.split(/\n\s*\n/).forEach(p => box.append(el('p', '', p)));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ratios = ['4/5', '1/1', '5/4', '3/4', '4/3'];
  document.documentElement.classList.add('js');

  // Photo, or a clearly labeled placeholder when src is empty / missing.
  function pic(src, alt, i = 0, label = 'Your photo here') {
    if (src) {
      const m = document.createElement('img');
      m.src = src; m.alt = alt || ''; m.loading = 'lazy';
      m.onerror = () => m.replaceWith(pic('', alt, i, 'Photo not found: ' + src));
      return m;
    }
    const d = el('div', 'ph'); d.style.aspectRatio = ratios[i % ratios.length];
    d.setAttribute('role', 'img'); d.setAttribute('aria-label', alt || label);
    d.append(el('span', '', label)); return d;
  }
  const bg = (node, src) => { if (src) node.style.backgroundImage = `url("${src}")`; };

  $('#brand').textContent = SITE.groupName;
  document.title = SITE.groupName + ' — A Little Piece of Forever';
  bg($('#heroBg'), SITE.heroPhoto); bg($('#finBg'), SITE.finalePhoto);
  const go = (sel) => document.querySelector(sel).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  $('#enter').onclick = () => go('#story');
  $('#top-btn').onclick = () => { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); $('#brand').focus(); };

  // Story
  SITE.story.forEach((s, i) => {
    const li = el('li', 'entry rv' + (i % 2 ? ' flip' : ''));
    const t = el('div', 'etext'); t.append(el('span', 'hand date', s.date), el('h3', '', s.title), el('p', '', s.text));
    const f = el('div', 'efig'); f.append(pic(s.photo, s.title, i));
    li.append(t, f); $('#timeline').append(li);
  });

  // Gallery + lightbox
  const lb = $('#lb'); let list = [], cur = 0;
  function show(i) {
    cur = (i + list.length) % list.length; const p = list[cur], fig = $('#lbFig'); fig.innerHTML = '';
    fig.append(pic(p.src, p.caption, cur));
    const c = el('figcaption'); c.append(el('strong', '', p.caption || ''));
    const meta = [p.date, p.place].filter(Boolean).join(' · ');
    if (meta) c.append(el('span', '', meta)); if (p.note) c.append(el('em', 'hand', p.note));
    fig.append(c);
  }
  function open(l, i, opener) { list = l; show(i); lb.showModal(); lb._o = opener; }
  $('#lbClose').onclick = () => lb.close();
  $('#lbPrev').onclick = () => show(cur - 1); $('#lbNext').onclick = () => show(cur + 1);
  lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
  lb.addEventListener('close', () => lb._o && lb._o.focus());

  const names = Object.keys(SITE.albums);
  function album(name) {
    document.querySelectorAll('#tabs button').forEach(b => b.setAttribute('aria-pressed', b.textContent === name));
    const g = $('#gallery'); g.innerHTML = ''; const items = SITE.albums[name];
    items.forEach((p, i) => {
      const b = el('button', 'polaroid'); b.type = 'button'; b.setAttribute('aria-label', 'View larger: ' + (p.caption || 'photo'));
      b.append(pic(p.src, p.caption, i + name.length));
      const cap = el('span', 'cap'); cap.append(el('b', '', p.caption || ''), el('i', 'hand', [p.date, p.place].filter(Boolean).join(' · ') || p.note || ''));
      b.append(cap); b.onclick = () => open(items, i, b); g.append(b);
    });
  }
  names.forEach(n => { const b = el('button', 'tab', n); b.type = 'button'; b.onclick = () => album(n); $('#tabs').append(b); });
  album(names[0]);

  // Letters
  const dlg = $('#letter');
  SITE.friends.forEach(f => {
    const b = el('button', 'card'); b.type = 'button';
    const ph = el('div', 'avatar'); ph.append(pic(f.photo, f.name, 1, '📷'));
    b.append(ph, el('h3', '', f.name), el('p', '', f.preview), el('span', 'hand', 'open letter'));
    b.onclick = () => {
      const body = $('#ltBody'); body.innerHTML = '';
      body.append(el('h3', '', 'Dear ' + f.name + ','), ...[]); paras(body, f.letter);
      dlg.showModal(); dlg._o = b;
    };
    $('#cards').append(b);
  });
  $('#lt-close').onclick = () => dlg.close();
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => dlg._o && dlg._o.focus());

  // Inside jokes
  SITE.jokes.forEach((j, i) => {
    const b = el('button', 'joke'); b.type = 'button'; b.setAttribute('aria-expanded', 'false'); b.style.setProperty('--r', ((i % 2 ? 1 : -1) * (1 + i % 3)) + 'deg');
    const s = el('span', 'jstory', j.story);
    b.append(el('h3', '', j.title), el('p', '', j.teaser), s);
    b.onclick = () => b.setAttribute('aria-expanded', b.getAttribute('aria-expanded') !== 'true');
    $('#jgrid').append(b);
  });

  // Words
  SITE.words.forEach((w, i) => $('#journal').append(el('p', 'w w' + (i % 3) + ' rv', w)));

  // Time capsule
  const C = SITE.capsule, paper = $('#paper'), env = $('#env');
  paper.append(el('h3', 'hand', 'Dear us,')); paras(paper, C.message);
  [['Our favorite memories right now', C.favorites.join('  ·  ')], ['Where we are right now', C.rightNow], ['What we\'re dreaming of', C.dreams], ['What I hope never changes', C.neverChange]]
    .forEach(([h, t]) => { const d = el('div', 'cap-row'); d.append(el('b', '', h), el('span', '', t)); paper.append(d); });
  env.onclick = () => { const o = env.getAttribute('aria-expanded') !== 'true'; env.setAttribute('aria-expanded', o); env.classList.toggle('open', o); paper.hidden = !o; env.querySelector('.seal').textContent = o ? 'close' : 'open'; };

  // Finale
  $('#finHead').textContent = SITE.finale.headline; $('#finText').textContent = SITE.finale.text; $('#finClose').textContent = SITE.finale.closing;

  // Music: off by default, never autoplays, degrades gracefully.
  const mb = $('#music');
  if (!SITE.music.src) { mb.disabled = true; mb.textContent = '♪ No song set'; mb.title = 'Add a song in content.js'; }
  else {
    const a = new Audio(); a.preload = 'none'; a.loop = true; a.src = SITE.music.src;
    const set = (on) => { mb.setAttribute('aria-pressed', on); mb.textContent = on ? '♪ Pause ' + SITE.music.title : '♪ Play ' + SITE.music.title; };
    set(false);
    a.addEventListener('error', () => { mb.disabled = true; mb.textContent = '♪ Song not found'; });
    mb.onclick = () => a.paused ? a.play().then(() => set(true)).catch(() => { mb.textContent = '♪ Could not play'; }) : (a.pause(), set(false));
  }

  // Gentle reveal on scroll (skipped for reduced motion)
  const rv = document.querySelectorAll('.rv');
  if (reduce || !('IntersectionObserver' in window)) rv.forEach(n => n.classList.add('in'));
  else { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 }); rv.forEach(n => io.observe(n)); }
})();
