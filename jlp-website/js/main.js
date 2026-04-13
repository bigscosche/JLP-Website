/* ============================================
   JLP Home Improvement - Main JavaScript
   Handles: Nav, scroll animations, gallery filter, form
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Sticky Navbar ----------
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // ---------- Mobile Nav Toggle ----------
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    // Animate hamburger to X
    navToggle.classList.toggle('active', isOpen);
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ---------- Smooth Scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---------- Gallery Filter ----------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
          item.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ---------- Scroll Animations (Intersection Observer) ----------
  const animateElements = document.querySelectorAll(
    '.why-card, .service-card, .partner-card, .review-card, .badge-item, .gallery-item'
  );

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation slightly
        const delay = (entry.target.dataset.animDelay || 0) * 100;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach((el, i) => {
    el.classList.add('animate-in');
    // Calculate stagger delay based on position within parent grid
    const siblings = el.parentElement.children;
    const siblingIndex = Array.from(siblings).indexOf(el);
    el.dataset.animDelay = siblingIndex;
    observer.observe(el);
  });

  // ---------- Contact Form Handling ----------
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    let valid = true;

    [name, phone, email].forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = 'var(--error)';
        valid = false;
      } else {
        field.style.borderColor = 'var(--divider)';
      }
    });

    // Email validation
    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = 'var(--error)';
      valid = false;
    }

    if (!valid) return;

    // Submit via fetch to Supabase Edge Function
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      message: document.getElementById('details').value.trim(),
      service_requested: document.getElementById('service').value
    };

    fetch(this.action, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        submitBtn.textContent = 'Estimate Requested!';
        submitBtn.style.background = 'var(--success)';
        submitBtn.style.borderColor = 'var(--success)';
        submitBtn.style.color = 'white';
        this.reset();
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.style.borderColor = '';
          submitBtn.style.color = '';
          submitBtn.disabled = false;
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      submitBtn.textContent = 'Error - Try Again';
      submitBtn.style.background = 'var(--error)';
      submitBtn.style.borderColor = 'var(--error)';
      submitBtn.style.color = 'white';
      submitBtn.disabled = false;
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.style.borderColor = '';
        submitBtn.style.color = '';
      }, 3000);
    });
  });

  // Clear error styling on input
  document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.style.borderColor = 'var(--divider)';
    });
    field.addEventListener('focus', () => {
      field.style.borderColor = 'var(--tan)';
    });
  });

  // ---------- Active nav link highlighting ----------
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 150;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const activeLink = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (activeLink) activeLink.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

});
