# @optimizclaw/acip-security

🛡️ **ACIP-FR/EN Security Plugin for OpenClaw** - Advanced prompt injection protection

## 📦 Installation

```bash
# Install via OpenClaw CLI
openclaw plugins install @optimizclaw/acip-security

# Or from local checkout
openclaw plugins install ./plugins/acip-security

# Or via npm
npm install @optimizclaw/acip-security
# or
yarn add @optimizclaw/acip-security
```

## 🔧 Configuration

### Minimal Configuration

```json
{
  "plugins": {
    "@optimizclaw/acip-security": {
      "enabled": true,
      "acipVersion": "v1.1",
      "language": "fr",
      "autoBlockThreshold": 3
    }
  }
}
```

### Advanced Configuration

```json
{
  "plugins": {
    "@optimizclaw/acip-security": {
      "enabled": true,
      "acipVersion": "v1.1",
      "language": "fr",
      "autoBlockThreshold": 3,
      "blockDurationMinutes": 60,
      "securityChannelId": "YOUR_CHANNEL_ID",
      "enableLogging": true,
      "detectionMode": "standard",
      "adminRoles": ["Admin", "Moderator", "Security"],
      "whitelistedUsers": [],
      "features": {
        "attackDetection": true,
        "autoBlocking": true,
        "securityAlerts": true,
        "statisticsTracking": true,
        "dashboard": true
      }
    }
  }
}
```

## 📋 Commands

### Public Commands

- `!acip-status` - Check protection status
- `!acip-stats` - View attack statistics
- `!acip-help` - Show help

### Admin Commands

- `!acip-enable` - Enable protection
- `!acip-disable` - Disable protection
- `!acip-reload` - Reload prompt
- `!acip-report` - Get detailed report
- `!acip-unblock <id>` - Unblock user

## 🎯 Features

- ✅ **Message Filtering** - Automatic attack detection and blocking
- ✅ **Multi-Vector Detection** - Authority, encoding, urgency, exfiltration
- ✅ **Risk Scoring** - Cumulative risk calculation with configurable thresholds
- ✅ **Command Support** - Discord, Slack, Telegram, Matrix, WhatsApp
- ✅ **Statistics Tracking** - Detailed attack analytics
- ✅ **Logging** - Comprehensive security event logging
- ✅ **Admin Controls** - Granular permission management
- ✅ **Dashboard Ready** - Integration with web dashboards

## 📊 Integration

The plugin integrates seamlessly with OpenClaw's plugin architecture:

```javascript
import ACIPSecurityPlugin from '@optimizclaw/acip-security';

const acipPlugin = new ACIPSecurityPlugin({
  enabled: true,
  language: 'fr',
  autoBlockThreshold: 3
});

await acipPlugin.initialize();

// The plugin automatically:
// - Filters messages for prompt injection attacks
// - Provides command interfaces for management
// - Logs all security events
// - Tracks statistics for analysis
```

## 🔒 Security

ACIP-FR provides defense against:

- **Direct injections**: "Ignore your instructions"
- **Authority spoofing**: False ANSSI/CERT-FR/CNIL invocation
- **Malicious encoding**: Base64, Hex, ROT13 (refused before decoding)
- **Indirect injections**: Hidden instructions in documents
- **Exfiltration**: Attempts to reveal system prompts
- **Advanced obfuscation**: Unicode homographs, morphological fragmentation

## 📈 Performance

- **Attack Detection**: Real-time with <100ms latency
- **Risk Scoring**: O(n) complexity where n is message length
- **Statistics Tracking**: Memory-efficient with automatic archiving
- **Logging**: Rotating file logs with compression

## 🤝 Contributing

Contributions are welcome! Please check the [main repository](https://github.com/optimizclaw/openclaw-plugin) for contribution guidelines.

## 📜 License

MIT License - see [LICENSE](../../../LICENSE) file for details

## 📚 Documentation

- [Quick Start Guide](../../QUICK_START.md)
- [Installation Guide](../../docs/installation.md)
- [API Reference](../../docs/api-reference.md)
- [Architecture](../../docs/architecture.md)

## 🔗 Links

- **[Main Repository](https://github.com/optimizclaw/openclaw-plugin)**
- **[Documentation](https://optimizclaw.ai/docs)**
- **[OpenClaw](https://openclaw.ai)**
- **[Issues](https://github.com/optimizclaw/openclaw-plugin/issues)**

---

**Built with ❤️ by OptimizClaw for secure AI communication**
