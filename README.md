# Watch Tube TV - Streaming Website

A modern, responsive streaming website built with HTML, CSS, and JavaScript, inspired by Amazon Prime Video's design and user experience.

## 🎯 Project Overview

Watch Tube TV is a complete streaming platform website featuring:
- **Hero Section** with dynamic background video
- **Responsive Design** that works on all devices
- **Amazon Prime Video-inspired** theme and color scheme
- **Interactive Components** including modals, FAQ accordion, and navigation
- **Legal Pages** (Privacy Policy, Terms of Service, Refund Policy)
- **Modern UI/UX** with smooth animations and transitions

## 🚀 Features

### ✨ Main Sections
- **Hero Section**: Full-screen video background with centered content
- **Services**: Grid layout showcasing platform features
- **Pricing Plans**: Three-tier subscription model with highlighting
- **About Us**: Company information with statistics
- **FAQ**: Interactive accordion-style questions and answers
- **Footer**: Complete site navigation and legal links

### 🎨 Design Features
- **Color Scheme**: Amazon Prime Video inspired (#00a8e1 primary, #0f171e background)
- **Typography**: Amazon Ember font family
- **Responsive Grid**: CSS Grid and Flexbox layouts
- **Glass Morphism**: Modern backdrop blur effects
- **Smooth Animations**: CSS transitions and keyframe animations

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Breakpoints**: 480px, 768px, 1024px
- **Mobile Navigation**: Hamburger menu with smooth transitions
- **Touch-Friendly**: Optimized button sizes and spacing

### ⚡ Interactive Features
- **Modal System**: Sign-in, sign-up, and plan selection modals
- **FAQ Accordion**: Expandable question sections
- **Smooth Scrolling**: Anchor link navigation
- **Video Fallback**: Graceful handling of video loading failures
- **Lazy Loading**: Performance optimization for images

## 📁 File Structure

```
watch-tube-tv/
├── index.html          # Main homepage
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── privacy.html        # Privacy Policy page
├── terms.html          # Terms of Service page
├── refund.html         # Refund Policy page
└── README.md           # Project documentation
```

## 🛠 Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Font Awesome**: Icon library
- **Google Fonts**: Amazon Ember typography

## 🎨 Color Palette

```css
Primary Blue: #00a8e1
Dark Background: #0f171e
Secondary Dark: #1a2832
Text Primary: #ffffff
Text Secondary: #e6e6e6
Text Muted: #b3b3b3
```

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in a web browser
3. **Enjoy** the fully functional streaming website

### Local Development
```bash
# Option 1: Simple HTTP Server (Python)
python -m http.server 8000

# Option 2: Live Server (VS Code Extension)
# Install "Live Server" extension and right-click index.html

# Option 3: Node.js HTTP Server
npx http-server
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎯 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📄 Legal Pages

### Privacy Policy (`privacy.html`)
Comprehensive privacy policy covering:
- Data collection and usage
- Information sharing
- Security measures
- User rights
- Cookies and tracking

### Terms of Service (`terms.html`)
Complete terms of service including:
- Service description
- Membership and billing
- Account responsibilities
- Content usage rights
- Liability limitations

### Refund Policy (`refund.html`)
Detailed refund policy covering:
- Free trial terms
- Cancellation process
- Refund eligibility
- Billing disputes
- Contact information

## 🎨 Key CSS Features

### Modern Effects
```css
/* Glass Morphism */
backdrop-filter: blur(10px);

/* Gradient Text */
background: linear-gradient(135deg, #ffffff 0%, #00a8e1 100%);
-webkit-background-clip: text;

/* Smooth Animations */
transition: all 0.3s ease;
```

### Responsive Grid
```css
/* Services Grid */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

/* Plans Grid */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

## 🎭 JavaScript Features

- **Modal Management**: Dynamic modal creation and destruction
- **FAQ Accordion**: Smooth expand/collapse functionality
- **Mobile Navigation**: Hamburger menu toggle
- **Scroll Effects**: Navbar opacity and hide/show
- **Form Handling**: Interactive sign-in/sign-up forms
- **Performance**: Intersection Observer for animations

## 🎪 Animation Details

### Hero Section
- **Fade In Up**: Staggered content animation
- **Gradient Text**: Animated text colors
- **Button Hover**: 3D transform effects

### Cards and Components
- **Hover Effects**: Lift and glow animations
- **Loading States**: Skeleton and fade transitions
- **Micro-interactions**: Button press feedback

## 📊 Performance Optimizations

- **Lazy Loading**: Images and non-critical resources
- **Efficient Selectors**: Optimized CSS and JavaScript
- **Compressed Assets**: Minified external libraries
- **Smooth Scrolling**: Hardware-accelerated animations

## 🎨 Customization

### Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #00a8e1;
  --background-color: #0f171e;
  --text-color: #ffffff;
}
```

### Content
- Modify text content in HTML files
- Update hero video source in `index.html`
- Change company information in legal pages

## 🌟 Features in Detail

### Hero Video Background
- Autoplay with mute for browser compatibility
- Fallback gradient background
- Overlay for content readability
- Responsive scaling

### Interactive Modals
- Sign-in/Sign-up forms
- Plan selection dialogs
- Welcome messages
- Keyboard navigation (ESC to close)

### FAQ System
- Accordion-style expansion
- Single item open at a time
- Smooth height transitions
- Click-to-toggle functionality

## 🎯 Future Enhancements

Potential additions for extended functionality:
- User authentication system
- Video player integration
- Content management system
- Payment processing
- User profiles and watchlists
- Content recommendation engine

## 📞 Support

For questions or support regarding this project:
- **Email**: support@watchtubetv.com
- **Documentation**: This README file
- **Issues**: GitHub Issues (if applicable)

## 📄 License

This project is created for educational and demonstration purposes. All design inspiration is credited to Amazon Prime Video and similar streaming platforms.

---

**Built with ❤️ for the streaming experience**
