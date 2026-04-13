# JLP Home Improvement - Website

## Quick Start
Just open `index.html` in your browser to preview the site.

---

## HOW TO CHANGE IMAGES (The Easy Way)

All images are controlled from ONE file: **`js/images.js`**

### Step 1: Get your real project photos
- Take photos from Jose's phone/camera roll
- Recommended formats: .jpg or .webp
- Name them clearly: `kitchen-remodel-greenwich.jpg`, `roof-repair-danbury.jpg`

### Step 2: Put photos in the `images/` folder
Drop your photos into the `images/` folder in this project.

### Step 3: Open `js/images.js` and swap the URLs

**Before (placeholder):**
```js
roofing: {
  src: "https://images.unsplash.com/photo-1632759145351...",
  alt: "Professional roofing installation in Danbury CT"
},
```

**After (your real photo):**
```js
roofing: {
  src: "images/roof-replacement-danbury.jpg",
  alt: "JLP roof replacement project in Danbury CT"
},
```

### Step 4: Save and refresh
That's it! Open `index.html` in your browser and the new photos appear.

---

## Image Sections to Update

| Section | Where in images.js | Recommended Size |
|---------|-------------------|-----------------|
| Hero background | `SITE_IMAGES.hero` | 1920x1080px landscape |
| Service cards (12) | `SITE_IMAGES.services.roofing`, `.kitchen`, etc. | 600x800px portrait |
| Gallery photos | `SITE_IMAGES.gallery[]` array | 500x400px landscape |

### Adding MORE gallery photos
In `js/images.js`, find the `gallery` array and add a new entry:

```js
gallery: [
  // ...existing photos...
  
  ,{
    src: "images/your-new-photo.jpg",
    alt: "Description for SEO",
    category: "kitchens",    // Options: roofing, kitchens, bathrooms, floors, decks, carpentry, exteriors
    label: "Kitchen Remodel - Greenwich"
  }
]
```

---

## Project Structure

```
jlp-website/
  index.html          <- Main page
  privacy.html        <- Privacy policy (required for compliance)
  robots.txt          <- Tells search engines what to crawl
  sitemap.xml         <- Helps Google index your pages
  netlify.toml        <- Netlify deploy config
  css/
    styles.css        <- All styling (colors, layout, responsive)
  js/
    images.js         <- *** EDIT THIS TO CHANGE ALL PHOTOS ***
    main.js           <- Interactivity (nav, filters, form, animations)
  images/
    (put your real photos here)
```

---

## Deploying to Netlify (Free)

1. Go to https://app.netlify.com
2. Sign up / log in
3. Drag the entire `jlp-website` folder onto the deploy area
4. Done! You'll get a live URL instantly
5. To use jlpimprovement.com:
   - In Netlify: Site Settings > Domain Management > Add custom domain
   - In your domain registrar: Point DNS to Netlify's nameservers
   - Netlify handles free SSL automatically

---

## Before Launch Checklist

- [ ] Replace ALL placeholder images with real project photos
- [ ] Add Jose's CT contractor license number (in footer or hero)
- [ ] Set up Formspree for the contact form:
      1. Go to https://formspree.io and create a free account
      2. Create a new form, copy the form ID
      3. In index.html, replace `YOUR_FORM_ID` in the form action URL
- [ ] Set up Google Analytics:
      1. Go to https://analytics.google.com
      2. Create a property for jlpimprovement.com
      3. Copy the tracking script and paste it in the <head> of index.html
- [ ] Set up professional email (info@jlpimprovement.com)
- [ ] Get domain registrar access from Jose
- [ ] Update social media links (Facebook, Instagram, Google) in the contact section
- [ ] Deploy to Netlify
- [ ] Point domain DNS to Netlify

---

## SEO Features Already Built In

- Schema.org structured data (LocalBusiness + Service catalog)
- Open Graph tags for social sharing
- Twitter Card meta tags
- Geo meta tags for local search
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (H1 > H2 > H3)
- Alt text on all images
- robots.txt + sitemap.xml
- Canonical URL
- Lazy-loaded images
- Mobile-responsive design
- Fast load time (clean HTML/CSS/JS, no frameworks)

---

## Colors (Design Tokens)

| Name | Hex | Usage |
|------|-----|-------|
| Dark | #1E1812 | Darkest text, deep backgrounds |
| Brown | #2C2218 | Navbar, dark sections |
| Med Brown | #5C4A3A | Secondary text |
| Tan | #C4A882 | Primary accent, CTAs |
| Tan Light | #D4BC9A | Hover states |
| Cream | #F5F0E8 | Alternate section backgrounds |
| Warm White | #FAF9F6 | Main page background |
| Slate | #8B8178 | Muted text, labels |
| Accent | #B8956A | Secondary accent, stars |

## Fonts
- **Headings:** Cormorant Garamond (elegant serif)
- **Body:** Outfit (clean sans-serif)
