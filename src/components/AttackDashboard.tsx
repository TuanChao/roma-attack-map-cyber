import { useState, useEffect } from 'react';
import './AttackDashboard.css';

interface Attack {
  id: string;
  type: string;
  source: string;
  target: string;
  sourceFlag?: string;
  targetFlag?: string;
  sourceCode?: string;
  targetCode?: string;
  timestamp: Date;
  status: 'active' | 'blocked' | 'completed';
  severity: 'low' | 'medium' | 'high' | 'critical';
}

interface AttackDashboardProps {
  attacks: Attack[];
}

export default function AttackDashboard({ attacks }: AttackDashboardProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [recentAttacks, setRecentAttacks] = useState<Attack[]>([]);

  useEffect(() => {
    setRecentAttacks(attacks.slice(-5).reverse());
  }, [attacks]);

  const stats = {
    total: attacks.length,
    active: attacks.filter(a => a.status === 'active').length,
    blocked: attacks.filter(a => a.status === 'blocked').length,
    critical: attacks.filter(a => a.severity === 'critical').length,
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return '#ff0000';
      case 'high': return '#ff4757';
      case 'medium': return '#ffa502';
      case 'low': return '#ffd700';
      default: return '#666';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#ffa502';
      case 'blocked': return '#22c55e';
      case 'completed': return '#666';
      default: return '#666';
    }
  };

  return (
    <div className={`dashboard ${isMinimized ? 'minimized' : ''}`}>
      <div
        className="dashboard-header"
        onClick={() => isMinimized && setIsMinimized(false)}
        style={{ cursor: isMinimized ? 'pointer' : 'default' }}
      >
        <div className="dashboard-header-left">
          <div className="dashboard-indicator"></div>
          <h3>Cyber Attack Monitor</h3>
        </div>
        <button
          className="dashboard-minimize-button"
          onClick={(e) => {
            e.stopPropagation();
            setIsMinimized(!isMinimized);
          }}
        >
          {isMinimized ? '▲' : '▼'}
        </button>
      </div>

      {!isMinimized && (
        <>
          <div className="dashboard-stats-grid">
            <div className="dashboard-stat-card">
              <div className="dashboard-stat-icon icon-target"></div>
              <div className="dashboard-stat-info">
                <div className="dashboard-stat-value">{stats.total}</div>
                <div className="dashboard-stat-label">Total Attacks</div>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="dashboard-stat-icon icon-lightning"></div>
              <div className="dashboard-stat-info">
                <div className="dashboard-stat-value active">{stats.active}</div>
                <div className="dashboard-stat-label">Active Now</div>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="dashboard-stat-icon icon-shield"></div>
              <div className="dashboard-stat-info">
                <div className="dashboard-stat-value blocked">{stats.blocked}</div>
                <div className="dashboard-stat-label">Blocked</div>
              </div>
            </div>

            <div className="dashboard-stat-card">
              <div className="dashboard-stat-icon icon-warning"></div>
              <div className="dashboard-stat-info">
                <div className="dashboard-stat-value critical">{stats.critical}</div>
                <div className="dashboard-stat-label">Critical</div>
              </div>
            </div>
          </div>

          <div className="dashboard-recent-section">
            <h4 className="dashboard-section-title">Recent Attacks</h4>
            <div className="dashboard-attacks-list">
              {recentAttacks.length === 0 ? (
                <div className="dashboard-empty-state">
                  <span className="dashboard-empty-icon icon-lock"></span>
                  <p>No attacks detected</p>
                </div>
              ) : (
                recentAttacks.map((attack) => (
                  <div key={attack.id} className="dashboard-attack-item">
                    <div className="dashboard-attack-header">
                      <div className="dashboard-attack-type">
                        <span
                          className="dashboard-severity-dot"
                          style={{ background: getSeverityColor(attack.severity) }}
                        ></span>
                        {attack.type}
                      </div>
                      <span
                        className="dashboard-attack-status"
                        style={{ color: getStatusColor(attack.status) }}
                      >
                        {attack.status}
                      </span>
                    </div>
                    <div className="dashboard-attack-footer">
                      <div className="dashboard-attack-route">
                        <span className="dashboard-attack-source">
                          {attack.sourceCode && (
                            <span className={`fi fi-${attack.sourceCode} country-flag-icon`}></span>
                          )}
                          {attack.source}
                        </span>
                        <span className="dashboard-arrow">→</span>
                        <span className="dashboard-attack-target">
                          {attack.targetCode && (
                            <span className={`fi fi-${attack.targetCode} country-flag-icon`}></span>
                          )}
                          {attack.target}
                        </span>
                      </div>
                      <div className="dashboard-attack-time">
                        {attack.timestamp.toLocaleTimeString('vi-VN')}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="dashboard-threat-level">
            <div className="dashboard-threat-header">
              <span>Threat Level</span>
              <span className="dashboard-threat-value">
                {stats.critical > 0 ? 'CRITICAL' : stats.active > 3 ? 'HIGH' : stats.active > 0 ? 'MEDIUM' : 'LOW'}
              </span>
            </div>
            <div className="dashboard-threat-bar">
              <div
                className="dashboard-threat-progress"
                style={{
                  width: `${Math.min((stats.active / 10) * 100, 100)}%`,
                  background: stats.critical > 0 ? '#ff0000' : stats.active > 3 ? '#ff4757' : stats.active > 0 ? '#ffa502' : '#22c55e'
                }}
              ></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
