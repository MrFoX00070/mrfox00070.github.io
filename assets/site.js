// A language choice is remembered when the visitor next opens the root URL.
document.querySelectorAll('[data-switch-lang]').forEach((link) => {
  link.addEventListener('click', () => {
    try { localStorage.setItem('mrfox-language', link.dataset.switchLang); }
    catch (_) { /* Local storage may be unavailable. */ }
  });
});

// Security Notes: Jekyll handles language filtering; these controls only filter
// the already language-specific list. No tracking or external dependencies.
const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
const noteItems = Array.from(document.querySelectorAll('[data-note-type]'));
const noteSearch = document.querySelector('[data-note-search]');
function filterNotes() {
  if (!filterButtons.length) return;
  const selected = filterButtons.find(btn => btn.getAttribute('aria-pressed') === 'true')?.dataset.filter || 'all';
  const query = (noteSearch?.value || '').trim().toLocaleLowerCase();
  let visible = 0;
  noteItems.forEach((item) => {
    const categoryMatches = selected === 'all' || item.dataset.noteType === selected;
    const textMatches = !query || item.textContent.toLocaleLowerCase().includes(query);
    const show = categoryMatches && textMatches;
    item.hidden = !show;
    if (show) visible++;
  });
  const count = document.querySelector('[data-visible-count]');
  if (count) count.textContent = String(visible);
  const initialEmpty = document.querySelector('[data-initial-empty]');
  const otherEmpty = document.querySelector('[data-filter-empty]');
  if (initialEmpty) initialEmpty.hidden = !!query || selected !== 'all';
  if (otherEmpty) otherEmpty.hidden = visible > 0 || (selected === 'all' && !query);
}
filterButtons.forEach((button) => button.addEventListener('click', () => {
  filterButtons.forEach((b) => {
    const active = b === button;
    b.classList.toggle('selected', active);
    b.setAttribute('aria-pressed', String(active));
  });
  filterNotes();
}));
if (noteSearch) noteSearch.addEventListener('input', filterNotes);
