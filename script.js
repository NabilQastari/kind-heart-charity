// ========================================
// A. NAVIGASI TOGGLE (MENU MOBILE)
// ========================================
const menuToggle = document.createElement('button');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '☰';
menuToggle.setAttribute('aria-label', 'Toggle menu');

const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');

nav.insertBefore(menuToggle, menu);

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
  this.classList.toggle('active');
  
  // Update icon
  if (menu.classList.contains('active')) {
    this.innerHTML = '✕';
  } else {
    this.innerHTML = '☰';
  }
});

// Close menu when clicking menu links
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    menu.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggle.innerHTML = '☰';
  });
});

// ========================================
// B. TOMBOL "BACK TO TOP"
// ========================================
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '↑';
backToTopBtn.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopBtn);

// Show/hide button based on scroll position
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ========================================
// C. THEME SWITCHER (TERANG/GELAP)
// ========================================
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '🌙';
themeToggle.setAttribute('aria-label', 'Toggle theme');

const contactHeader = document.querySelector('header.contact');
contactHeader.appendChild(themeToggle);

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Update button icon based on current theme
if (currentTheme === 'dark') {
  themeToggle.innerHTML = '☀️';
}

// Theme toggle functionality
themeToggle.addEventListener('click', function() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update icon
  if (newTheme === 'dark') {
    this.innerHTML = '☀️';
  } else {
    this.innerHTML = '🌙';
  }
});

// ========================================
// BONUS: SMOOTH SCROLLING FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#donate') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});