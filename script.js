function initializeLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function dismissPreNav() {
  const preNav = document.getElementById('pre-nav-bar');
  const mainNav = document.getElementById('main-nav');
  const spacer = document.getElementById('nav-spacer');

  if (!preNav || !mainNav || !spacer) return;

  preNav.style.transform = 'translateY(-100%)';
  mainNav.style.top = '0px';

  setTimeout(() => {
    preNav.classList.add('hidden');
    spacer.classList.remove('mt-10');
  }, 300);
}

function toggleMobileMenu(open) {
  const menu = document.getElementById('mobile-menu');
  const drawer = document.getElementById('mobile-menu-drawer');

  if (!menu || !drawer) return;

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

function initializeRevealAnimations() {
  const anims = document.querySelectorAll('.reveal-on-scroll');
  if (!anims.length) return;

  if (typeof window.IntersectionObserver === 'undefined') {
    anims.forEach((el) => el.classList.add('active'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');

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

  anims.forEach((el) => observer.observe(el));

  const progSec = document.getElementById('programme');
  if (progSec) observer.observe(progSec);
}

function initializeNavigationEffects() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('shadow-md');
      nav.classList.remove('shadow-sm');
    } else {
      nav.classList.add('shadow-sm');
      nav.classList.remove('shadow-md');
    }
  });
}

function initializeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (!mobileMenu) return;

  mobileMenu.addEventListener('click', (event) => {
    if (event.target === mobileMenu) {
      toggleMobileMenu(false);
    }
  });
}

function initializeSite() {
  initializeLucideIcons();
  initializeMobileMenu();
  initializeRevealAnimations();
  initializeNavigationEffects();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSite, { once: true });
} else {
  initializeSite();
}
