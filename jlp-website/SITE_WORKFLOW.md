# JLP Website - Editing Guide & Workflow

## Table of Contents
1. [How to Edit Images](#how-to-edit-images)
2. [How to Extract Content from Wix](#how-to-extract-content-from-wix)
3. [Future Site Workflow](#future-site-workflow)

---

## How to Edit Images

### Option 1: Replace Placeholder Images (Easiest)

1. **Get your real photos** from phone/camera
2. **Put them in the `/images/` folder** inside the project
3. **Open `js/images.js`** and change the image paths

**Example - Change the hero image:**

```javascript
// BEFORE (placeholder from internet)
hero: {
  src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
  alt: "Beautiful home exterior in Fairfield County CT"
},

// AFTER (your real photo)
hero: {
  src: "images/hero-jlp-home.jpg",
  alt: "JLP Home Improvement - Quality craftsmanship in Connecticut"
},
```

**Example - Change a service card:**

```javascript
// BEFORE
roofing: {
  src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&h=800&fit=crop",
  alt: "Professional roofing installation in Danbury CT"
},

// AFTER
roofing: {
  src: "images/service-roofing.jpg",
  alt: "JLP roofing project in Danbury CT"
},
```

### Image Size Recommendations

| Section | Recommended Size | Aspect Ratio |
|---------|-----------------|--------------|
| Hero background | 1920x1080 or larger | Landscape |
| Service cards | 600x800 | Portrait |
| Gallery photos | 500x400 | Landscape |

### Image File Tips
- Use `.jpg` or `.webp` format
- Keep names lowercase, no spaces: `kitchen-remodel.jpg`
- Don't mix folders - put ALL images in the `/images/` folder

---

## How to Add Gallery Photos

1. Put your photos in the `/images/` folder
2. Open `js/images.js`
3. Find the `gallery` array (around line 70)
4. Copy an existing block and edit it:

```javascript
gallery: [
  // ... existing photos ...

  // ADD YOUR NEW PHOTO HERE:
  ,{
    src: "images/your-photo-name.jpg",
    alt: "Description of the work done",
    category: "kitchens",  // Choose: roofing, kitchens, bathrooms, floors, decks, carpentry, exteriors
    label: "Project Name - City"
  }
]
```

**Categories available:**
- `roofing`
- `kitchens`
- `bathrooms`
- `floors`
- `decks`
- `carpentry`
- `exteriors`

---

## How to Extract Content from Wix

### Method 1: Screenshots (Quick & Dirty)

**Best for:** Getting layout inspiration, color schemes, general structure

1. **Take screenshots** of each section as you scroll through the Wix site
   - iPhone: Volume + Power button
   - Mac: Cmd + Shift + 4 (select area)

2. **Screenshot everything:**
   - Hero section
   - Each service card
   - About section
   - Gallery
   - Contact section
   - Footer

3. **Send me the screenshots** and I'll extract the text content

**Problem with screenshots:** You lose the actual text, so I have to re-type everything. Not ideal for long pages.

---

### Method 2: Export from Wix (Better) ⭐ RECOMMENDED

Wix has a way to export your content:

1. **In Wix Editor:** Go to your site's dashboard
2. **Site Settings** → **Site Information**
3. Look for **Export Data** or **Download Site Content**
4. Wix may offer to export as:
   - PDF (for design reference)
   - CSV (for content/text)
   - Or show you the text you can copy

5. **Also screenshot the site** for layout reference

---

### Method 3: Copy Text Directly (Best for Text)

1. **Open your Wix site in a browser** (desktop)
2. **Scroll through each section**
3. **Select all text** (Cmd + A) or manually select sections
4. **Copy and paste** into a document

**Structure your document like this:**

```markdown
# HERO SECTION
- Headline: [paste text]
- Subheadline: [paste text]
- CTA Button: [paste text]

# SERVICES
## Service 1
- Title: [paste]
- Description: [paste]

## Service 2
- Title: [paste]
- Description: [paste]

... and so on
```

---

### Method 4: Use Browser DevTools (Best for Everything)

**For Chrome/Edge:**

1. **Go to your Wix site**
2. **Right-click → View Page Source** (or Cmd + Option + U)
3. This shows ALL the HTML - you can search for text content

**Or:**

1. **Go to your Wix site**
2. **Press F12** to open DevTools
3. **Click the arrow icon** (Inspect element)
4. **Click on any text** on the page
5. **Copy the text** from the HTML

**This gives you the EXACT text without re-typing.**

---

## Future Site Workflow

### Step 1: Design on Wix
- Build your layout
- Pick colors and fonts
- Add your real photos
- Write your content
- Test the scrolling experience

### Step 2: Extract Content
**For each section, extract:**

```
1. All text (headings, paragraphs, buttons)
2. Image URLs or screenshot references
3. Color hex codes (click on color picker in Wix)
4. Font names (check Wix text settings)
5. Layout order (what comes after what)
```

**Send me:**
- Document with all text
- Screenshots for layout reference
- Any exported files from Wix

### Step 3: I Build the Static Site
- Clean HTML/CSS/JS
- No framework dependencies
- Full SEO optimization
- Mobile responsive
- Fast loading

### Step 4: You Edit Images
- Drop real photos in `/images/` folder
- Update `js/images.js` with paths
- Refresh browser - done!

### Step 5: Deploy
- Push to Netlify
- Custom domain anytime

---

## Quick Reference: Editing Checklist

### Before Going Live

- [ ] Replace hero image with real photo
- [ ] Replace all 12 service card images
- [ ] Update all gallery photos
- [ ] Update all alt text (SEO)
- [ ] Update gallery labels
- [ ] Update contact info (phone, email, address)
- [ ] Check all links work
- [ ] Test on phone (mobile view)

### Adding New Gallery Items

1. Add photo to `/images/` folder
2. Open `js/images.js`
3. Find gallery array
4. Add new entry with category + label
5. Save and refresh

---

## Need Help?

Message me with:
- What you want to change
- Screenshots if visual
- The new text/content you want

I'll update the code for you.
