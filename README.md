# 🌍 ROMA Cyber Attack Map

## 🚀 Real-time Global Cyber Threat Intelligence Platform

**ROMA Cyber Attack Map** is an advanced interactive 3D visualization tool for tracking and analyzing cybersecurity threats in real-time across the globe. Built with React, TypeScript, and Three.js, it provides a comprehensive view of global cyber attacks with an AI-powered chatbot assistant.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7+-646CFF?logo=vite)

## ✨ Key Features

### 🌍 Interactive 3D Globe Visualization
- **60+ countries** with accurate GPS coordinates and flag displays
- **9 major cyber hubs** highlighted as primary attack sources
- **Real-time attack visualization** with dynamic 3D arcs
- **Smooth auto-rotation** with optimized performance
- **Country tooltips** showing population and geographic data

### ⚔️ Advanced Attack Simulation System
- **21 different attack types** including DDoS, Ransomware, Zero Day, APT
- **Intelligent routing**: 60% attacks originate from major cyber hubs
- **Real-time generation**: New attacks every 1-3 seconds
- **Dynamic severity levels**: Critical, High, Medium threat classifications
- **Auto-completion system**: 60% blocked, 40% successful attacks

### 🤖 ROMA AI Chatbot Assistant
- **Bilingual support**: English and Vietnamese commands
- **Deep cybersecurity knowledge**: Expert explanations of attack types
- **Interactive commands**: Generate custom attacks, view statistics
- **Real-time analysis**: Live threat assessment and recommendations
- **Educational mode**: Learn about cybersecurity concepts interactively

### 📊 Real-time Attack Dashboard
- **Live statistics**: Total/Active/Blocked/Critical attack counters
- **Recent attack timeline**: Last 5 attacks with detailed information
- **Dynamic threat level indicator**: Visual threat assessment
- **Glassmorphism design**: Modern UI with backdrop blur effects
- **Responsive layout**: Optimized for all screen sizes

## 🎬 Demo

```bash
# Start development server
npm run dev

# Open browser
http://localhost:5174/
```

> The system automatically initializes with 5 attacks and continues generating new threats every 1-3 seconds.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **Modern Browser**: Chrome, Edge, Firefox (latest versions)
- **WebGL Support**: Required for 3D visualization

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/TuanChao/roma-attack-map-cyber.git
cd roma-attack-map-cyber

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open your browser and navigate to:
# http://localhost:5174
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## 🎮 How to Use

### 1. Globe Interaction
- **Mouse drag**: Rotate the globe to view different regions
- **Scroll wheel**: Zoom in/out for detailed or overview perspective
- **Hover over flags**: View country information and statistics
- **Watch attack arcs**: Real-time visualization of cyber attacks

### 2. Dashboard Monitoring
- **Statistics panel**: Monitor total, active, blocked, and critical attacks
- **Recent attacks list**: View the 5 most recent attacks with details
- **Threat level bar**: Visual indicator of current global threat level
- **Click header**: Minimize/expand the dashboard panel

### 3. AI Chatbot Commands

#### Attack Generation
```bash
# Generate specific attacks
attack DDoS from China
attack Ransomware from Russia
attack Phishing from North Korea

# Random attacks
random attack
mass attack
random 5
```

#### Learning & Analysis
```bash
# Learn about attack types
What is DDoS?
Explain Ransomware
How does XSS work?
What is Zero Day?

# Get statistics
statistics
analyze threat
help
```

#### System Control
```bash
# Control attack generation
stop all
continue
clear screen
```

### 4. Attack Types & Severity

| Severity | Types | Color Code |
|----------|-------|------------|
| **Critical** | Ransomware, Zero Day, APT, Data Breach | 🔴 Red |
| **High** | DDoS, Malware, Botnet, SQL Injection | 🟠 Orange |
| **Medium** | Phishing, Brute Force, Social Engineering | 🟡 Yellow |

## 🌍 Supported Countries & Cyber Hubs

### Major Cyber Hubs (Red Markers)
- 🇨🇳 **China** (Beijing)
- 🇷🇺 **Russia** (Moscow)
- 🇺🇸 **United States** (Washington DC)
- 🇰🇵 **North Korea** (Pyongyang)
- 🇮🇷 **Iran** (Tehran)
- 🇯🇵 **Japan** (Tokyo)
- 🇮🇱 **Israel** (Jerusalem)
- 🇬🇧 **United Kingdom** (London)
- 🇩🇪 **Germany** (Berlin)

### Regional Coverage
- **Asia-Pacific**: 15 countries including South Korea, Vietnam, India, Australia
- **Europe**: 18 countries including France, Netherlands, Spain, Italy
- **Americas**: 9 countries including Brazil, Canada, Mexico
- **Africa & Middle East**: 11 countries including Saudi Arabia, UAE, South Africa

**Total: 60+ countries with accurate GPS coordinates**

## 🛠️ Tech Stack

### Core Technologies
- **React 18+**: Modern React with hooks and functional components
- **TypeScript 5.8+**: Type-safe development with strict mode
- **Vite 7+**: Fast build tool with hot module replacement
- **Globe.gl**: 3D globe visualization library
- **Three.js**: WebGL-based 3D graphics rendering

### Additional Libraries
- **Flag Icons**: Country flag visualization
- **Google Fonts**: Saira font family for modern typography
- **CSS3**: Advanced styling with glassmorphism and animations

### Development Tools
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting (optional)
- **VS Code**: Recommended development environment
## 📁 Project Structure

```
roma-attack-map-cyber/
├── public/
│   ├── roma-icon.svg          # Application favicon
│   └── vite.svg               # Vite logo
├── src/
│   ├── components/
│   │   ├── AttackDashboard.tsx      # Real-time attack dashboard
│   │   ├── AttackDashboard.css      # Dashboard styling
│   │   ├── GlobeComponent.tsx       # 3D globe visualization
│   │   ├── GlobeComponent.css       # Globe component styles
│   │   ├── RomaAIPanel.tsx          # AI chatbot interface
│   │   ├── RomaAIPanel.css          # Chatbot panel styling
│   │   └── attackExplanations.ts    # Attack type definitions
│   ├── App.tsx                # Main application component
│   ├── App.css               # Global application styles
│   ├── main.tsx              # Application entry point
│   └── index.css             # Base CSS styles
├── index.html                # HTML template
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build configuration
└── README.md                 # Project documentation
```

## 🎨 Visual Design

### Color Scheme
- **Primary**: Cyan (#00ffff) for highlights and accents
- **Danger**: Red (#ff4757) for critical threats
- **Warning**: Orange (#ffa502) for high-severity attacks
- **Success**: Green (#2ed573) for blocked attacks
- **Background**: Dark space theme with gradient

### Typography
- **Font Family**: Saira (Google Fonts)
- **Weights**: 300-800 for various text elements
- **Effects**: Gradient text, glow animations, smooth transitions

### Animations
- **Attack Arcs**: Dynamic movement with variable speed
- **Globe Rotation**: Smooth auto-rotation
- **UI Elements**: Slide-in, fade, pulse effects
- **Statistics**: Real-time counter animations

## ⚡ Performance Optimizations

### Memory Management
- Maximum 100 concurrent attacks with auto-cleanup
- Efficient React state management with hooks
- Optimized re-rendering with memoization

### Rendering Optimizations
- Atmosphere effects disabled for better performance
- Dynamic arc rendering with cleanup
- Canvas auto-resize with throttling
- Hardware-accelerated CSS animations

### Network Optimizations
- CDN resources for external assets
- Code splitting with Vite
- Tree shaking for smaller bundle size
- Lazy loading for components

## 🔧 Configuration

### Environment Variables
Create a `.env` file for custom configuration:

```env
VITE_PORT=5174
VITE_ATTACK_INTERVAL=2000
VITE_MAX_ATTACKS=100
```

### Customization Options

#### Modify Attack Frequency
```typescript
// src/components/GlobeComponent.tsx
const attackInterval = 2000; // milliseconds between attacks
```

#### Add New Attack Types
```typescript
// src/components/attackExplanations.ts
export const attackTypes = {
  "NEW_ATTACK": {
    severity: "high",
    color: "#ff0000",
    explanation: "Description of new attack type"
  }
};
```

#### Update Country List
```typescript
// src/components/GlobeComponent.tsx
const countryCoordinates = {
  "New Country": {
    lat: 0.0,
    lng: 0.0,
    population: 1000000,
    code: "xx",
    flag: "🏴",
    isHub: false
  }
};
```
## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Solution 1: Kill process using port 5174
netstat -ano | findstr :5174
taskkill /PID <ProcessID> /F

# Solution 2: Use different port
npm run dev -- --port 3000
```

#### Globe Not Displaying
- Verify WebGL support: Visit `chrome://gpu`
- Check browser console for JavaScript errors
- Clear browser cache and hard reload (Ctrl+Shift+R)
- Ensure modern browser version

#### Performance Issues
- Close unnecessary browser tabs
- Reduce attack frequency in configuration
- Disable browser extensions that may interfere
- Check system RAM usage

#### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf .vite
npm run dev
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Globe renders correctly on page load
- [ ] Attacks generate automatically every 1-3 seconds
- [ ] Dashboard updates in real-time
- [ ] AI chatbot responds to commands
- [ ] Responsive design works on mobile
- [ ] All 60+ countries display correctly
- [ ] Performance remains smooth with 100+ attacks

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+
- ❌ Internet Explorer (not supported)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### Development Workflow
1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/yourusername/roma-attack-map-cyber.git`
3. **Create** a feature branch: `git checkout -b feature/amazing-feature`
4. **Make** your changes with proper TypeScript types
5. **Test** thoroughly across different browsers
6. **Commit** with descriptive messages: `git commit -m 'Add amazing feature'`
7. **Push** to your branch: `git push origin feature/amazing-feature`
8. **Create** a Pull Request with detailed description

### Code Style Guidelines
- Use TypeScript strict mode
- Follow React functional component patterns
- Implement responsive design principles
- Add proper error handling
- Include JSDoc comments for complex functions
- Maintain consistent naming conventions

### Issue Reporting
When reporting issues, please include:
- Browser version and operating system
- Steps to reproduce the problem
- Expected vs actual behavior
- Console error messages (if any)
- Screenshots or screen recordings

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 ROMA Cyber Security

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## ⚠️ Security & Disclaimer

### Educational Purpose Only
This application is designed for **educational and research purposes** in cybersecurity:

- ✅ **Cybersecurity education and training**
- ✅ **Research and academic studies**
- ✅ **Security awareness demonstrations**
- ✅ **Threat intelligence visualization**

### Important Warnings
- ❌ **DO NOT** use for illegal activities or actual attacks
- ❌ **DO NOT** target real systems or infrastructure
- ❌ **DO NOT** use for unauthorized penetration testing
- ❌ **NO REAL DATA** is collected or transmitted

### Data Privacy
- **No personal information** is collected
- **No external APIs** are used (except public CDNs)
- **All attack data is simulated** and not real
- **No tracking or analytics** are implemented

## 🌟 Acknowledgments

### Technologies & Libraries
- [React](https://react.dev/) - The library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at scale
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Globe.gl](https://github.com/vasturiano/globe.gl) - 3D globe data visualization
- [Three.js](https://threejs.org/) - JavaScript 3D library
- [Flag Icons](https://github.com/lipis/flag-icons) - Country flag icons collection

### Inspiration
- Real-world threat intelligence platforms
- Cybersecurity visualization research
- Global attack monitoring systems
- Educational cybersecurity tools

## 📞 Support & Contact

### Getting Help
- **GitHub Issues**: [Create an issue](https://github.com/TuanChao/roma-attack-map-cyber/issues)
- **Documentation**: Check this README and inline code comments
- **Community**: Join discussions in GitHub Discussions

### Roadmap & Future Features
- [ ] Historical attack data analysis
- [ ] Custom attack scenario builder
- [ ] Integration with real threat feeds (educational use)
- [ ] Mobile app development
- [ ] Multi-language support expansion
- [ ] Advanced AI threat prediction

---

<div align="center">

## 🌟 Star this repository if you found it helpful!

**Built with ❤️ for cybersecurity education**

[![GitHub stars](https://img.shields.io/github/stars/TuanChao/roma-attack-map-cyber?style=social)](https://github.com/TuanChao/roma-attack-map-cyber/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/TuanChao/roma-attack-map-cyber?style=social)](https://github.com/TuanChao/roma-attack-map-cyber/network/members)

### Made with 💜 by the ROMA Team

</div>

<details>
<summary><b>View Full List</b></summary>

| # | Type | Severity | Color | Description |
|---|------|----------|-------|-------------|
| 1 | **DDoS** | High | 🔴 `#ff4757` | Distributed Denial of Service |
| 2 | **Phishing** | Medium | 🟠 `#ffa502` | Email Phishing Attack |
| 3 | **Malware** | High | 🔴 `#ff6348` | Malware Injection |
| 4 | **Ransomware** | Critical | 🔴 `#ff0000` | Ransomware Encryption |
| 5 | **Brute Force** | Medium | 🟠 `#ffa502` | Password Brute Force |
| 6 | **SQL Injection** | High | 🟠 `#ff7f50` | SQL Injection Attack |
| 7 | **Zero Day** | Critical | 🔴 `#dc143c` | Zero Day Exploit |
| 8 | **APT** | Critical | 🔴 `#b22222` | Advanced Persistent Threat |
| 9 | **Botnet** | High | 🔴 `#ff6b6b` | Botnet Attack |
| 10 | **Data Breach** | Critical | 🔴 `#ee5a6f` | Data Breach Attempt |
| 11 | **XSS** | High | 🟠 `#ff8c00` | Cross-Site Scripting |
| 12 | **MITM** | High | 🔴 `#ff1493` | Man-in-the-Middle |
| 13 | **CSRF** | Medium | 🟡 `#ffd700` | Cross-Site Request Forgery |
| 14 | **DoS** | High | 🔴 `#ff4500` | Denial of Service |
| 15 | **Social Engineering** | Medium | 🟠 `#ff6347` | Social Engineering Attack |
| 16 | **Keylogger** | High | 🔴 `#dc143c` | Keylogger Malware |
| 17 | **Cryptojacking** | Medium | 🟠 `#ff8c42` | Cryptocurrency Mining Hijack |
| 18 | **RaaS** | Critical | 🔴 `#8b0000` | Ransomware-as-a-Service |
| 19 | **Insider Threat** | Critical | 🔴 `#b22222` | Internal Security Breach |
| 20 | **Supply Chain** | Critical | 🔴 `#800000` | Supply Chain Attack |
| 21 | **IoT Attack** | High | 🔴 `#ff6b81` | IoT Device Compromise |

</details>

## 🌍 60+ Supported Countries

### 🔴 Major Cyber Hubs (9 countries)
**Marked in red on map** - Source of 60% global attacks

- 🇨🇳 China (Beijing)
- 🇷🇺 Russia (Moscow)
- 🇺🇸 United States (Washington DC)
- 🇰🇵 North Korea (Pyongyang)
- 🇮🇷 Iran (Tehran)
- 🇯🇵 Japan (Tokyo)
- 🇮🇱 Israel (Jerusalem)
- 🇬🇧 United Kingdom (London)
- 🇩🇪 Germany (Berlin)

### 🌏 Asia Pacific (15 countries)
South Korea, Vietnam, India, Pakistan, Thailand, Indonesia, Philippines, Malaysia, Singapore, Taiwan, Hong Kong, Australia, New Zealand, Bangladesh, Myanmar

### 🇪🇺 Europe (18 countries)
France, Netherlands, Spain, Italy, Poland, Ukraine, Romania, Sweden, Norway, Finland, Switzerland, Belgium, Austria, Czech Republic, Turkey, Denmark, Portugal, Greece

### 🌎 Americas (9 countries)
Brazil, Canada, Mexico, Argentina, Chile, Colombia, Venezuela, Peru, Cuba

### 🌍 Africa & Middle East (11 countries)
Saudi Arabia, UAE, Qatar, Egypt, Syria, South Africa, Nigeria, Kenya, Morocco, Algeria, Iraq

**Total: 62 countries** with accurate GPS coordinates

## 📦 Tech Stack

### Core Technologies
- **Frontend Framework:** React 19.0.0
- **Language:** TypeScript 5.8.0
- **Build Tool:** Vite 7.0.0
- **3D Visualization:** globe.gl + Three.js

### Libraries & Tools
- **UI Components:** Custom React Components
- **Styling:** CSS3 with Glassmorphism, Gradients, Animations
- **Icons:** Flag Icons CDN (lipis/flag-icons@7.2.3)
- **Fonts:** Saira (Google Fonts)
- **State Management:** React Hooks (useState, useEffect, useRef)
- **Linting:** ESLint 9 + typescript-eslint
- **Type Checking:** TypeScript Strict Mode

### Development Tools
- **Dev Server:** Vite Dev Server with HMR
- **Browser:** Modern browsers (Chrome/Edge/Firefox)
- **Code Editor:** VSCode (recommended)

## 🎨 Visual Effects & Design

### Background & Environment
- **Dark Theme**: Gradient from `#0f1016` → `#080810` → `#000000` (optimized to reduce glare)
- **Stars Field**: Animated particles with opacity 0.25
- **Glow Effects**: Radial gradients with low opacity (0.03-0.04)

### Globe & Arcs
- **Globe Material**: Dark blue with texture
- **Country Flags**: 24px flag-icons with hover effects
- **Attack Arcs**: Dynamic dash animations with variable speed (1.2s - 2s)
- **Hub Markers**: Red glowing pulse animation

### Dashboard UI
- **Glassmorphism**: backdrop-filter blur(20px) + gradients
- **CSS Icons**: Target, Lightning, Shield, Warning, Lock (pseudo-elements)
- **Animations**: Slide-in, fade, pulse, blink effects
- **Color Scheme**: Cyan (#00ffff), Red (#ff4757), Orange (#ffa502)

### Typography
- **Font Family**: Saira (Google Fonts) - 300 to 800 weight
- **Title**: 3.5rem with gradient text and glow animation
- **Subtitle**: 1.1rem with opacity 0.7

## 🔧 Performance Optimizations

### Memory Management
- ✅ **Max 100 attacks** in memory (auto-cleanup oldest)
- ✅ **Efficient state management** with React hooks
- ✅ **Memoization** for expensive calculations

### Rendering Optimizations
- ✅ **Atmosphere disabled** to reduce lag
- ✅ **Optimized arc rendering** with dynamic cleanup
- ✅ **Canvas auto-resize handler** with throttle
- ✅ **Reduced glow effects** opacity (0.03-0.04)

### Animation Performance
- ✅ **Smart interval scheduling** (1-3s random)
- ✅ **CSS animations** instead of JavaScript when possible
- ✅ **RequestAnimationFrame** for smooth animations
- ✅ **Debounced event handlers**

### Network & Loading
- ✅ **CDN for external resources** (flag-icons, Google Fonts)
- ✅ **Lazy loading** for components
- ✅ **Code splitting** with Vite
- ✅ **Tree shaking** automatic

## 📊 Real-time Stats

- **Total Attacks:** Cumulative count
- **Active Attacks:** Currently animating on globe
- **Blocked Attacks:** ~60% success rate
- **Critical Attacks:** Zero Day, Ransomware, APT, Data Breach
- **Threat Level:** LOW → MEDIUM → HIGH → CRITICAL

## 🎬 Animation Details

- **Arc Animation:** 1.2s (critical) to 2.0s (normal)
- **Arc Altitude:** 0.2 + distance scaling
- **Arc Stroke:** 0.5 (medium) to 1.0 (critical)
- **Globe Rotation:** 0.3 speed
- **Atmosphere:** Disabled for performance
- **Stats Blink:** 1.5s interval

## 📁 Project Structure

```
roma-cyber-attack/
├── public/
│   ├── roma-icon.svg          # Logo favicon (hot pink)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AttackDashboard.tsx       # Dashboard component
│   │   ├── AttackDashboard.css       # Dashboard styles
│   │   ├── GlobeComponent.tsx        # Globe 3D visualization
│   │   ├── GlobeComponent.css        # Globe styles
│   │   ├── RomaAIPanel.tsx          # AI Chatbot panel
│   │   ├── RomaAIPanel.css          # Chatbot styles
│   │   └── attackExplanations.ts     # 21 attack explanations
│   ├── App.tsx                # Main app component
│   ├── App.css               # App styles
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite config
└── README.md                 # This file
```

## 🛠️ Configuration Files

### `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174
  }
})
```

### `tsconfig.json`
- **Strict mode enabled** for type safety
- **ES2020 target** for modern JavaScript
- **JSX: react-jsx** for React 19

## 🐛 Troubleshooting

### Port already in use
```bash
# Change port in vite.config.ts or
npm run dev -- --port 3000
```

### Globe not displaying
- Check browser console for errors
- Ensure WebGL is supported: `chrome://gpu`
- Clear cache and hard reload (Ctrl+Shift+R)

### Performance Issues
- Reduce number of attacks by increasing interval time
- Disable animations in CSS
- Close other browser tabs

### Favicon not updating
- Hard refresh: Ctrl+Shift+R
- Clear browser cache
- Restart dev server

## 📚 Resources & References

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [globe.gl API](https://github.com/vasturiano/globe.gl)
- [Three.js Docs](https://threejs.org/docs/)

### Assets
- [Flag Icons](https://github.com/lipis/flag-icons)
- [Google Fonts - Saira](https://fonts.google.com/specimen/Saira)

## 📝 Changelog

### Version 2.0.0 (Current)
- ✨ **NEW**: 21 attack types (added 11 new types)
- ✨ **NEW**: 60+ countries (added 10+ countries)
- ✨ **NEW**: 9 Cyber Hubs with special markers
- ✨ **NEW**: Country flags on map
- ✨ **NEW**: CSS icons instead of emoji
- ✨ **NEW**: ROMA logo hot pink
- ✨ **NEW**: Saira font family
- 🎨 **IMPROVED**: Optimized colors to reduce glare
- 🎨 **IMPROVED**: Dashboard layout (route + time on same row)
- ⚡ **OPTIMIZED**: Removed atmosphere to reduce lag
- ⚡ **OPTIMIZED**: Attack source 60% hubs (reduced from 70%)
- 🐛 **FIXED**: TypeScript errors with Globe type assertion
- 🐛 **FIXED**: Dashboard clickable header when minimized

### Version 1.0.0
- 🎉 Initial release
- 🌍 Globe visualization with 50 countries
- ⚔️ 10 attack types
- 🤖 ROMA AI Chatbot
- 📊 Real-time Dashboard

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## ⚠️ Disclaimer

**This is a simulation system for educational and cyber security research purposes.**

- ❌ **DO NOT use** for illegal purposes
- ❌ **DO NOT disclose** actual sensitive data
- ❌ **DO NOT attack** real systems

## 🛡️ Security Note

**All data is simulated (simulated data).**

- ✅ No actual connections to any systems
- ✅ No user data collection
- ✅ No third-party APIs (except public CDNs)

---

<div align="center">

### Made with 💜 by HTC Studio

**Powered by ROMA AI**

[![GitHub](https://img.shields.io/badge/GitHub-HTC--Studio-black?logo=github)](https://github.com/htc-studio)
[![Website](https://img.shields.io/badge/Website-htcstudio.dev-blue)](https://htcstudio.dev)

</div>
