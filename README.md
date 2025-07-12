# Game & Grub - React Static Site

A modern React 18 single-page application (SPA) for Game & Grub, a hybrid board-game shop & "food arcade." Built with TypeScript, Tailwind CSS, and designed for GitHub Pages deployment.

![Game & Grub Homepage](https://github.com/user-attachments/assets/453a6b7b-a231-42a7-93c4-bd6a4a8a98b3)

## 🎮 About Game & Grub

Game & Grub is a playful yet polished storefront for a hybrid board-game shop & "food arcade." Visitors can browse games, preview the kitchen menu, plan a visit, and assemble a local cart that lists chosen games, dishes, and preferred time slots.

## ✨ Features

- **Game Catalog**: Browse board games with filters for genre, player count, age, and difficulty
- **Food Menu**: Explore categorized food and beverage offerings
- **Table Booking**: Reserve tables with calendar picker and time slot selection
- **Events & Promotions**: View upcoming events, leagues, and special dinners
- **Cart System**: Local shopping cart stored in localStorage
- **Responsive Design**: Mobile-first design with dark mode support
- **Static Data**: All content served from JSON files in `/public/data/`

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3 with custom color palette
- **Routing**: React Router v6 with HashRouter (GitHub Pages compatible)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion 6
- **Deployment**: GitHub Actions → GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navigation.tsx   # Main navigation component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with hero CTAs
│   ├── GameCatalog.tsx # Game browsing and filtering
│   ├── FoodMenu.tsx    # Food menu with categories
│   ├── TableBooking.tsx # Reservation system
│   ├── EventsPromos.tsx # Events and promotions
│   ├── AboutContact.tsx # About and contact info
│   └── AdminStub.tsx   # Read-only admin dashboard
├── context/            # React context providers
└── App.tsx            # Main app with routing

public/
├── data/              # Static JSON data files
│   ├── games.json     # Game catalog data
│   ├── menu.json      # Food menu data
│   ├── events.json    # Events and promotions
│   └── tables.json    # Table availability
└── img/               # Optimized images (.webp)
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/ThePraxium/Webpage_react.git
cd Webpage_react

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173/Webpage_react/`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎨 Design System

### Color Palette

- **Primary**: `#5B2E91` (Deep Purple) - Brand primary
- **Accent**: `#14D9C4` (Neon Teal) - Accents & links  
- **Warning**: `#F6C453` (Warm Yellow) - Callouts & buttons
- **Dark**: `#111827` (Charcoal) - Dark backgrounds
- **Light**: `#F9FAFB` (Snow) - Light backgrounds

### Typography

- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

## 📊 Data Structure

All dynamic data is stored in JSON files in `/public/data/`:

- `games.json` - Game catalog with pricing, stock, ratings
- `menu.json` - Food items with categories, allergens, prices  
- `events.json` - Events with scheduling and participation info
- `tables.json` - Table availability and amenities

## 🚀 Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when pushing to the `main` branch.

**Live Site**: https://thepraxium.github.io/Webpage_react

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🔮 Future Enhancements

- **PWA**: Offline catalog & menu browsing
- **Loyalty Points**: Track visit count in IndexedDB
- **Gift Cards**: Stripe Checkout integration
- **Blog**: Markdown posts with vite-plugin-mdx
- **Real-time Features**: Live inventory, payments, authentication

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

For questions or support, please open an issue on GitHub or contact us at info@gameandgrub.com
