# 🤖 ROMA Map Attack Cyber Security


## 📋 Overview

**ROMA Map Attack Cyber Security** is a **Real-time Global Threat Intelligence & Attack Monitoring Platform** - an advanced interactive 3D visualization tool for tracking and analyzing cyber security threats in real-time across the globe.

### 🎯 Highlights

- 🌍 **60+ countries** with accurate GPS coordinates and country flags
- ⚔️ **21 attack types** (DDoS, Phishing, Ransomware, XSS, MITM, APT...)
- 🤖 **ROMA AI Chatbot** with bilingual support (Vietnamese & English) and deep cyber security knowledge
- 📊 **Real-time dashboard** with CSS icons and glassmorphism design
- 🎨 **Optimized colors** - reduced glare for comfortable long-term use
- 🔥 **9 Cyber Hubs** worldwide with special markers

## 🎬 Demo

```
http://localhost:5174/
```

> **Note**: System automatically starts with 5 initial attacks and continues generating attacks every 1-3 seconds.

---

## ✨ Key Features

### 🌍 **Interactive 3D Globe Visualization**
- ✅ **60+ countries** with accurate GPS coordinates
- ✅ **Country flags** displayed on map (flag-icons CDN)
- ✅ Smooth auto-rotation with optimized speed
- ✅ Enhanced particles & glow effects (optimized to reduce glare)
- ✅ **Atmosphere disabled** to reduce lag
- ✅ **9 Cyber Hub markers** in red for major attack points
- ✅ Country tooltips with population data
- ✅ **Responsive** - automatically adjusts to screen size

### 🚀 **Auto-Attack Generation System**
- ⚡ Continuously generates attacks (every 1-3 seconds)
- ⚡ **Initial burst**: 5 simultaneous attacks on startup
- ⚡ **Intelligent routing**: 60% from hubs, 40% from any country
- ⚡ **Smart cleanup**: Keeps max 100 most recent attacks
- ⚡ **Auto-complete**: Random 3-10 seconds per attack
- ⚡ **Success rate**: 60% blocked, 40% complete
- ⚡ **21 attack types** with intelligent probability

### 🎯 **Enhanced Arc Visualization**
- 🔴 **21 attack types** with unique colors & severity
- 🔴 **Dynamic arc thickness** (0.5 → 1.0 based on severity)
- 🔴 **Altitude scaling** based on geographic distance
- 🔴 **Faster animation** for critical attacks (1.2s vs 2s)
- 🔴 **Gradient tooltips** with glow effects
- 🔴 **Different dash patterns** per attack type
- 🔴 **Real-time arcs** from source → target country

### 🤖 **ROMA AI Chatbot Enhanced**
- 💬 **21 attack types** with detailed explanations (Vietnamese)
- 💬 **60+ countries** support commands
- 💬 **Bilingual**: Vietnamese + English commands
- 💬 **Real-time statistics** display
- 💬 **Knowledge base**: XSS, MITM, CSRF, DoS, Social Engineering, Keylogger, Cryptojacking, RaaS, Insider Threat, Supply Chain Attack...
- 💬 **Enhanced help system** with full guide
- 💬 **Auto-typing indicator** with animation
- 💬 **Draggable panel** with minimize/expand
- 💬 **ROMA logo** (hot pink color) instead of emoji

### 📊 **Real-time Attack Dashboard**
- 📈 **Live tracking 4 metrics**: Total/Active/Blocked/Critical
- 📈 **CSS Icons** instead of emoji (target, lightning, shield, warning, lock)
- 📈 **Recent 5 attacks** with source → target and country flags
- 📈 **Dynamic threat level bar** with color gradient
- 📈 **Color-coded severity indicators**
- 📈 **Animated stats** with blink & pulse effects
- 📈 **Minimize/expand** functionality - click header to expand
- 📈 **Glassmorphism design** with backdrop blur and gradients
- 📈 **Optimized layout**: Route and Time on same row, Status separate

## 🚀 Installation & Setup

### System Requirements

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **RAM**: >= 4GB (recommended 8GB)
- **Browser**: Chrome/Edge/Firefox (latest version)

### Installation

```bash
# Clone repository
git clone https://github.com/your-username/roma-cyber-attack.git
cd roma-cyber-attack

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser: http://localhost:5174
```

### Build for Production

```bash
# Build
npm run build

# Preview build
npm run preview
```

## 🎮 Main Features

### 1. 🌐 Interactive 3D Globe Visualization
**Visualize cyber attacks on a 3D globe**

- **Mouse interaction**: Drag to rotate, scroll to zoom in/out
- **Auto-rotation**: Globe automatically rotates smoothly
- **Country Flags**: Display flags of 62 countries on the map
- **Attack Arcs**: 3D dynamic curves from attack source → target
- **Hub Markers**: 9 red dots marking global cyber hubs
- **Tooltips**: Hover over countries to see information
- **Real-time Animation**: Arcs move in real-time

### 2. 📊 Attack Dashboard (Bottom Left Corner)
**Real-time attack monitoring control panel**

#### Real-time Statistics:
- **Total Attacks**: Total number of attacks (cumulative)
- **Active Attacks**: Number of ongoing attacks
- **Blocked Attacks**: Number of blocked attacks (~60%)
- **Critical Threats**: Number of critical threats

#### Recent Attack List:
- Displays **5 most recent** attacks
- Information: **Type**, **Source** → **Target** (with country flags), **Status**, **Time**
- Color-coded by severity (Critical/High/Medium)
- Scroll to see more

#### Threat Level Bar:
- Dynamic color progress bar
- Levels: **LOW** (green) → **MEDIUM** (yellow) → **HIGH** (orange) → **CRITICAL** (red)
- Automatically updates based on number of critical attacks

#### Features:
- **Minimize/Expand**: Click header to collapse/expand
- **Auto-scroll**: Automatically scrolls when new attack appears
- **Animations**: Slide-in, pulse, blink effects

### 3. 🤖 ROMA AI Chatbot (Bottom Right Corner)
**AI assistant specialized in Cyber Security**

#### Knowledge:
- **21 attack types** with detailed explanations (Vietnamese)
- **60+ countries** in database
- **Cyber security concepts**: APT, Zero Day, Ransomware, XSS, MITM...
- **Real-time statistics**: Current system stats

#### Functions:
- **Bilingual**: Supports Vietnamese and English
- **Manual attack creation**: "attack DDoS from China"
- **Random attack**: "random attack"
- **Mass attack**: "mass attack" (8 attacks simultaneously)
- **Control**: "stop all", "statistics"
- **Learning**: Ask about any attack type
- **Help system**: Type "help" to see full guide

#### Interface:
- **Draggable**: Drag panel anywhere
- **Minimize/Expand**: Collapse when not in use
- **Typing indicator**: Animation when AI is responding
- **Auto-scroll**: Automatically scrolls to new messages
- **ROMA Logo**: Hot pink icon instead of emoji

### 4. ⚔️ Auto Attack Generation System
**Intelligent automatic attack generation system**

#### Operation Mechanism:
- **Initial Burst**: 5 attacks immediately on startup
- **Continuous Generation**: Creates new every 1-3 seconds (random)
- **Smart Routing**:
  - 60% from **Cyber Hubs** (China, Russia, US, NK, Iran...)
  - 40% from any country
- **Random Target**: Target chosen randomly (different from source)
- **Attack Types**: Intelligently distributed among 21 types
- **Severity Mix**: Critical (30%), High (40%), Medium (30%)

#### Attack Lifecycle:
1. **Created**: Attack is created and appears on globe
2. **Active** (3-10s): Arc animation moves
3. **Completed**:
   - 60% chance → **Blocked** ✅
   - 40% chance → **Complete** ⚠️
4. **Cleanup**: Keeps max 100 attacks, removes oldest

### 5. 🎨 Visual Effects & Animations
**Premium graphics effects**

#### Background:
- **Dark Space Theme**: Dark gradient (#0f1016 → #000000)
- **Animated Stars**: Twinkling particles with twinkle animation
- **Subtle Glow**: Cyan and red radial gradients (low opacity)

#### Globe Effects:
- **Material Texture**: Dark blue ocean, light continents
- **Country Flags**: 24px with pulse animation
- **Hub Markers**: Red glow with scale animation
- **Attack Arcs**:
  - Dynamic thickness (0.5 - 1.0)
  - Variable speed (1.2s - 2s)
  - Dash animation
  - Color-coded by severity

#### Dashboard Effects:
- **Glassmorphism**: Backdrop blur + semi-transparent
- **CSS Icons**: Drawn with pseudo-elements (::before, ::after)
- **Gradient Borders**: Animated glow
- **Slide Animations**: Attacks slide in from right
- **Pulse Effects**: Stats blink, threat bar glows

#### Typography:
- **Saira Font**: Modern, professional (300-800 weight)
- **Gradient Text**: Multi-color gradient on title
- **Text Glow**: Subtle drop-shadow animation

### 6. 🔄 Real-time Updates
**Continuous updates, no reload**

- **Stats Counter**: Updates instantly when new attack appears
- **Dashboard List**: Auto-update with newest attacks on top
- **Threat Level**: Dynamically calculated based on % critical attacks
- **Globe Arcs**: Render and cleanup in realtime
- **Chatbot Response**: Updates stats when user asks

### 7. 📱 Responsive Design
**Optimized for all screen sizes**

- **Desktop**: Full experience with 3 panels
- **Tablet**: Adjusted layout, smaller text
- **Mobile**: Stack panels vertically
- **Touch Support**: Drag & pinch zoom on globe

### 8. ⚡ Performance Features
**Performance optimization**

- **Memory Management**: Max 100 attacks, auto-cleanup
- **Atmosphere Disabled**: Reduces rendering lag
- **Optimized Opacity**: Glow effects at low level (0.03-0.04)
- **CSS Animations**: Hardware-accelerated
- **Efficient State**: React hooks with optimized dependencies
- **CDN Resources**: Flag-icons and fonts from CDN

## 💬 Detailed Usage Guide

### 1️⃣ Start the system
```bash
npm run dev
# Open browser: http://localhost:5174
```
- **5 attacks** appear immediately
- Dashboard displays at **bottom left corner**
- ROMA AI button at **bottom right corner**
- Globe automatically rotates

### 2️⃣ Interact with Globe
- **Drag mouse**: Rotate globe
- **Scroll**: Zoom in/out
- **Hover flag**: View country name
- **Hover arc**: View attack details (type, source → target)

### 3️⃣ Use Dashboard
- **Click header**: Minimize/expand dashboard
- **View stats**: Real-time counter at top
- **Scroll list**: View previous attacks
- **Observe arcs**: Track corresponding arcs on globe

### 4️⃣ Chat with ROMA AI
Click 🤖 button at bottom right corner, then:

#### Supported Commands:

#### A. Manual Attack Creation:
```bash
✅ attack DDoS from China
✅ attack Phishing from Russia
✅ attack SQL Injection from Iran
✅ attack Zero Day from Israel
✅ attack Ransomware from North Korea
✅ attack Botnet from United States
✅ attack XSS from Vietnam
✅ attack MITM from South Korea
```

#### B. Random & Mass Attacks:
```bash
🎲 random attack                # Random attack from random country
⚡ mass attack                  # 8 attacks simultaneously
🎯 random 5                     # 5 random attacks
```

#### C. Learning & Discovery:
```bash
❓ What is DDoS?
❓ Explain Ransomware
❓ How does XSS attack work?
❓ What is APT?
❓ How dangerous is Phishing?
```

#### D. Control & Analytics:
```bash
⏸️ stop all                     # Stop auto-generation
▶️ continue                     # Resume auto-generation
📊 statistics                   # Display current stats
🔍 analyze threat              # Threat analysis
❓ help                         # View full guide
```

#### E. Country Queries:
```bash
🌍 How many countries?
🌍 List cyber hubs
🌍 Which country is most dangerous?
```

### 5️⃣ Monitor Threat Level
- Observe **Threat Level Bar** at bottom of dashboard
- **LOW** (< 20% critical): Green color
- **MEDIUM** (20-40%): Yellow color
- **HIGH** (40-60%): Orange color
- **CRITICAL** (> 60%): Red color, warning blink

### 6️⃣ Advanced Features

#### Custom Attack Duration:
Default: 3-10 seconds. Can adjust in code:
```typescript
// GlobeComponent.tsx
const randomDuration = Math.random() * 7000 + 3000; // 3-10s
```

#### Custom Generation Interval:
Default: 1-3 seconds. Adjust in:
```typescript
// GlobeComponent.tsx
const randomInterval = Math.random() * 2000 + 1000; // 1-3s
```

#### Add New Country:
```typescript
// GlobeComponent.tsx - countryCoordinates
"New Country": {
  lat: 0.0,
  lng: 0.0,
  population: 1000000,
  code: "nc",  // Flag code
  flag: "🏴",
  isHub: false
}
```

## 🎯 21 Attack Types

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
