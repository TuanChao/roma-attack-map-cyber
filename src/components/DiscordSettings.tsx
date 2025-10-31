import { useState, useEffect } from 'react';
import { discordNotificationService } from '../services/discordNotification';
import './DiscordSettings.css';

export default function DiscordSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [minSeverity, setMinSeverity] = useState<'low' | 'medium' | 'high' | 'critical'>('high');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const config = discordNotificationService.getConfig();
    setWebhookUrl(config.webhookUrl);
    setEnabled(config.enabled);
    setMinSeverity(config.minSeverity);
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    discordNotificationService.updateConfig({
      webhookUrl,
      enabled,
      minSeverity,
    });

    setSaveMessage('✓ Settings saved successfully!');
    setTimeout(() => {
      setSaveMessage('');
      setIsSaving(false);
    }, 2000);
  };

  const handleTestNotification = async () => {
    if (!webhookUrl) {
      setSaveMessage('⚠ Please enter a webhook URL first');
      setTimeout(() => setSaveMessage(''), 2000);
      return;
    }

    setIsSaving(true);
    await discordNotificationService.sendNotification({
      type: 'Test Alert',
      source: 'Test System',
      target: 'Discord Server',
      severity: 'medium',
      timestamp: new Date(),
      status: 'active',
    });

    setSaveMessage('✓ Test notification sent!');
    setTimeout(() => {
      setSaveMessage('');
      setIsSaving(false);
    }, 2000);
  };

  return (
    <>
      <button className="discord-settings-toggle" onClick={() => setIsOpen(!isOpen)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      </button>

      {isOpen && (
        <div className="discord-settings-overlay" onClick={() => setIsOpen(false)}>
          <div className="discord-settings-panel" onClick={(e) => e.stopPropagation()}>
            <div className="discord-settings-header">
              <h2>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: '10px', verticalAlign: 'middle' }}
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Discord Notifications
              </h2>
              <button className="discord-settings-close" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>

            <div className="discord-settings-content">
              <div className="discord-settings-section">
                <label className="discord-settings-toggle-label">
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={(e) => setEnabled(e.target.checked)}
                  />
                  <span>Enable Discord Notifications</span>
                </label>
              </div>

              <div className="discord-settings-section">
                <label className="discord-settings-label">
                  Webhook URL
                  <span className="discord-settings-hint">
                    Get this from your Discord Server Settings → Integrations → Webhooks
                  </span>
                </label>
                <input
                  type="text"
                  className="discord-settings-input"
                  placeholder="https://discord.com/api/webhooks/..."
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                />
              </div>

              <div className="discord-settings-section">
                <label className="discord-settings-label">
                  Minimum Severity Level
                  <span className="discord-settings-hint">
                    Only attacks with this severity or higher will trigger notifications
                  </span>
                </label>
                <select
                  className="discord-settings-select"
                  value={minSeverity}
                  onChange={(e) =>
                    setMinSeverity(e.target.value as 'low' | 'medium' | 'high' | 'critical')
                  }
                >
                  <option value="low">Low (All attacks)</option>
                  <option value="medium">Medium and above</option>
                  <option value="high">High and Critical only</option>
                  <option value="critical">Critical only</option>
                </select>
              </div>

              {saveMessage && (
                <div className={`discord-settings-message ${saveMessage.includes('✓') ? 'success' : 'warning'}`}>
                  {saveMessage}
                </div>
              )}

              <div className="discord-settings-actions">
                <button
                  className="discord-settings-button test"
                  onClick={handleTestNotification}
                  disabled={isSaving || !webhookUrl}
                >
                  Send Test Notification
                </button>
                <button
                  className="discord-settings-button save"
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  {isSaving ? 'Saving...' : 'Save Settings'}
                </button>
              </div>

              <div className="discord-settings-info">
                <h4>How to get Discord Webhook URL:</h4>
                <ol>
                  <li>Go to your Discord server</li>
                  <li>Click on Server Settings → Integrations</li>
                  <li>Click "Create Webhook" or select an existing one</li>
                  <li>Copy the Webhook URL</li>
                  <li>Paste it above and click Save</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
