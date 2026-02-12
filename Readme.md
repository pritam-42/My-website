# 🚀 Ultra-Modern Portfolio Website 2026

A premium, cutting-edge portfolio website built with the latest web technologies and modern design trends.

## ✨ Features

### 🎨 Design & UI
- **Ultra-modern aesthetic** with glassmorphism effects
- **Gradient text** and neon glow highlights
- **Smooth animations** powered by GSAP
- **Three.js 3D background** with particle effects
- **Custom cursor** with trailing effect
- **Dark/Light theme** with smooth transitions
- **Fully responsive** design (360px to 4K)

### 🔧 Technologies Used
- HTML5 (Semantic markup)
- CSS3 (Custom properties, Grid, Flexbox)
- JavaScript ES6+
- GSAP + ScrollTrigger (Animations)
- Three.js (3D graphics)
- Bootstrap 5 (Grid system)
- Vanilla Tilt (3D tilt effects)
- Google Fonts (Typography)

### 📱 Sections

1. **Hero Section**
   - Animated gradient text
   - Typewriter effect
   - CTA buttons with hover effects
   - Floating profile card with 3D tilt
   - Animated counter statistics
   - Three.js particle background

2. **About Section**
   - Modern split layout
   - Feature cards with icons
   - Hover animations
   - Scroll-triggered reveals

3. **Skills Section**
   - Interactive skill cards
   - Animated progress bars
   - Technology stack logos
   - Hover effects with glow

4. **Projects Section**
   - Filterable project grid
   - Hover effects with image zoom
   - Modal popup with project details
   - Smooth category filtering

5. **Experience & Education**
   - Vertical timeline layout
   - Scroll-triggered animations
   - Interactive timeline items

6. **Testimonials**
   - Auto-playing slider
   - Manual navigation controls
   - Dot indicators
   - Smooth transitions

7. **Contact Section**
   - Validated contact form
   - Social media links
   - Contact information cards
   - Success message on submission

8. **Footer**
   - Newsletter subscription
   - Quick links
   - Social icons
   - Minimal modern design

### 🎯 Interactive Features

- ✅ Scroll progress indicator
- ✅ Active navigation highlighting
- ✅ Smooth scroll behavior
- ✅ Scroll-to-top button
- ✅ Page loader animation
- ✅ Custom cursor with hover effects
- ✅ Magnetic button effects
- ✅ Form validation
- ✅ Theme persistence (localStorage)
- ✅ Lazy loading images
- ✅ Parallax scrolling effects
- ✅ GSAP timeline animations
- ✅ ScrollTrigger reveals
- ✅ Mobile-responsive navigation
- ✅ Keyboard accessibility (ESC to close modal)

### 🎨 Design Highlights

- **Typography**: Syne (Display), DM Sans (Body), JetBrains Mono (Code)
- **Color Scheme**: Purple gradient primary, Pink secondary, Cyan accent
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Shadows**: Layered shadows for depth
- **Border Radius**: Consistent rounded corners
- **Animations**: Smooth, physics-based transitions

### ⚡ Performance Optimizations

- Lazy loading for images
- CSS custom properties for theming
- RequestAnimationFrame for smooth animations
- Minimal external dependencies
- Optimized Three.js particle count
- Debounced scroll events
- CSS-only animations where possible

## 📦 File Structure

```
portfolio-2026/
├── index.html          # Main HTML file
├── style.css           # Comprehensive CSS styles
├── script.js           # Main JavaScript functionality
├── three-bg.js         # Three.js background animation
├── README.md           # This file
└── assets/             # Images and icons (placeholder)
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. Clone or download the repository
2. Open `index.html` in your browser
3. Customize the content in `index.html`
4. Update colors in CSS variables
5. Replace placeholder images with your own

### Customization Guide

#### 1. Colors (CSS Variables)
Edit the `:root` section in `style.css`:
```css
:root {
    --primary: #6366f1;      /* Change primary color */
    --secondary: #ec4899;    /* Change secondary color */
    --accent: #06b6d4;       /* Change accent color */
}
```

#### 2. Content
- Update text in `index.html`
- Replace images (use Unsplash URLs or local images)
- Modify project data in `script.js` (projects array)

#### 3. Fonts
Change fonts in the Google Fonts link and CSS:
```css
--font-primary: 'Your Font', sans-serif;
--font-display: 'Your Display Font', sans-serif;
```

#### 4. Three.js Background
Adjust particle count and colors in `three-bg.js`:
```javascript
const particlesCount = 1500; // Reduce for better performance
```

## 🎨 Color Schemes (Presets)

### Default (Purple Gradient)
```css
--primary: #6366f1;
--secondary: #ec4899;
--accent: #06b6d4;
```

### Ocean Blue
```css
--primary: #0ea5e9;
--secondary: #06b6d4;
--accent: #8b5cf6;
```

### Sunset Orange
```css
--primary: #f97316;
--secondary: #ef4444;
--accent: #ec4899;
```

### Forest Green
```css
--primary: #10b981;
--secondary: #059669;
--accent: #14b8a6;
```

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 767px
- **Tablet**: 768px - 991px
- **Laptop**: 992px - 1365px
- **Desktop**: 1366px - 1919px
- **4K**: 1920px+

## 🛠️ Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## ⚠️ Important Notes

1. **Images**: Replace all Unsplash URLs with your own images
2. **Contact Form**: Implement backend form handling
3. **CV Download**: Add your actual CV file
4. **Social Links**: Update with your real social media profiles
5. **Google Maps**: Add your actual location if using maps
6. **SEO**: Update meta tags with your information
7. **Analytics**: Add Google Analytics or your preferred tracking

## 🔧 Advanced Customization

### Adding New Sections
1. Create HTML structure in `index.html`
2. Add styles in `style.css`
3. Add animations in `script.js` using GSAP
4. Update navigation menu

### Modifying Animations
Edit GSAP timelines in `script.js`:
```javascript
gsap.from('.your-element', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
});
```

### Changing Three.js Effects
Modify `three-bg.js` to change:
- Particle count
- Colors
- Movement speed
- Camera position
- Additional 3D objects

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements.

## 📧 Contact

For questions or support:
- Email: hello@example.com
- Website: https://yourportfolio.com

## 🙏 Credits

- **Fonts**: Google Fonts
- **Icons**: Font Awesome
- **Images**: Unsplash (for demo)
- **Framework**: Bootstrap 5
- **Animation**: GSAP
- **3D**: Three.js

---

Built with ❤️ using modern web technologies

**Version**: 1.0.0  
**Last Updated**: 2026