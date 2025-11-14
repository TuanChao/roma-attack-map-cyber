import { useState, useEffect, useRef } from 'react';
import './RomaAIPanel.css';
import { attackExplanations } from './attackExplanations';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface RomaAIPanelProps {
  onAttackCommand: (command: any) => void;
  attackStats: {
    total: number;
    active: number;
    blocked: number;
  };
}

export default function RomaAIPanel({ onAttackCommand, attackStats }: RomaAIPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m ROMA AI - Cyber Attack Monitoring & Analysis System. I can help you:\n\n• Simulate cyber attacks worldwide\n• Analyze attack patterns\n• Monitor real-time threats\n• 📖 Explain attack types in detail (NEW!)\n• Recommend defense strategies\n\nExamples:\n• "attack DDoS from China"\n• "what is DDoS?"\n• "analyze threats"\n\nType "help" for full guide!',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAttack = (attackType: string, source: string, target: string) => {
    const attacks = {
      'ddos': {
        type: 'DDoS',
        color: '#ff4757',
        intensity: 'high',
        description: 'Distributed Denial of Service'
      },
      'phishing': {
        type: 'Phishing',
        color: '#ffa502',
        intensity: 'medium',
        description: 'Email Phishing Attack'
      },
      'malware': {
        type: 'Malware',
        color: '#ff6348',
        intensity: 'high',
        description: 'Malware Injection'
      },
      'ransomware': {
        type: 'Ransomware',
        color: '#ff0000',
        intensity: 'critical',
        description: 'Ransomware Encryption'
      },
      'bruteforce': {
        type: 'Brute Force',
        color: '#ffa502',
        intensity: 'medium',
        description: 'Password Brute Force'
      },
      'sqlinjection': {
        type: 'SQL Injection',
        color: '#ff7f50',
        intensity: 'high',
        description: 'SQL Injection Attack'
      },
      'zeroday': {
        type: 'Zero Day',
        color: '#dc143c',
        intensity: 'critical',
        description: 'Zero Day Exploit'
      },
      'apt': {
        type: 'APT',
        color: '#b22222',
        intensity: 'critical',
        description: 'Advanced Persistent Threat'
      },
      'botnet': {
        type: 'Botnet',
        color: '#ff6b6b',
        intensity: 'high',
        description: 'Botnet Attack'
      },
      'databreach': {
        type: 'Data Breach',
        color: '#ee5a6f',
        intensity: 'critical',
        description: 'Data Breach Attempt'
      }
    };

    const attack = attacks[attackType as keyof typeof attacks] || attacks['ddos'];

    onAttackCommand({
      type: attack.type,
      source,
      target,
      color: attack.color,
      intensity: attack.intensity,
      description: attack.description,
      timestamp: new Date()
    });
  };

  const processCommand = (input: string) => {
    const lowerInput = input.toLowerCase();

    // Check if asking about attack types
    if (lowerInput.includes('what is') || lowerInput.includes('explain') ||
        lowerInput.includes('tell me about') || lowerInput.includes('?')) {

      for (const [key, explanation] of Object.entries(attackExplanations)) {
        if (lowerInput.includes(key) ||
            lowerInput.includes(key.replace('injection', '')) ||
            lowerInput.includes(key.replace('force', ''))) {
          return explanation;
        }
      }
    }

    if (lowerInput.includes('attack') || lowerInput.includes('simulate')) {
      let attackType = 'ddos';
      if (lowerInput.includes('ddos')) attackType = 'ddos';
      else if (lowerInput.includes('phishing')) attackType = 'phishing';
      else if (lowerInput.includes('malware')) attackType = 'malware';
      else if (lowerInput.includes('ransomware')) attackType = 'ransomware';
      else if (lowerInput.includes('brute force') || lowerInput.includes('bruteforce')) attackType = 'bruteforce';
      else if (lowerInput.includes('sql injection') || lowerInput.includes('sqli')) attackType = 'sqlinjection';
      else if (lowerInput.includes('zero day') || lowerInput.includes('0day')) attackType = 'zeroday';
      else if (lowerInput.includes('apt')) attackType = 'apt';
      else if (lowerInput.includes('botnet')) attackType = 'botnet';
      else if (lowerInput.includes('data breach') || lowerInput.includes('breach')) attackType = 'databreach';

      let source = 'China';
      if (lowerInput.includes('china')) source = 'China';
      else if (lowerInput.includes('russia')) source = 'Russia';
      else if (lowerInput.includes('usa') || lowerInput.includes('america') || lowerInput.includes('united states')) source = 'United States';
      else if (lowerInput.includes('korea')) source = 'South Korea';
      else if (lowerInput.includes('japan')) source = 'Japan';
      else if (lowerInput.includes('iran')) source = 'Iran';
      else if (lowerInput.includes('israel')) source = 'Israel';
      else if (lowerInput.includes('germany')) source = 'Germany';
      else if (lowerInput.includes('uk') || lowerInput.includes('britain')) source = 'United Kingdom';

      let target = 'Vietnam';
      if (lowerInput.includes('vietnam')) target = 'Vietnam';
      else if (lowerInput.includes('usa') || lowerInput.includes('america')) target = 'United States';
      else if (lowerInput.includes('uk') || lowerInput.includes('britain')) target = 'United Kingdom';
      else if (lowerInput.includes('germany')) target = 'Germany';

      simulateAttack(attackType, source, target);

      return `🎯 **Attack Simulation Initiated**\n\n` +
             `**Attack Type:** ${attackType.toUpperCase()}\n` +
             `📍 **Source:** ${source}\n` +
             `🎯 **Target:** ${target}\n` +
             `⚠️ **Severity:** High\n\n` +
             `System is now monitoring and recording attack packets...`;
    }

    if (lowerInput.includes('stop') || lowerInput.includes('halt')) {
      onAttackCommand({ action: 'stop_all' });
      return `✅ **All simulated attacks have been stopped**\n\n📊 **Statistics:**\n` +
             `• Total attacks: ${attackStats.total}\n` +
             `• Blocked: ${attackStats.blocked}\n` +
             `• Defense rate: ${attackStats.total > 0 ? ((attackStats.blocked / attackStats.total) * 100).toFixed(1) : 0}%`;
    }

    if (lowerInput.includes('analyze') || lowerInput.includes('threat') || lowerInput.includes('report')) {
      return `🔍 **THREAT ANALYSIS REPORT**\n\n` +
             `📊 **Current Statistics:**\n` +
             `• Total attacks: ${attackStats.total}\n` +
             `• Active now: ${attackStats.active}\n` +
             `• Blocked: ${attackStats.blocked}\n\n` +
             `🌍 **Common Attack Sources:**\n` +
             `1. China (35%)\n` +
             `2. Russia (28%)\n` +
             `3. United States (15%)\n` +
             `4. South Korea (12%)\n\n` +
             `⚠️ **Attack Types:**\n` +
             `• DDoS: High threat level\n` +
             `• Phishing: Medium threat level\n` +
             `• Malware: High threat level\n` +
             `• Ransomware: Medium threat level`;
    }

    if (lowerInput.includes('random')) {
      const attackTypes = ['ddos', 'phishing', 'malware', 'ransomware', 'bruteforce', 'sqlinjection', 'zeroday', 'apt', 'botnet', 'databreach'];
      const sources = ['China', 'Russia', 'United States', 'South Korea', 'North Korea', 'Japan', 'Iran', 'Israel', 'Germany', 'United Kingdom'];
      const targets = ['Vietnam', 'United States', 'United Kingdom', 'Germany', 'France', 'Japan', 'South Korea', 'India', 'Australia', 'Brazil'];

      const randomAttack = attackTypes[Math.floor(Math.random() * attackTypes.length)];
      const randomSource = sources[Math.floor(Math.random() * sources.length)];
      const randomTarget = targets[Math.floor(Math.random() * targets.length)];

      simulateAttack(randomAttack, randomSource, randomTarget);

      return `🎲 **Random Attack Initiated**\n\n` +
             `• Type: ${randomAttack.toUpperCase()}\n` +
             `• From: ${randomSource}\n` +
             `• To: ${randomTarget}`;
    }

    if (lowerInput.includes('multiple') || lowerInput.includes('mass')) {
      const attackTypes = ['ddos', 'phishing', 'malware', 'ransomware', 'bruteforce', 'sqlinjection', 'zeroday', 'apt', 'botnet', 'databreach'];
      const sources = ['China', 'Russia', 'North Korea', 'Iran', 'United States', 'Israel', 'Germany', 'United Kingdom'];

      sources.forEach(source => {
        const randomAttack = attackTypes[Math.floor(Math.random() * attackTypes.length)];
        setTimeout(() => {
          simulateAttack(randomAttack, source, 'Vietnam');
        }, Math.random() * 2000);
      });

      return `⚡ **Mass Attack Campaign Initiated!**\n\n` +
             `📡 ${sources.length} attack sources activated\n` +
             `🎯 Target: Vietnam\n` +
             `⏱️ Timeline: 0-2 seconds\n\n` +
             `System is recording and analyzing...`;
    }

    if (lowerInput.includes('help') || lowerInput.includes('guide')) {
      return `📚 **ROMA AI USER GUIDE**\n\n` +
             `🎯 **Simulate Attacks:**\n` +
             `• "attack DDoS from China"\n` +
             `• "attack Phishing from Russia"\n` +
             `• "attack Ransomware from USA"\n` +
             `• "attack SQL Injection from Iran"\n` +
             `• "attack Zero Day from Israel"\n\n` +
             `🔍 **Analysis:**\n` +
             `• "analyze threats"\n` +
             `• "threat report"\n` +
             `• "stats"\n\n` +
             `📖 **Learn About Attacks (NEW!):**\n` +
             `• "What is DDoS?"\n` +
             `• "Explain Ransomware"\n` +
             `• "Tell me about APT"\n` +
             `• "What is SQL Injection?"\n\n` +
             `🎲 **Other Commands:**\n` +
             `• "random attack"\n` +
             `• "multiple attacks"\n` +
             `• "stop all"\n\n` +
             `📊 **Attack Types:**\n` +
             `DDoS, Phishing, Malware, Ransomware, Brute Force,\n` +
             `SQL Injection, Zero Day, APT, Botnet, Data Breach\n\n` +
             `💡 Tip: Ask "What is [attack_name]?" to learn details!\n` +
             `🌍 System auto-simulates 50+ countries!`;
    }

    if (lowerInput.includes('stats') || lowerInput.includes('status')) {
      return `📊 **SYSTEM STATISTICS**\n\n` +
             `🎯 Total attacks: ${attackStats.total}\n` +
             `⚡ Active now: ${attackStats.active}\n` +
             `🛡️ Blocked: ${attackStats.blocked}\n` +
             `📈 Defense rate: ${attackStats.total > 0 ? ((attackStats.blocked / attackStats.total) * 100).toFixed(1) : 0}%\n\n` +
             `💡 Status: System operational`;
    }

    return '❓ Command not recognized. Type "help" to see available commands.';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = processCommand(input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <button
        className="roma-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        title="ROMA AI Assistant"
      >
        <div className="roma-icon">
          <svg width="22" height="20.625" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#ff69b4' }}>
            <path d="M28.8775 8.62635L34.2677 8.597C34.8285 8.597 35.3487 8.80614 35.7398 9.19141C36.1309 9.57668 36.3522 10.094 36.3522 10.6518L36.3818 16.0455C36.3854 16.695 36.913 17.2123 37.5661 17.2123H37.5734L43.8565 17.1756C44.5096 17.172 45.0298 16.6473 45.0298 15.9978L44.9929 9.71611C44.9892 9.06666 44.4616 8.5493 43.8086 8.5493L38.4183 8.57865C37.2746 8.58232 36.3375 7.66134 36.3301 6.52755L36.3006 1.16681C36.2969 0.517361 35.7693 0 35.1163 0L28.8332 0.0330245C28.1802 0.0366937 27.66 0.561393 27.66 1.21085L27.6932 7.45954C27.6969 8.10899 28.2244 8.62635 28.8775 8.62635Z" fill="currentColor"/>
            <path d="M17.1081 35.104L11.7178 35.1333C10.5741 35.137 9.63699 34.216 9.62961 33.0822L9.6001 27.7215C9.59641 27.072 9.06882 26.5547 8.41579 26.5547L2.13271 26.5877C1.47968 26.5914 0.959473 27.1161 0.959473 27.7655L0.992676 34.0142C0.996366 34.6637 1.52395 35.181 2.17698 35.181L7.56723 35.1517C8.12802 35.1517 8.64823 35.3608 9.03931 35.7461C9.43039 36.1313 9.65175 36.6487 9.65175 37.2064L9.68127 42.6002C9.68496 43.2496 10.2125 43.767 10.8656 43.767H10.8729L17.156 43.7303C17.8091 43.7266 18.3293 43.2019 18.3293 42.5525L18.2924 36.2708C18.2887 35.6213 17.7611 35.104 17.1081 35.104Z" fill="currentColor"/>
            <path d="M43.8673 26.5913L37.5843 26.5583C36.9312 26.5583 36.4036 27.0756 36.3999 27.7251L36.3704 33.0858C36.3631 34.2196 35.4259 35.1406 34.2822 35.1369L28.892 35.1076C28.2389 35.1076 27.7114 35.6249 27.7077 36.2744L27.6708 42.5561C27.6708 43.2055 28.191 43.7302 28.844 43.7339L35.1271 43.7706H35.1345C35.7875 43.7706 36.3151 43.2532 36.3188 42.6038L36.3483 37.21C36.3483 36.6523 36.5697 36.1349 36.9607 35.7497C37.3518 35.3644 37.872 35.1553 38.4328 35.1553L43.8231 35.1846C44.4761 35.1846 45.0037 34.6673 45.0074 34.0178L45.0406 27.7691C45.0406 27.1197 44.5204 26.595 43.8673 26.5913Z" fill="currentColor"/>
            <path d="M2.14748 17.1756L8.43057 17.2123H8.43795C9.09097 17.2123 9.61856 16.695 9.62225 16.0455L9.65177 10.6518C9.65177 10.094 9.87313 9.57668 10.2642 9.19141C10.6553 8.80614 11.1755 8.597 11.7363 8.597L17.1265 8.62635C17.7796 8.62635 18.3072 8.10899 18.3108 7.45954L18.344 1.21085C18.344 0.561393 17.8238 0.0366937 17.1708 0.0330245L10.8877 0C10.2347 0 9.70711 0.517361 9.70342 1.16681L9.6739 6.52755C9.66652 7.66134 8.72941 8.58232 7.58569 8.57865L2.19544 8.5493C1.54242 8.5493 1.01483 9.06666 1.01114 9.71611L0.974247 15.9978C0.974247 16.6473 1.49446 17.172 2.14748 17.1756Z" fill="currentColor"/>
            <path d="M31.1205 28.9579L31.0836 23.0724C31.08 22.4634 30.5856 21.979 29.9731 21.979L24.926 22.0047C23.8561 22.0084 22.978 21.1461 22.9706 20.082L22.9448 15.0625C22.9411 14.4534 22.4467 13.9691 21.8343 13.9691L15.9496 13.9985C15.3372 14.0021 14.8502 14.4938 14.8502 15.1029L14.8797 20.9553C14.8834 21.5644 15.3778 22.0487 15.9902 22.0487L21.0373 22.023C21.5649 22.023 22.0519 22.2212 22.4172 22.5808C22.7824 22.9404 22.9891 23.4247 22.9891 23.9494L23.0149 29.0019C23.0186 29.611 23.513 30.0953 24.1254 30.0953H24.1328L30.0174 30.0587C30.6298 30.055 31.1169 29.5633 31.1169 28.9542L31.1205 28.9579Z" fill="currentColor"/>
          </svg>
        </div>
      </button>

      <div className={`roma-panel ${isOpen ? 'open' : ''}`}>
        <div className="roma-header">
          <div className="roma-header-title">
            <span className="roma-logo">
              <svg width="22" height="20.625" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#ff69b4' }}>
            <path d="M28.8775 8.62635L34.2677 8.597C34.8285 8.597 35.3487 8.80614 35.7398 9.19141C36.1309 9.57668 36.3522 10.094 36.3522 10.6518L36.3818 16.0455C36.3854 16.695 36.913 17.2123 37.5661 17.2123H37.5734L43.8565 17.1756C44.5096 17.172 45.0298 16.6473 45.0298 15.9978L44.9929 9.71611C44.9892 9.06666 44.4616 8.5493 43.8086 8.5493L38.4183 8.57865C37.2746 8.58232 36.3375 7.66134 36.3301 6.52755L36.3006 1.16681C36.2969 0.517361 35.7693 0 35.1163 0L28.8332 0.0330245C28.1802 0.0366937 27.66 0.561393 27.66 1.21085L27.6932 7.45954C27.6969 8.10899 28.2244 8.62635 28.8775 8.62635Z" fill="currentColor"/>
            <path d="M17.1081 35.104L11.7178 35.1333C10.5741 35.137 9.63699 34.216 9.62961 33.0822L9.6001 27.7215C9.59641 27.072 9.06882 26.5547 8.41579 26.5547L2.13271 26.5877C1.47968 26.5914 0.959473 27.1161 0.959473 27.7655L0.992676 34.0142C0.996366 34.6637 1.52395 35.181 2.17698 35.181L7.56723 35.1517C8.12802 35.1517 8.64823 35.3608 9.03931 35.7461C9.43039 36.1313 9.65175 36.6487 9.65175 37.2064L9.68127 42.6002C9.68496 43.2496 10.2125 43.767 10.8656 43.767H10.8729L17.156 43.7303C17.8091 43.7266 18.3293 43.2019 18.3293 42.5525L18.2924 36.2708C18.2887 35.6213 17.7611 35.104 17.1081 35.104Z" fill="currentColor"/>
            <path d="M43.8673 26.5913L37.5843 26.5583C36.9312 26.5583 36.4036 27.0756 36.3999 27.7251L36.3704 33.0858C36.3631 34.2196 35.4259 35.1406 34.2822 35.1369L28.892 35.1076C28.2389 35.1076 27.7114 35.6249 27.7077 36.2744L27.6708 42.5561C27.6708 43.2055 28.191 43.7302 28.844 43.7339L35.1271 43.7706H35.1345C35.7875 43.7706 36.3151 43.2532 36.3188 42.6038L36.3483 37.21C36.3483 36.6523 36.5697 36.1349 36.9607 35.7497C37.3518 35.3644 37.872 35.1553 38.4328 35.1553L43.8231 35.1846C44.4761 35.1846 45.0037 34.6673 45.0074 34.0178L45.0406 27.7691C45.0406 27.1197 44.5204 26.595 43.8673 26.5913Z" fill="currentColor"/>
            <path d="M2.14748 17.1756L8.43057 17.2123H8.43795C9.09097 17.2123 9.61856 16.695 9.62225 16.0455L9.65177 10.6518C9.65177 10.094 9.87313 9.57668 10.2642 9.19141C10.6553 8.80614 11.1755 8.597 11.7363 8.597L17.1265 8.62635C17.7796 8.62635 18.3072 8.10899 18.3108 7.45954L18.344 1.21085C18.344 0.561393 17.8238 0.0366937 17.1708 0.0330245L10.8877 0C10.2347 0 9.70711 0.517361 9.70342 1.16681L9.6739 6.52755C9.66652 7.66134 8.72941 8.58232 7.58569 8.57865L2.19544 8.5493C1.54242 8.5493 1.01483 9.06666 1.01114 9.71611L0.974247 15.9978C0.974247 16.6473 1.49446 17.172 2.14748 17.1756Z" fill="currentColor"/>
            <path d="M31.1205 28.9579L31.0836 23.0724C31.08 22.4634 30.5856 21.979 29.9731 21.979L24.926 22.0047C23.8561 22.0084 22.978 21.1461 22.9706 20.082L22.9448 15.0625C22.9411 14.4534 22.4467 13.9691 21.8343 13.9691L15.9496 13.9985C15.3372 14.0021 14.8502 14.4938 14.8502 15.1029L14.8797 20.9553C14.8834 21.5644 15.3778 22.0487 15.9902 22.0487L21.0373 22.023C21.5649 22.023 22.0519 22.2212 22.4172 22.5808C22.7824 22.9404 22.9891 23.4247 22.9891 23.9494L23.0149 29.0019C23.0186 29.611 23.513 30.0953 24.1254 30.0953H24.1328L30.0174 30.0587C30.6298 30.055 31.1169 29.5633 31.1169 28.9542L31.1205 28.9579Z" fill="currentColor"/>
          </svg>
            </span>
            <div>
              <h3>ROMA AI</h3>
              <p>Cyber Attack Simulator</p>
            </div>
          </div>
          <button
            className="roma-close-button"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="roma-stats">
          <div className="roma-stat-item">
            <span className="roma-stat-label">Total</span>
            <span className="roma-stat-value">{attackStats.total}</span>
          </div>
          <div className="roma-stat-item">
            <span className="roma-stat-label">Active</span>
            <span className="roma-stat-value active">{attackStats.active}</span>
          </div>
          <div className="roma-stat-item">
            <span className="roma-stat-label">Blocked</span>
            <span className="roma-stat-value blocked">{attackStats.blocked}</span>
          </div>
        </div>

        <div className="roma-messages-container">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`roma-message ${message.role}`}
            >
              <div className="roma-message-content">
                <div className="roma-message-text">{message.content}</div>
                <div className="roma-message-time">
                  {message.timestamp.toLocaleTimeString('vi-VN', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="roma-message assistant">
              <div className="roma-message-content">
                <div className="roma-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="roma-input-container" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter command or type 'help'..."
            className="roma-input"
          />
          <button type="submit" className="roma-send-button">
            ➤
          </button>
        </form>
      </div>
    </>
  );
}
