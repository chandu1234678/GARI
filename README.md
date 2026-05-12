# GARI - GITAM Aerospace Research Initiative

![GARI Logo](public/gari-logo.png)

A modern, responsive website for GARI (GITAM Aerospace Research Initiative) - a student-driven aerospace and research initiative focused on innovation, engineering excellence, and next-generation technological development.

## 🚀 Live Demo

Visit: [Your Vercel URL will be here]

## ✨ Features

- **Modern React Architecture** - Built with React 19 and React Router
- **Responsive Design** - Mobile-first approach, works on all devices
- **3D Graphics** - Interactive 3D rocket visualization using Three.js
- **Smooth Animations** - Powered by Framer Motion
- **Professional UI** - Clean, aerospace-themed design
- **Fast Performance** - Optimized build with code splitting
- **SEO Optimized** - Meta tags and semantic HTML

## 📁 Project Structure

```
src/
├── components/
│   ├── 3d/              # 3D graphics components
│   │   ├── Rocket3D.jsx
│   │   ├── Scene3D.jsx
│   │   └── StarField.jsx
│   ├── common/          # Reusable components
│   │   └── Logo.jsx
│   ├── layout/          # Layout components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/        # Homepage sections
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── AnimatedStats.jsx
│       ├── ImageGallery.jsx
│       └── ParallaxSection.jsx
├── pages/               # Page components
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── MissionPage.jsx
│   ├── CanSatPage.jsx
│   ├── TeamPage.jsx
│   ├── AchievementsPage.jsx
│   ├── SponsorsPage.jsx
│   └── ContactPage.jsx
├── App.js              # Main app component
└── index.js            # Entry point
```

## 🛠️ Tech Stack

- **React** 19.2.6 - UI library
- **React Router** 7.15.0 - Client-side routing
- **Framer Motion** 12.38.0 - Animation library
- **Three.js** 0.184.0 - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chandu1234678/GARI.git
cd GARI
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build

Create a production build:

```bash
npm run build
```

The build folder will contain optimized production files.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Create React App and deploy

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

### Quick Deploy Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📄 Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (one-way operation)

## 🎨 Pages

- **Home** - Hero section, stats, gallery
- **About** - Team information and mission
- **Mission** - GARI's goals and objectives
- **CanSat** - IN-SPACe CanSat 2026 mission details
- **Team** - Team members and divisions
- **Achievements** - Awards and accomplishments
- **Sponsors** - Sponsor tiers and partnerships
- **Contact** - Contact information and form

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific variables:

```env
REACT_APP_API_URL=your_api_url
REACT_APP_ANALYTICS_ID=your_analytics_id
```

### Custom Domain

To use a custom domain on Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created for GARI - GITAM Aerospace Research Initiative.

## 👥 Team

**GARI Team**
- 30+ Active Members
- 6+ Technical Divisions
- GITAM University, Hyderabad

## 📧 Contact

- **Email**: gari.team@gmail.com
- **Instagram**: [@gari.team](https://instagram.com/gari.team)
- **Location**: GITAM University, Hyderabad

## 🙏 Acknowledgments

- GITAM University for institutional support
- All team members and contributors
- Open source community

---

**Built with ❤️ by GARI Team**
