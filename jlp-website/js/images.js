/* ============================================
   IMAGE CONFIGURATION - EDIT THIS FILE TO CHANGE ALL PHOTOS
   ============================================
   
   HOW TO SWAP IMAGES:
   1. Put your real photos in the /images/ folder
   2. Change the paths below from Unsplash URLs to local paths
      Example: "https://images.unsplash.com/..." → "images/my-kitchen-photo.jpg"
   3. Save this file and refresh the browser. Done!
   
   TIPS:
   - Use .jpg or .webp for best performance  
   - Recommended sizes are listed next to each image
   - Keep file names lowercase, no spaces (use dashes: "kitchen-remodel.jpg")
   - The "alt" text helps with SEO - describe what's in the photo
   ============================================ */

const SITE_IMAGES = {

  // ==========================================
  // HERO BACKGROUND (the big photo at the top)
  // Recommended: 1920x1080 or larger, landscape
  // ==========================================
  hero: {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
    alt: "Beautiful home exterior in Fairfield County CT"
  },

  // ==========================================
  // SERVICE CARDS (the 12 service photo tiles)
  // Recommended: 600x800 each, portrait orientation
  // ==========================================
  services: {
    roofing: {
      src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&h=800&fit=crop",
      alt: "Professional roofing installation in Danbury CT"
    },
    kitchen: {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop",
      alt: "Modern kitchen remodeling in Fairfield County CT"
    },
    bathroom: {
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=800&fit=crop",
      alt: "Luxury bathroom renovation in Connecticut"
    },
    hardwood: {
      src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=800&fit=crop",
      alt: "Hardwood floor installation and refinishing"
    },
    carpentry: {
      src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=800&fit=crop",
      alt: "Custom carpentry and built-in installations"
    },
    painting: {
      src: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&h=800&fit=crop",
      alt: "Professional interior and exterior painting"
    },
    decks: {
      src: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=600&h=800&fit=crop",
      alt: "Custom deck building and outdoor living spaces"
    },
    siding: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop",
      alt: "Siding installation and window replacement in CT"
    },
    basement: {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=800&fit=crop",
      alt: "Finished basement renovation with entertainment area"
    },
    tile: {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=800&fit=crop",
      alt: "Professional tile installation and backsplash work"
    },
    additions: {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=800&fit=crop",
      alt: "Home additions and room extensions in Connecticut"
    },
    commercial: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop",
      alt: "Commercial renovation and construction services"
    }
  },

  // ==========================================
  // GALLERY / PORTFOLIO PHOTOS
  // Recommended: 500x400 each, landscape orientation
  // Add more by copying a block and changing the category
  // Categories: roofing, kitchens, bathrooms, floors, decks, carpentry, exteriors
  // ==========================================
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
      alt: "Kitchen remodel - modern white cabinets with marble countertops",
      category: "kitchens",
      label: "Kitchen Remodel - Greenwich"
    },
    {
      src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=500&h=400&fit=crop",
      alt: "Complete roof replacement with architectural shingles",
      category: "roofing",
      label: "Roof Replacement - Danbury"
    },
    {
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=400&fit=crop",
      alt: "Modern bathroom renovation with walk-in shower",
      category: "bathrooms",
      label: "Bathroom Renovation - Westport"
    },
    {
      src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=500&h=400&fit=crop",
      alt: "Hardwood floor refinishing in a living room",
      category: "floors",
      label: "Hardwood Floors - Ridgefield"
    },
    {
      src: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=500&h=400&fit=crop",
      alt: "Custom composite deck with railing system",
      category: "decks",
      label: "Custom Deck - Norwalk"
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop",
      alt: "Complete siding replacement on a colonial home",
      category: "exteriors",
      label: "Siding & Windows - Stamford"
    }
    // ----------------------------------------
    // TO ADD MORE GALLERY PHOTOS:
    // Copy the block below, paste it above this comment,
    // and fill in your own values:
    //
    // ,{
    //   src: "images/your-photo-name.jpg",
    //   alt: "Description of what's in the photo",
    //   category: "kitchens",   <-- pick from: roofing, kitchens, bathrooms, floors, decks, carpentry, exteriors
    //   label: "Project Name - City"
    // }
    // ----------------------------------------
  ]
};

// ============================================
// AUTO-APPLY IMAGES (don't edit below this line)
// This code reads the config above and applies
// all images to the page automatically
// ============================================
document.addEventListener('DOMContentLoaded', () => {

  // Apply hero background
  const hero = document.querySelector('.hero');
  if (hero && SITE_IMAGES.hero.src) {
    hero.style.backgroundImage = 'url(' + SITE_IMAGES.hero.src + ')';
  }

  // Apply service card images
  const serviceCards = document.querySelectorAll('.service-card');
  const serviceKeys = ['roofing','kitchen','bathroom','hardwood','carpentry','painting','decks','siding','basement','tile','additions','commercial'];
  
  serviceCards.forEach((card, i) => {
    const key = serviceKeys[i];
    const img = card.querySelector('img');
    if (img && SITE_IMAGES.services[key]) {
      img.src = SITE_IMAGES.services[key].src;
      img.alt = SITE_IMAGES.services[key].alt;
    }
  });

  // Build gallery dynamically from config
  const galleryGrid = document.querySelector('.gallery-grid');
  if (galleryGrid && SITE_IMAGES.gallery.length > 0) {
    galleryGrid.innerHTML = '';
    SITE_IMAGES.gallery.forEach(item => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.dataset.category = item.category;
      div.innerHTML = 
        '<img src="' + item.src + '" alt="' + item.alt + '" loading="lazy" width="500" height="400">' +
        '<div class="gallery-label">' + item.label + '</div>';
      galleryGrid.appendChild(div);
    });

    // Re-attach animation observer to new gallery items
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
      el.classList.add('animate-in');
      observer.observe(el);
    });

    // Re-attach filter functionality for dynamically built gallery
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      // Remove old listeners by cloning
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      
      newBtn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        newBtn.classList.add('active');
        newBtn.setAttribute('aria-selected', 'true');

        const filter = newBtn.dataset.filter;
        document.querySelectorAll('.gallery-item').forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.classList.remove('hidden');
            item.style.animation = 'fadeInUp 0.4s ease forwards';
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }
});
