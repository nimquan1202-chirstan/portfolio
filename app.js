import { projects } from './data.js';

const ul = document.querySelector('#project-list');
const tpl = document.querySelector('#project-card');
const bar = document.querySelector('#filters');
const searchInput = document.querySelector('#search');
const toggle = document.querySelector('#theme-toggle');
const root = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
  root.classList.add('dark');
}

toggle.addEventListener('click', () => {
  root.classList.toggle('dark');
  const isDark = root.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

function render(list) {
  ul.textContent = '';
  if (list.length === 0) {
    ul.textContent = 'Không có dự án phù hợp.';
    return;
  }
  for (const p of list) {
    const li = tpl.content.cloneNode(true);
    li.querySelector('h3').textContent = p.title;
    li.querySelector('.desc').textContent = p.desc;
    li.querySelector('.tags').textContent = p.tags.join(', ');
    ul.append(li);
  }
}

const tags = [...new Set(projects.flatMap((p) => p.tags))];

for (const tag of ['all', ...tags]) {
  const b = document.createElement('button');
  b.textContent = tag;
  b.dataset.tag = tag;
  if (tag === 'all') b.classList.add('active');
  bar.append(b);
}

let activeTag = 'all';

function filterProjects() {
  const q = searchInput.value.toLowerCase().trim();

  const filtered = projects.filter((p) => {
    const matchTag = activeTag === 'all' || p.tags.includes(activeTag);
    const matchSearch = p.title.toLowerCase().includes(q);
    return matchTag && matchSearch;
  });

  render(filtered);
}

bar.addEventListener('click', (e) => {
  const tag = e.target.dataset.tag;
  if (!tag) return;
  activeTag = tag;
  
  bar.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  filterProjects();
});

searchInput.addEventListener('input', () => {
  filterProjects();
});

const contactForm = document.querySelector('#contact-form');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const formSuccess = document.querySelector('#form-success');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nameInput = document.querySelector('#name').value.trim();
  const emailInput = document.querySelector('#email').value.trim();
  
  let hasError = false;
  
  if (!nameInput) {
    nameError.textContent = 'Chưa nhập họ tên';
    hasError = true;
  } else {
    nameError.textContent = '';
  }
  
  if (!emailInput.includes('@')) {
    emailError.textContent = 'Email chưa hợp lệ';
    hasError = true;
  } else {
    emailError.textContent = '';
  }
  
  if (!hasError) {
    formSuccess.textContent = 'Đã gửi. Cảm ơn bạn!';
    contactForm.reset();
  } else {
    formSuccess.textContent = '';
  }
});

render(projects);