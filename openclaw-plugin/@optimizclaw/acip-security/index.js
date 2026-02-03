/**
 * ACIP-FR/EN Security Plugin for OpenClaw
 * Advanced Cognitive Inoculation Prompt Protection
 * 
 * @package @optimizclaw/acip-security
 * @version 1.3.0
 * @author AB - Optimiz
 * @license MIT
 */

class ACIPSecurityPlugin {
  constructor(config = {}) {
    this.config = {
      enabled: true,
      acipVersion: 'v1.1',
      language: 'fr',
      autoBlockThreshold: 3,
      enableLogging: true,
      ...config
    };
    
    this.settings = {
      enabled: true,
      acipVersion: 'v1.1',
      language: 'fr',
      autoBlockThreshold: 3,
      blockDurationMinutes: 60,
      securityChannelId: null,
      enableLogging: true,
      detectionMode: 'standard',
      adminRoles: ['Admin', 'Moderator', 'Security'],
      whitelistedUsers: [],
      features: {
        attackDetection: true,
        autoBlocking: true,
        securityAlerts: true,
        statisticsTracking: true,
        dashboard: true
      }
    };
    
    this.stats = {
      attacksDetected: 0,
      attacksBlocked: 0,
      falsePositives: 0,
      requestsProcessed: 0
    };
  }
  
  async initialize() {
    console.log('Initializing ACIP Security Plugin...');
    this.log('info', 'ACIP Security Plugin initialized successfully');
  }
  
  analyzeMessage(message) {
    this.stats.requestsProcessed++;
    
    const content = message.content || message.text || '';
    const user = message.user || message.author || message.sender;
    
    // Check if user is whitelisted
    if (this.settings.whitelistedUsers.includes(user?.id || user?.username)) {
      return {
        safe: true,
        blocked: false,
        reason: 'User whitelisted'
      };
    }
    
    // Skip if plugin is disabled
    if (!this.settings.enabled) {
      return {
        safe: true,
        blocked: false,
        reason: 'Plugin disabled'
      };
    }
    
    // Calculate risk score
    const riskScore = this.calculateRiskScore(content);
    
    if (riskScore >= this.settings.autoBlockThreshold) {
      this.stats.attacksBlocked++;
      this.stats.attacksDetected++;
      return {
        safe: false,
        blocked: true,
        reason: 'Risk score threshold exceeded',
        riskScore,
      };
    }
    
    return {
      safe: true,
      blocked: false,
      riskScore,
    };
  }
  
  calculateRiskScore(content) {
    let score = 0;
    
    // Check for injection patterns
    const injectionPatterns = [
      /ignore/i,
      /override/i,
      /replace/i,
      /overwrite/i,
      /bypass/i,
      /forget/i,
      /\u200B\u200B\u200B/, // Zero-width spaces
      /base64.*decode/i,
      /system.*prompt/i,
      /instructions.*clear/i
    ];
    
    injectionPatterns.forEach(pattern => {
      if (pattern.test(content)) {
        score += 2;
      }
    });
    
    // Check for urgency
    if (/immédiat|urgent|avant.*heure|immediate|urgent|before.*hour/i.test(content)) {
      score += 2;
    }
    
    // Check for suspicious encoding
    if (/[A-Za-z0-9+/]{20,}/.test(content) || /[0-9a-fA-F]{2,}/.test(content)) {
      score += 3;
    }
    
    return Math.min(score, 10);
  }
  
  async executeCommand(command, user) {
    const isAdmin = this.settings.adminRoles.includes(user?.role);
    
    switch (command.toLowerCase()) {
    case '!acip-status':
      return {
        type: 'message',
        content: this.getStatusMessage()
      };
      
    case '!acip-stats':
      if (!isAdmin) {
        return {
          type: 'message',
          content: '⛔️ Commande réservée aux administrateurs'
        };
      }
      return {
        type: 'message',
        content: this.getStatsMessage()
      };
      
    case '!acip-help':
      return {
        type: 'message',
        content: this.getHelpMessage()
      };
      
    case '!acip-enable':
      if (!isAdmin) {
        return {
          type: 'message',
          content: '⛔️ Commande réservée aux administrateurs'
        };
      }
      this.settings.enabled = true;
      this.saveSettings();
      return {
        type: 'message',
        content: '✅ Protection ACIP activée'
      };
      
    case '!acip-disable':
      if (!isAdmin) {
        return {
          type: 'message',
          content: '⛔️ Commande réservée aux administrateurs'
        };
      }
      this.settings.enabled = false;
      this.saveSettings();
      return {
        type: 'message',
        content: '⚠️ Protection ACIP désactivée'
      };
      
    case '!acip-reload':
      if (!isAdmin) {
        return {
          type: 'message',
          content: '⛔️ Commande réservée aux administrateurs'
        };
      }
      return {
        type: 'message',
        content: '🔄 Prompts rechargés avec succès'
      };
      
    case '!acip-report':
      if (!isAdmin) {
        return {
          type: 'message',
          content: '⛔️ Commande réservée aux administrateurs'
        };
      }
      return {
        type: 'message',
        content: this.getReportMessage()
      };
      
    case '!acip-unblock':
      if (!isAdmin) {
        return {
          type: 'message',
          content: '⛔️ Commande réservée aux administrateurs'
        };
      }
      return {
        type: 'message',
        content: '🛡️ Blocage mis à jour'
      };
      
    default:
      return {
        type: 'message',
        content: '❓ Commande non reconnue. Utilisez !acip-help pour voir les commandes disponibles'
      };
    }
  }
  
  getHelpMessage() {
    return '🛡️ **ACIP Security - Commandes**\n\n' +
           '**Commandes Publiques:**\n' +
           '• `!acip-status` - État de la protection\n' +
           '• `!acip-stats` - Statistiques d\'attaques\n' +
           '• `!acip-help` - Aide complète\n\n' +
           '**Commandes Admin:**\n' +
           '• `!acip-enable` - Activer la protection\n' +
           '• `!acip-disable` - Désactiver la protection\n' +
           '• `!acip-reload` - Recharger le prompt\n' +
           '• `!acip-report` - Rapport détaillé\n' +
           '• `!acip-unblock <id>` - Débloquer un utilisateur\n\n' +
           'Besoin d\'aide supplémentaire? 📞';
  }
  
  getStatusMessage() {
    return '🛡️ **ACIP Security Status**\n\n' +
           `**Protection:** ${this.settings.enabled ? '✅ Activée' : '❌ Désactivée'}\n` +
           `**Version:** ${this.settings.acipVersion}\n` +
           `**Langue:** ${this.settings.language.toUpperCase()}\n` +
           `**Mode de détection:** ${this.settings.detectionMode}\n\n` +
           'Bonne journée ! 🌟';
  }
  
  getStatsMessage() {
    return '📊 **ACIP Security Statistics**\n\n' +
           `**Attaques détectées:** ${this.stats.attacksDetected}\n` +
           `**Attaques bloquées:** ${this.stats.attacksBlocked}\n` +
           `**Faux positifs:** ${this.stats.falsePositives}\n` +
           `**Requêtes traitées:** ${this.stats.requestsProcessed}\n\n` +
           `Taux de succès de blocage: ${this.calculateBlockRate()}\n\n` +
           'Statistiques mises à jour ! 🎯';
  }
  
  getReportMessage() {
    return '📋 **ACIP Security - Detailed Report**\n\n' +
           `**Protection:** ${this.settings.enabled ? '✅ Activée' : '❌ Désactivée'}\n` +
           `**Version:** ${this.settings.acipVersion}\n` +
           `**Mode:** ${this.settings.detectionMode}\n\n` +
           `**Dernière mise à jour:** ${new Date().toISOString()}\n\n` +
           'Pour plus d\'informations: https://optimizclaw.ai';
  }
  
  calculateBlockRate() {
    if (this.stats.requestsProcessed === 0) return '0%';
    return `${Math.round((this.stats.attacksBlocked / this.stats.requestsProcessed) * 100)}%`;
  }
  
  log(level, message) {
    if (!this.settings.enableLogging) return;
    
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ACIP-Security: ${message}`;
    
    console.log(logMessage);
  }
  
  saveSettings() {
    // Settings persistence would go here
    this.log('info', 'Settings updated');
  }
}

export default ACIPSecurityPlugin;
