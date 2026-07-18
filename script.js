// Initialize Lucide icons
lucide.createIcons();

// 1. Dismissable Pre-Nav Bar functionality
function dismissPreNav() {
  const preNav = document.getElementById('pre-nav-bar');
  const mainNav = document.getElementById('main-nav');
  const spacer = document.getElementById('nav-spacer');
  
  preNav.style.transform = 'translateY(-100%)';
  mainNav.style.top = '0px';
  
  // Update heights after transition
  setTimeout(() => {
    preNav.classList.add('hidden');
    spacer.classList.remove('mt-10');
  }, 300);
}

// 2. Mobile Menu toggle drawer
function toggleMobileMenu(open) {
  const menu = document.getElementById('mobile-menu');
  const drawer = document.getElementById('mobile-menu-drawer');
  
  if (open) {
    menu.classList.remove('pointer-events-none');
    menu.classList.add('opacity-100');
    drawer.classList.remove('translate-x-full');
  } else {
    menu.classList.add('pointer-events-none');
    menu.classList.remove('opacity-100');
    drawer.classList.add('translate-x-full');
  }
}

// Close menu when clicking outside the drawer
document.getElementById('mobile-menu').addEventListener('click', function(e) {
  if (e.target === this) {
    toggleMobileMenu(false);
  }
});

// 3. Scroll spy and Animation Trigger via Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const anims = document.querySelectorAll('.reveal-on-scroll');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Check if it's the timeline section to animate the lines
        if (entry.target.id === 'programme') {
          const desktopLine = document.getElementById('desktop-timeline-line');
          const mobileLine = document.getElementById('mobile-timeline-line');
          if (desktopLine) desktopLine.style.transform = 'scaleX(1)';
          if (mobileLine) mobileLine.style.transform = 'scaleY(1)';
        }
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  anims.forEach(el => observer.observe(el));
  
  // Also observe the programme section specifically for timeline animation triggers
  const progSec = document.getElementById('programme');
  if (progSec) observer.observe(progSec);
});

// Dynamic scroll background change for Navigation
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (window.scrollY > 50) {
    nav.classList.add('shadow-md');
    nav.classList.remove('shadow-sm');
  } else {
    nav.classList.add('shadow-sm');
    nav.classList.remove('shadow-md');
  }
});
