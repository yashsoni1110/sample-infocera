# Professional Navbar Component - INFOCERA

A modern, feature-rich navigation bar component built with React, TypeScript, and shadcn/ui. This navbar includes a centered search, theme toggle, organized mega menu, and mobile-optimized hamburger sidebar.

## ✨ Features

### Core Features

- **Centered Search Bar**: Prominent search functionality in the center of desktop navbar
- **Theme Toggle**: Smooth light/dark mode switching with visual feedback
- **User Profile Icon**: Quick access to user account
- **Get Started CTA**: Prominent call-to-action button
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop

### Desktop Navigation

- **Minimal Main Links**: Clean horizontal layout showing only essential links
- **Mega Menu**: Three-column organized dropdown for Services
  - Software Products (7 items)
  - Web & Development (7 items)
  - Mobile Solutions (4 items)
- **Visual Icons**: Each service category and item has contextual icons
- **Smooth Animations**: Backdrop blur, hover effects, and transitions

### Mobile Navigation

- **Hamburger Menu**: Full-height sidebar with all content
- **Accordion Sections**: Expandable/collapsable service categories
- **Additional Links**: Industries, Technologies, Resources with sublinks
- **Mobile Search**: Toggleable search bar for mobile devices
- **Footer CTA**: Persistent action button at bottom of menu

## 📋 Complete Link Structure

### Main Navigation (Desktop)

1. Home
2. Services (Mega Menu - see below)
3. About Us
4. Portfolio

### Services Mega Menu (Desktop & Mobile)

#### Software Products

- HR & Payroll Management
- Jewellery Software
- CRM Software
- Real Estate Solutions
- Inventory Management
- Hospital Management
- School Management

#### Web & Development

- Website Design
- Web Development
- CRM Development
- Software Development
- Educational Portals
- Health Care Portals
- E-commerce Solutions

#### Mobile Solutions

- iOS Development
- Android Development
- Cross-Platform Apps
- Progressive Web Apps

### Additional Links (Mobile Hamburger Only)

#### Industries

- Healthcare
- Education
- Real Estate
- Retail & E-commerce
- Manufacturing
- Finance

#### Technologies

- React & Next.js
- Node.js & Express
- Python & Django
- Mobile (React Native)
- Cloud & DevOps
- AI & Machine Learning

#### Resources

- Blog
- Case Studies
- White Papers
- Documentation
- FAQ

#### Other Links

- Careers
- Contact Us

## 🚀 Installation

### Prerequisites

```bash
npm install react react-dom
npm install -D typescript @types/react @types/react-dom
npm install tailwindcss postcss autoprefixer
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react
```

### shadcn/ui Components

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add navigation-menu
```

### Radix UI Dependencies

```bash
npm install @radix-ui/react-slot
npm install @radix-ui/react-dialog
npm install @radix-ui/react-navigation-menu
```

## 📁 File Structure

```
src/
├── components/
│   ├── nav/
│   │   └── Nav.tsx          # Main navbar component
│   └── ui/
│       ├── button.tsx       # Button component
│       ├── sheet.tsx        # Sheet/sidebar component
│       └── navigation-menu.tsx  # Navigation menu component
├── lib/
│   └── utils.ts             # Utility functions (cn)
└── App.tsx                  # Demo page
```

## 🎨 Usage

### Basic Implementation

```tsx
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      {/* Your content */}
    </div>
  );
}
```

### Customization

#### Update Logo

Edit the `Logo` component in `Nav.tsx`:

```tsx
const Logo = () => (
  <a href="/" className="flex items-center gap-2.5 group cursor-pointer">
    {/* Your custom logo */}
  </a>
);
```

#### Modify Links

Update the data structures at the top of `Nav.tsx`:

```tsx
const SERVICES_DATA = [
  // Your services
];

const ADDITIONAL_LINKS = [
  // Your additional links
];
```

#### Change Theme Colors

The navbar uses Tailwind CSS and CSS variables. Update your `globals.css`:

```css
:root {
  --primary: /* your color */;
  --background: /* your color */;
  /* etc. */
}
```

## 🎯 Key Design Decisions

### Desktop Layout

- **Centered Search**: Primary feature in the center for easy access
- **Minimal Links**: Only Home, Services, About Us, Portfolio visible
- **Right Actions**: Theme, Profile, CTA button grouped together
- **Sticky Header**: Fixed position with blur effect on scroll

### Mobile Layout

- **Hamburger First**: All secondary content moved to sidebar
- **Accordion Organization**: Services and additional links use accordions
- **Search Toggle**: Expandable search to save space
- **Footer CTA**: Always visible action button

### Visual Design

- **Smooth Transitions**: 300-500ms animations throughout
- **Backdrop Blur**: Modern glassmorphism effect on scroll
- **Icon Integration**: Visual hierarchy with Lucide icons
- **Hover States**: Subtle transformations and color changes
- **Professional Spacing**: Consistent padding and margins

## 🔧 Technical Features

### Performance

- React hooks for state management
- Conditional rendering for mobile/desktop
- Optimized scroll listeners with cleanup
- CSS-only animations where possible

### Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels (via Radix UI)
- Focus states on interactive elements

### Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Theme System

The navbar supports light and dark themes:

```tsx
// Toggle theme
const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  document.documentElement.classList.toggle("dark");
};
```

Ensure your Tailwind config includes dark mode:

```js
// tailwind.config.js
module.exports = {
  darkMode: "class",
  // ...
};
```

## 📱 Mobile Menu Features

- **Full Height Sidebar**: Covers entire screen on mobile
- **Smooth Slide Animation**: Right-to-left entrance
- **Organized Sections**: Clear visual hierarchy
- **Expandable Categories**: Accordion pattern for sub-menus
- **Footer Contact**: Email and copyright info
- **CTA Persistence**: Get Started button always visible

## 🎁 Included Components

All necessary shadcn/ui components are included:

- ✅ Button with variants
- ✅ Sheet (Dialog/Sidebar)
- ✅ Navigation Menu with mega menu support
- ✅ Utility functions (cn)

## 📞 Support

For questions or issues:

- Email: hello@infocera.in
- Update links in the `MobileMenu` component footer

## 📄 License

© 2026 INFOCERA IT SOLUTIONS. All rights reserved.

---

**Built with:**

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide Icons
