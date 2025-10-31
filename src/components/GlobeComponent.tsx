import { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import RomaAIPanel from './RomaAIPanel';
import AttackDashboard from './AttackDashboard';
import DiscordSettings from './DiscordSettings';
import { discordNotificationService } from '../services/discordNotification';
import './GlobeComponent.css';

interface AttackArc {
  id: string;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
  type: string;
  timestamp: Date;
  status: 'active' | 'blocked' | 'completed';
  severity: 'low' | 'medium' | 'high' | 'critical';
  sourceName?: string;
  targetName?: string;
}

// interface GlobePoint {
//   lat: number;
//   lng: number;
//   size: number;
//   color: string;
//   label: string;
//   type: 'source' | 'target' | 'hub';
// }

interface RingAnimation {
  id: string;
  lat: number;
  lng: number;
  maxR: number;
  propagationSpeed: number;
  repeatPeriod: number;
  color: string;
  timestamp: Date;
}

interface PathPoint {
  lat: number;
  lng: number;
  alt: number;
  color: string;
  size: number;
  attackId: string;
}

export default function GlobeComponent() {
  const mountRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const attackIntervalRef = useRef<number | null>(null);
  const [hasError, setHasError] = useState(false);
  const [attacks, setAttacks] = useState<AttackArc[]>([]);
  const [rings, setRings] = useState<RingAnimation[]>([]);
  const [pathPoints, setPathPoints] = useState<PathPoint[]>([]);
  const [attackStats, setAttackStats] = useState({
    total: 0,
    active: 0,
    blocked: 0
  });

  const countryCoordinates: Record<string, { lat: number; lng: number; isHub?: boolean; flag?: string; code?: string }> = {
    // Major Cyber Attack Hubs
    'China': { lat: 35.8617, lng: 104.1954, isHub: true, flag: '🇨🇳', code: 'cn' },
    'Russia': { lat: 61.5240, lng: 105.3188, isHub: true, flag: '🇷🇺', code: 'ru' },
    'United States': { lat: 37.0902, lng: -95.7129, isHub: true, flag: '🇺🇸', code: 'us' },
    'North Korea': { lat: 40.3399, lng: 127.5101, isHub: true, flag: '🇰🇵', code: 'kp' },
    'Iran': { lat: 32.4279, lng: 53.6880, isHub: true, flag: '🇮🇷', code: 'ir' },

    // Asia Pacific
    'Japan': { lat: 36.2048, lng: 138.2529, isHub: true, flag: '🇯🇵', code: 'jp' },
    'South Korea': { lat: 35.9078, lng: 127.7669, isHub: true, flag: '🇰🇷', code: 'kr' },
    'Vietnam': { lat: 14.0583, lng: 108.2772, flag: '🇻🇳', code: 'vn' },
    'India': { lat: 20.5937, lng: 78.9629, isHub: true, flag: '🇮🇳', code: 'in' },
    'Pakistan': { lat: 30.3753, lng: 69.3451, flag: '🇵🇰', code: 'pk' },
    'Thailand': { lat: 15.8700, lng: 100.9925, flag: '🇹🇭', code: 'th' },
    'Indonesia': { lat: -0.7893, lng: 113.9213, flag: '🇮🇩', code: 'id' },
    'Philippines': { lat: 12.8797, lng: 121.7740, flag: '🇵🇭', code: 'ph' },
    'Malaysia': { lat: 4.2105, lng: 101.9758, flag: '🇲🇾', code: 'my' },
    'Singapore': { lat: 1.3521, lng: 103.8198, isHub: true, flag: '🇸🇬', code: 'sg' },
    'Taiwan': { lat: 23.6978, lng: 120.9605, flag: '🇹🇼', code: 'tw' },
    'Hong Kong': { lat: 22.3193, lng: 114.1694, flag: '🇭🇰', code: 'hk' },
    'Australia': { lat: -25.2744, lng: 133.7751, flag: '🇦🇺', code: 'au' },
    'New Zealand': { lat: -40.9006, lng: 174.8860, flag: '🇳🇿', code: 'nz' },

    // Europe
    'United Kingdom': { lat: 55.3781, lng: -3.4360, isHub: true, flag: '🇬🇧', code: 'gb' },
    'Germany': { lat: 51.1657, lng: 10.4515, isHub: true, flag: '🇩🇪', code: 'de' },
    'France': { lat: 46.2276, lng: 2.2137, isHub: true, flag: '🇫🇷', code: 'fr' },
    'Netherlands': { lat: 52.1326, lng: 5.2913, isHub: true, flag: '🇳🇱', code: 'nl' },
    'Spain': { lat: 40.4637, lng: -3.7492, flag: '🇪🇸', code: 'es' },
    'Italy': { lat: 41.8719, lng: 12.5674, flag: '🇮🇹', code: 'it' },
    'Poland': { lat: 51.9194, lng: 19.1451, flag: '🇵🇱', code: 'pl' },
    'Ukraine': { lat: 48.3794, lng: 31.1656, flag: '🇺🇦', code: 'ua' },
    'Romania': { lat: 45.9432, lng: 24.9668, flag: '🇷🇴', code: 'ro' },
    'Sweden': { lat: 60.1282, lng: 18.6435, flag: '🇸🇪', code: 'se' },
    'Norway': { lat: 60.4720, lng: 8.4689, flag: '🇳🇴', code: 'no' },
    'Finland': { lat: 61.9241, lng: 25.7482, flag: '🇫🇮', code: 'fi' },
    'Switzerland': { lat: 46.8182, lng: 8.2275, flag: '🇨🇭', code: 'ch' },
    'Belgium': { lat: 50.5039, lng: 4.4699, flag: '🇧🇪', code: 'be' },
    'Austria': { lat: 47.5162, lng: 14.5501, flag: '🇦🇹', code: 'at' },
    'Czech Republic': { lat: 49.8175, lng: 15.4730, flag: '🇨🇿', code: 'cz' },
    'Turkey': { lat: 38.9637, lng: 35.2433, flag: '🇹🇷', code: 'tr' },

    // Middle East
    'Israel': { lat: 31.0461, lng: 34.8516, isHub: true, flag: '🇮🇱', code: 'il' },
    'Saudi Arabia': { lat: 23.8859, lng: 45.0792, flag: '🇸🇦', code: 'sa' },
    'UAE': { lat: 23.4241, lng: 53.8478, flag: '🇦🇪', code: 'ae' },
    'Qatar': { lat: 25.3548, lng: 51.1839, flag: '🇶🇦', code: 'qa' },
    'Egypt': { lat: 26.8206, lng: 30.8025, flag: '🇪🇬', code: 'eg' },
    'Syria': { lat: 34.8021, lng: 38.9968, flag: '🇸🇾', code: 'sy' },

    // Americas
    'Canada': { lat: 56.1304, lng: -106.3468, isHub: true, flag: '🇨🇦', code: 'ca' },
    'Mexico': { lat: 23.6345, lng: -102.5528, flag: '🇲🇽', code: 'mx' },
    'Brazil': { lat: -14.2350, lng: -51.9253, isHub: true, flag: '🇧🇷', code: 'br' },
    'Argentina': { lat: -38.4161, lng: -63.6167, flag: '🇦🇷', code: 'ar' },
    'Chile': { lat: -35.6751, lng: -71.5430, flag: '🇨🇱', code: 'cl' },
    'Colombia': { lat: 4.5709, lng: -74.2973, flag: '🇨🇴', code: 'co' },
    'Venezuela': { lat: 6.4238, lng: -66.5897, flag: '🇻🇪', code: 've' },

    // Africa
    'South Africa': { lat: -30.5595, lng: 22.9375, flag: '🇿🇦', code: 'za' },
    'Nigeria': { lat: 9.0820, lng: 8.6753, flag: '🇳🇬', code: 'ng' },
    'Kenya': { lat: -0.0236, lng: 37.9062, flag: '🇰🇪', code: 'ke' },
    'Morocco': { lat: 31.7917, lng: -7.0926, flag: '🇲🇦', code: 'ma' },
    'Algeria': { lat: 28.0339, lng: 1.6596, flag: '🇩🇿', code: 'dz' }
  };

  // Attack type configurations with better color scheme
  const attackTypes = [
    { type: 'DDoS', color: ['#ff6b6b', '#ee5a6f'], severity: 'high' as const },
    { type: 'Phishing', color: ['#feca57', '#ff9ff3'], severity: 'medium' as const },
    { type: 'Malware', color: ['#ff6348', '#ff4757'], severity: 'high' as const },
    { type: 'Ransomware', color: ['#ee5a6f', '#ff0844'], severity: 'critical' as const },
    { type: 'Brute Force', color: ['#ffa502', '#ffd93d'], severity: 'medium' as const },
    { type: 'SQL Injection', color: ['#ff7f50', '#ff6348'], severity: 'high' as const },
    { type: 'Zero Day', color: ['#dc143c', '#c0392b'], severity: 'critical' as const },
    { type: 'APT', color: ['#b22222', '#8b0000'], severity: 'critical' as const },
    { type: 'Botnet', color: ['#ff6b6b', '#ee5a6f'], severity: 'high' as const },
    { type: 'Data Breach', color: ['#ee5a6f', '#e74c3c'], severity: 'critical' as const }
  ];

  // Generate random attack
  const generateRandomAttack = () => {
    const countries = Object.keys(countryCoordinates);
    const hubs = countries.filter(c => countryCoordinates[c].isHub);

    // 60% chance attack comes from hub, 40% from any country (increased diversity)
    const sourceCountries = Math.random() > 0.4 ? hubs : countries;
    const source = sourceCountries[Math.floor(Math.random() * sourceCountries.length)];

    // Target can be any country except source
    let target = countries[Math.floor(Math.random() * countries.length)];
    while (target === source) {
      target = countries[Math.floor(Math.random() * countries.length)];
    }

    const attackType = attackTypes[Math.floor(Math.random() * attackTypes.length)];
    const sourceCoords = countryCoordinates[source];
    const targetCoords = countryCoordinates[target];

    const newAttack: AttackArc = {
      id: `attack-${Date.now()}-${Math.random()}`,
      startLat: sourceCoords.lat,
      startLng: sourceCoords.lng,
      endLat: targetCoords.lat,
      endLng: targetCoords.lng,
      color: Array.isArray(attackType.color) ? attackType.color[0] : attackType.color,
      type: attackType.type,
      timestamp: new Date(),
      status: 'active',
      severity: attackType.severity,
      sourceName: source,
      targetName: target
    };

    setAttacks(prev => {
      // Keep only last 100 attacks to prevent memory leak
      const updated = [...prev, newAttack];
      return updated.slice(-100);
    });

    // Gửi thông báo Discord
    discordNotificationService.sendNotification({
      type: newAttack.type,
      source: source,
      target: target,
      severity: newAttack.severity,
      timestamp: newAttack.timestamp,
      status: newAttack.status,
    });

    // Create ring animation at target location (lighter version)
    const newRing: RingAnimation = {
      id: `ring-${Date.now()}-${Math.random()}`,
      lat: targetCoords.lat,
      lng: targetCoords.lng,
      maxR: 3, // Smaller radius
      propagationSpeed: 3, // Faster propagation
      repeatPeriod: 1500, // Shorter repeat
      color: Array.isArray(attackType.color) ? attackType.color[0] : attackType.color,
      timestamp: new Date()
    };

    setRings(prev => {
      const updated = [...prev, newRing];
      return updated.slice(-15); // Keep only last 15 rings (reduced from 50)
    });

    // Auto-remove ring after 3 seconds to reduce lag
    setTimeout(() => {
      setRings(prev => prev.filter(r => r.id !== newRing.id));
    }, 3000);

    setAttackStats(prev => ({
      total: prev.total + 1,
      active: prev.active + 1,
      blocked: prev.blocked
    }));

    // Auto-complete attack after random duration
    const duration = 3000 + Math.random() * 7000; // 3-10 seconds
    setTimeout(() => {
      setAttacks(prev =>
        prev.map(a =>
          a.id === newAttack.id
            ? { ...a, status: Math.random() > 0.4 ? 'blocked' : 'completed' as const }
            : a
        )
      );
      setAttackStats(prev => ({
        ...prev,
        active: Math.max(0, prev.active - 1),
        blocked: Math.random() > 0.4 ? prev.blocked + 1 : prev.blocked
      }));
    }, duration);
  };

  const handleAttackCommand = (command: any) => {
    if (command.action === 'stop_all') {
      setAttacks(prev => prev.map(a => ({ ...a, status: 'completed' as const })));
      setAttackStats(prev => ({ ...prev, active: 0 }));
      return;
    }

    const sourceCoords = countryCoordinates[command.source] || countryCoordinates['China'];
    const targetCoords = countryCoordinates[command.target] || countryCoordinates['Vietnam'];

    const severityMap: Record<string, 'low' | 'medium' | 'high' | 'critical'> = {
      'DDoS': 'high',
      'Phishing': 'medium',
      'Malware': 'high',
      'Ransomware': 'critical',
      'Brute Force': 'medium'
    };

    const newAttack: AttackArc = {
      id: `attack-${Date.now()}-${Math.random()}`,
      startLat: sourceCoords.lat,
      startLng: sourceCoords.lng,
      endLat: targetCoords.lat,
      endLng: targetCoords.lng,
      color: command.color || '#ff4757',
      type: command.type || 'DDoS',
      timestamp: new Date(),
      status: 'active',
      severity: severityMap[command.type] || 'medium',
      sourceName: command.source,
      targetName: command.target
    };

    setAttacks(prev => [...prev, newAttack]);

    // Gửi thông báo Discord cho attack từ command
    discordNotificationService.sendNotification({
      type: newAttack.type,
      source: command.source,
      target: command.target,
      severity: newAttack.severity,
      timestamp: newAttack.timestamp,
      status: newAttack.status,
    });

    // Create ring animation at target (optimized)
    const commandRing: RingAnimation = {
      id: `ring-cmd-${Date.now()}-${Math.random()}`,
      lat: targetCoords.lat,
      lng: targetCoords.lng,
      maxR: 3,
      propagationSpeed: 3,
      repeatPeriod: 1500,
      color: command.color || '#ff4757',
      timestamp: new Date()
    };

    setRings(prev => [...prev, commandRing]);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      setRings(prev => prev.filter(r => r.id !== commandRing.id));
    }, 3000);
    setAttackStats(prev => ({
      total: prev.total + 1,
      active: prev.active + 1,
      blocked: prev.blocked
    }));

    setTimeout(() => {
      setAttacks(prev =>
        prev.map(a =>
          a.id === newAttack.id
            ? { ...a, status: Math.random() > 0.3 ? 'blocked' : 'completed' as const }
            : a
        )
      );
      setAttackStats(prev => ({
        ...prev,
        active: Math.max(0, prev.active - 1),
        blocked: Math.random() > 0.3 ? prev.blocked + 1 : prev.blocked
      }));
    }, 5000 + Math.random() * 5000);
  };

  // Particle animation along arcs (optimized)
  useEffect(() => {
    const interval = setInterval(() => {
      const activeAttacks = attacks.filter(a => a.status === 'active');
      const newPathPoints: PathPoint[] = [];

      // Only show particles for first 10 active attacks to reduce lag
      const limitedAttacks = activeAttacks.slice(0, 10);

      limitedAttacks.forEach(attack => {
        // Reduce particles from 8 to 4 per arc
        const numParticles = 4;
        for (let i = 0; i < numParticles; i++) {
          const t = (Date.now() % 2500) / 2500; // Faster animation
          const progress = (t + i / numParticles) % 1;

          // Interpolate position along arc
          const lat = attack.startLat + (attack.endLat - attack.startLat) * progress;
          const lng = attack.startLng + (attack.endLng - attack.startLng) * progress;
          const alt = 0.1 + Math.sin(progress * Math.PI) * 0.3; // Arc height

          newPathPoints.push({
            lat,
            lng,
            alt,
            color: attack.color,
            size: 0.12 - progress * 0.04, // Smaller particles
            attackId: attack.id
          });
        }
      });

      setPathPoints(newPathPoints);
    }, 80); // Update every 80ms instead of 50ms (less frequent)

    return () => clearInterval(interval);
  }, [attacks]);

  // Auto-generate attacks continuously
  useEffect(() => {
    // Start generating attacks every 1-3 seconds
    const generateAttacks = () => {
      generateRandomAttack();
      const nextInterval = 1000 + Math.random() * 2000; // 1-3 seconds
      attackIntervalRef.current = window.setTimeout(generateAttacks, nextInterval);
    };

    // Initial burst of attacks
    for (let i = 0; i < 5; i++) {
      setTimeout(() => generateRandomAttack(), i * 500);
    }

    // Start continuous generation
    const firstInterval = 2000 + Math.random() * 1000;
    attackIntervalRef.current = window.setTimeout(generateAttacks, firstInterval);

    return () => {
      if (attackIntervalRef.current) {
        clearTimeout(attackIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const initGlobe = () => {
      if (!mountRef.current) return;

      try {
        const globe = (Globe as any)()
          .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
          .backgroundImageUrl(null)
          .showAtmosphere(false)
          .enablePointerInteraction(true)
          .width(window.innerWidth)
          .height(window.innerHeight);

        globe(mountRef.current);
        globeRef.current = globe;

        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.3;

        fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
          .then(res => res.json())
          .then(countries => {
            if (countries?.features?.length > 0) {
              globe
                .hexPolygonsData(countries.features)
                .hexPolygonResolution(3)
                .hexPolygonMargin(0.3)
                .hexPolygonUseDots(true)
                .hexPolygonColor(({ properties }: any) => {
                  const country = properties?.ADMIN || properties?.NAME || '';
                  if (country === 'Vietnam' || country === 'Viet Nam') {
                    return 'gray';
                  }
                  return 'gray';
                })
                .hexPolygonLabel(({ properties }: any) => `
                  <div style="
                    background: rgba(0, 0, 0, 0.9);
                    padding: 10px 15px;
                    border-radius: 8px;
                    color: white;
                    font-size: 12px;
                    border: 1px solid #00ffff;
                  ">
                    <b>${properties?.ADMIN || 'Unknown'}</b><br />
                    Population: ${properties?.POP_EST?.toLocaleString() || 'N/A'}
                  </div>
                `);
            }
          })
          .catch(error => {
            console.error('Failed to load countries data:', error);
          });

        const handleResize = () => {
          if (globeRef.current && mountRef.current) {
            const rect = mountRef.current.getBoundingClientRect();
            globeRef.current.width(rect.width).height(rect.height);
          }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
          window.removeEventListener('resize', handleResize);
          if (globeRef.current) {
            globeRef.current._destructor?.();
          }
        };
      } catch (error) {
        console.error('Globe.gl setup failed:', error);
        setHasError(true);
      }
    };

    const timer = setTimeout(initGlobe, 100);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced arc visualization with multiple effects
  useEffect(() => {
    if (globeRef.current && attacks.length > 0) {
      const activeAttacks = attacks.filter(a => a.status === 'active');

      // Create hub points for major attack sources with pulsing effect and heat zones
      const hubPoints = Object.entries(countryCoordinates)
        .filter(([_, data]) => data.isHub)
        .map(([name, coords]) => {
          // Calculate hub activity based on attacks from this location
          const hubActivity = attacks.filter(a =>
            a.sourceName === name && a.status === 'active'
          ).length;

          const baseSize = 0.5;
          const activitySize = hubActivity * 0.1;
          const pulseSize = Math.sin(Date.now() * 0.002) * 0.15;

          return {
            lat: coords.lat,
            lng: coords.lng,
            name: name,
            size: baseSize + activitySize + pulseSize,
            color: hubActivity > 3 ? '#dc143c' : hubActivity > 1 ? '#ff4757' : '#ff6b6b',
            activity: hubActivity,
            flag: coords.flag,
            code: coords.code
          };
        });

      // Create flag markers for all countries
      const allCountryFlags = Object.entries(countryCoordinates).map(([name, coords]) => ({
        lat: coords.lat,
        lng: coords.lng,
        name: name,
        flag: coords.flag,
        code: coords.code,
        isHub: coords.isHub || false
      }));

      globeRef.current
        // Add country flag labels using HTML with flag-icons
        .htmlElementsData(allCountryFlags)
        .htmlLat((d: any) => d.lat)
        .htmlLng((d: any) => d.lng)
        .htmlAltitude(0.01)
        .htmlElement((d: any) => {
          const el = document.createElement('div');
          el.innerHTML = `
            <div class="flag-marker ${d.isHub ? 'hub-marker' : ''}" style="
              position: relative;
              cursor: pointer;
              transition: transform 0.2s ease;
            ">
              <span class="fi fi-${d.code}" style="
                font-size: 24px;
                display: block;
                border-radius: 4px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5), 0 0 ${d.isHub ? '15px rgba(255, 71, 87, 0.6)' : '10px rgba(0, 255, 255, 0.4)'};
                filter: brightness(1.1);
              "></span>
              ${d.isHub ? '<div style="position: absolute; top: -8px; right: -8px; width: 12px; height: 12px; background: #ff4757; border-radius: 50%; animation: pulse 2s ease-in-out infinite; box-shadow: 0 0 10px #ff4757;"></div>' : ''}
            </div>
          `;

          // Add hover tooltip
          el.onmouseenter = () => {
            el.style.transform = 'scale(1.3)';
            el.style.zIndex = '1000';
          };
          el.onmouseleave = () => {
            el.style.transform = 'scale(1)';
            el.style.zIndex = 'auto';
          };

          el.title = `${d.name}${d.isHub ? ' (Cyber Hub)' : ''}`;

          return el;
        })
        // Configure arcs with enhanced styling
        .arcsData(activeAttacks)
        .arcStartLat((d: any) => d.startLat)
        .arcStartLng((d: any) => d.startLng)
        .arcEndLat((d: any) => d.endLat)
        .arcEndLng((d: any) => d.endLng)
        .arcColor((d: any) => {
          // Create gradient effect from source to target
          return Array.isArray(d.color) ? d.color : [d.color, d.color];
        })
        .arcStroke((d: any) => {
          // Thicker strokes for critical attacks with pulsing
          const basePulse = Math.sin(Date.now() * 0.003) * 0.1;
          return d.severity === 'critical' ? 1.2 + basePulse : d.severity === 'high' ? 0.8 + basePulse : 0.5;
        })
        .arcDashLength((d: any) => {
          // Varied dash patterns based on attack type
          return d.severity === 'critical' ? 0.6 : 0.4;
        })
        .arcDashGap((d: any) => {
          return d.severity === 'critical' ? 0.1 : 0.2;
        })
        .arcDashAnimateTime((d: any) => {
          // Faster animation for critical attacks
          return d.severity === 'critical' ? 1200 : 2000;
        })
        .arcAltitude((d: any) => {
          // Higher arcs for longer distances
          const distance = Math.abs(d.startLat - d.endLat) + Math.abs(d.startLng - d.endLng);
          return 0.2 + (distance / 500);
        })
        .arcAltitudeAutoScale((d: any) => {
          return d.severity === 'critical' ? 0.8 : 0.5;
        })
        .arcLabel((d: any) => {
          const sourceCountry = Object.keys(countryCoordinates).find(
            country => countryCoordinates[country].lat === d.startLat && countryCoordinates[country].lng === d.startLng
          );
          const targetCountry = Object.keys(countryCoordinates).find(
            country => countryCoordinates[country].lat === d.endLat && countryCoordinates[country].lng === d.endLng
          );
          const sourceFlag = sourceCountry ? countryCoordinates[sourceCountry].flag || '🏴' : '🏴';
          const targetFlag = targetCountry ? countryCoordinates[targetCountry].flag || '🏴' : '🏴';

          return `
          <div style="
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 30, 0.95) 100%);
            padding: 12px 16px;
            border-radius: 10px;
            color: white;
            font-size: 12px;
            border: 2px solid ${d.color};
            box-shadow: 0 0 20px ${d.color}80;
            backdrop-filter: blur(10px);
          ">
            <div style="font-weight: bold; margin-bottom: 6px; color: ${d.color}; font-size: 14px;">
              🎯 ${d.type} Attack
            </div>
            <div style="opacity: 0.9; font-size: 11px; margin-bottom: 6px;">
              <div style="margin-bottom: 3px;">
                ${sourceFlag} ${sourceCountry || 'Unknown'} → ${targetFlag} ${targetCountry || 'Unknown'}
              </div>
            </div>
            <div style="opacity: 0.9; font-size: 11px; margin-bottom: 4px;">
              Severity: <span style="color: ${d.color}; font-weight: 600;">${d.severity.toUpperCase()}</span>
            </div>
            <div style="opacity: 0.7; font-size: 10px;">
              ${d.timestamp.toLocaleTimeString()}
            </div>
          </div>
        `;
        })
        // Add hub markers
        .pointsData(hubPoints)
        .pointAltitude(0.01)
        .pointRadius((d: any) => d.size)
        .pointColor((d: any) => d.color)
        .pointLabel((d: any) => {
          const flag = countryCoordinates[d.name]?.flag || '🏴';
          return `
          <div style="
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(30, 0, 0, 0.95) 100%);
            padding: 10px 14px;
            border-radius: 8px;
            color: white;
            font-size: 11px;
            border: 2px solid ${d.color};
            box-shadow: 0 0 20px ${d.color}80, inset 0 0 10px ${d.color}40;
          ">
            <div style="font-weight: bold; margin-bottom: 4px; color: ${d.color};">
              🔥 Attack Hub
            </div>
            <div style="opacity: 0.9; font-size: 12px; margin-bottom: 4px;">
              ${flag} ${d.name}
            </div>
            <div style="opacity: 0.7; font-size: 9px; margin-top: 4px;">
              Active: ${d.activity} attacks
            </div>
          </div>
        `;
        })
        // Add ring animations at attack targets
        .ringsData(rings)
        .ringLat((d: any) => d.lat)
        .ringLng((d: any) => d.lng)
        .ringMaxRadius((d: any) => d.maxR)
        .ringPropagationSpeed((d: any) => d.propagationSpeed)
        .ringRepeatPeriod((d: any) => d.repeatPeriod)
        .ringColor((d: any) => d.color)
        // Add custom objects for particle trails
        .customLayerData(pathPoints)
        .customThreeObject((d: any) => {
          const obj = new (window as any).THREE.Mesh(
            new (window as any).THREE.SphereGeometry(d.size, 8, 8),
            new (window as any).THREE.MeshBasicMaterial({
              color: d.color,
              transparent: true,
              opacity: 0.8
            })
          );
          return obj;
        })
        .customThreeObjectUpdate((obj: any, d: any) => {
          Object.assign(obj.position, globeRef.current.getCoords(d.lat, d.lng, d.alt));
        });
    }
  }, [attacks, rings, pathPoints, countryCoordinates]);

  const dashboardAttacks = attacks.map(attack => {
    const source = Object.keys(countryCoordinates).find(
      country => countryCoordinates[country].lat === attack.startLat && countryCoordinates[country].lng === attack.startLng
    ) || 'Unknown';
    const target = Object.keys(countryCoordinates).find(
      country => countryCoordinates[country].lat === attack.endLat && countryCoordinates[country].lng === attack.endLng
    ) || 'Unknown';

    return {
      id: attack.id,
      type: attack.type,
      source: source,
      target: target,
      sourceFlag: countryCoordinates[source]?.flag || '🏴',
      targetFlag: countryCoordinates[target]?.flag || '🏴',
      sourceCode: countryCoordinates[source]?.code || '',
      targetCode: countryCoordinates[target]?.code || '',
      timestamp: attack.timestamp,
      status: attack.status,
      severity: attack.severity
    };
  });

  if (hasError) {
    return (
      <div className="globe-error">
        Failed to load Globe. Check console for errors.
      </div>
    );
  }

  return (
    <div className="globe-container">
      <div ref={mountRef} className="globe-canvas" />
      <RomaAIPanel
        onAttackCommand={handleAttackCommand}
        attackStats={attackStats}
      />
      <AttackDashboard attacks={dashboardAttacks} />
      <DiscordSettings />
    </div>
  );
}
