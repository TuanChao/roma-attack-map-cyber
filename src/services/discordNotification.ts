interface DiscordWebhookConfig {
  webhookUrl: string;
  enabled: boolean;
  minSeverity: 'low' | 'medium' | 'high' | 'critical';
}

interface AttackNotification {
  type: string;
  source: string;
  target: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  status: 'active' | 'blocked' | 'completed';
}

class DiscordNotificationService {
  private config: DiscordWebhookConfig;

  constructor() {
    // Lấy cấu hình từ localStorage hoặc sử dụng mặc định
    const savedConfig = localStorage.getItem('discordConfig');
    this.config = savedConfig
      ? JSON.parse(savedConfig)
      : {
          webhookUrl: '',
          enabled: false,
          minSeverity: 'high',
        };
  }

  // Cập nhật cấu hình
  updateConfig(config: Partial<DiscordWebhookConfig>) {
    this.config = { ...this.config, ...config };
    localStorage.setItem('discordConfig', JSON.stringify(this.config));
  }

  // Lấy cấu hình hiện tại
  getConfig(): DiscordWebhookConfig {
    return { ...this.config };
  }

  // Kiểm tra xem có nên gửi thông báo không
  private shouldNotify(severity: string): boolean {
    if (!this.config.enabled || !this.config.webhookUrl) {
      return false;
    }

    const severityLevels = { low: 0, medium: 1, high: 2, critical: 3 };
    const attackLevel = severityLevels[severity as keyof typeof severityLevels] || 0;
    const minLevel = severityLevels[this.config.minSeverity];

    return attackLevel >= minLevel;
  }

  // Lấy emoji cho loại tấn công
  private getAttackEmoji(type: string): string {
    const emojiMap: Record<string, string> = {
      DDoS: '⚡',
      Phishing: '🎣',
      Malware: '🦠',
      Ransomware: '🔒',
      'Brute Force': '🔨',
      'SQL Injection': '💉',
      'Zero Day': '💥',
      APT: '🎯',
      Botnet: '🤖',
      'Data Breach': '📊',
    };
    return emojiMap[type] || '🚨';
  }

  // Lấy màu cho mức độ nghiêm trọng
  private getSeverityColor(severity: string): number {
    const colorMap: Record<string, number> = {
      low: 0xffd700, // Gold
      medium: 0xffa502, // Orange
      high: 0xff4757, // Red
      critical: 0xff0000, // Bright Red
    };
    return colorMap[severity] || 0x808080;
  }

  // Lấy cờ quốc gia (emoji)
  private getCountryFlag(country: string): string {
    const flagMap: Record<string, string> = {
      China: '🇨🇳',
      Russia: '🇷🇺',
      'United States': '🇺🇸',
      'North Korea': '🇰🇵',
      Iran: '🇮🇷',
      Japan: '🇯🇵',
      'South Korea': '🇰🇷',
      Vietnam: '🇻🇳',
      India: '🇮🇳',
      Pakistan: '🇵🇰',
      Thailand: '🇹🇭',
      Indonesia: '🇮🇩',
      Philippines: '🇵🇭',
      Malaysia: '🇲🇾',
      Singapore: '🇸🇬',
      Taiwan: '🇹🇼',
      'Hong Kong': '🇭🇰',
      Australia: '🇦🇺',
      'New Zealand': '🇳🇿',
      'United Kingdom': '🇬🇧',
      Germany: '🇩🇪',
      France: '🇫🇷',
      Netherlands: '🇳🇱',
      Spain: '🇪🇸',
      Italy: '🇮🇹',
      Poland: '🇵🇱',
      Ukraine: '🇺🇦',
      Romania: '🇷🇴',
      Sweden: '🇸🇪',
      Norway: '🇳🇴',
      Finland: '🇫🇮',
      Switzerland: '🇨🇭',
      Belgium: '🇧🇪',
      Austria: '🇦🇹',
      'Czech Republic': '🇨🇿',
      Turkey: '🇹🇷',
      Israel: '🇮🇱',
      'Saudi Arabia': '🇸🇦',
      UAE: '🇦🇪',
      Qatar: '🇶🇦',
      Egypt: '🇪🇬',
      Syria: '🇸🇾',
      Canada: '🇨🇦',
      Mexico: '🇲🇽',
      Brazil: '🇧🇷',
      Argentina: '🇦🇷',
      Chile: '🇨🇱',
      Colombia: '🇨🇴',
      Venezuela: '🇻🇪',
      'South Africa': '🇿🇦',
      Nigeria: '🇳🇬',
      Kenya: '🇰🇪',
      Morocco: '🇲🇦',
      Algeria: '🇩🇿',
    };
    return flagMap[country] || '🏴';
  }

  // Gửi thông báo đến Discord
  async sendNotification(attack: AttackNotification): Promise<void> {
    if (!this.shouldNotify(attack.severity)) {
      return;
    }

    const emoji = this.getAttackEmoji(attack.type);
    const color = this.getSeverityColor(attack.severity);
    const sourceFlag = this.getCountryFlag(attack.source);
    const targetFlag = this.getCountryFlag(attack.target);

    // Tạo embed message cho Discord
    const embed = {
      title: `${emoji} ${attack.type} Attack Detected`,
      description: `A ${attack.severity.toUpperCase()} severity ${attack.type} attack has been detected on the ROMA Cyber Attack Map.`,
      color: color,
      fields: [
        {
          name: '📍 Source',
          value: `${sourceFlag} ${attack.source}`,
          inline: true,
        },
        {
          name: '🎯 Target',
          value: `${targetFlag} ${attack.target}`,
          inline: true,
        },
        {
          name: '⚠️ Severity',
          value: attack.severity.toUpperCase(),
          inline: true,
        },
        {
          name: '📊 Status',
          value: attack.status.toUpperCase(),
          inline: true,
        },
        {
          name: '🕐 Time',
          value: attack.timestamp.toLocaleString('vi-VN'),
          inline: true,
        },
      ],
      footer: {
        text: 'ROMA Cyber Attack Map - Real-time Global Threat Intelligence',
      },
      timestamp: attack.timestamp.toISOString(),
    };

    const payload = {
      username: 'ROMA Security Bot',
      avatar_url: 'https://cdn-icons-png.flaticon.com/512/6195/6195699.png',
      embeds: [embed],
    };

    try {
      const response = await fetch(this.config.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error('Failed to send Discord notification:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending Discord notification:', error);
    }
  }

  // Gửi thông báo tổng hợp (stats)
  async sendStatsNotification(stats: {
    total: number;
    active: number;
    blocked: number;
    critical: number;
  }): Promise<void> {
    if (!this.config.enabled || !this.config.webhookUrl) {
      return;
    }

    const embed = {
      title: '📊 ROMA Cyber Attack Statistics',
      description: 'Current threat landscape summary',
      color: stats.critical > 0 ? 0xff0000 : stats.active > 5 ? 0xff4757 : 0x00ff00,
      fields: [
        {
          name: '🎯 Total Attacks',
          value: stats.total.toString(),
          inline: true,
        },
        {
          name: '⚡ Active Now',
          value: stats.active.toString(),
          inline: true,
        },
        {
          name: '🛡️ Blocked',
          value: stats.blocked.toString(),
          inline: true,
        },
        {
          name: '🔴 Critical Threats',
          value: stats.critical.toString(),
          inline: true,
        },
      ],
      footer: {
        text: 'ROMA Cyber Attack Map - Real-time Global Threat Intelligence',
      },
      timestamp: new Date().toISOString(),
    };

    const payload = {
      username: 'ROMA Security Bot',
      avatar_url: 'https://cdn-icons-png.flaticon.com/512/6195/6195699.png',
      embeds: [embed],
    };

    try {
      const response = await fetch(this.config.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error('Failed to send Discord stats notification:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending Discord stats notification:', error);
    }
  }
}

// Export singleton instance
export const discordNotificationService = new DiscordNotificationService();
