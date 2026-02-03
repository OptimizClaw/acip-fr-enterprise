# ACIP-FR OpenClaw Plugin

🛡️ **Advanced prompt injection protection plugin for OpenClaw**

## Installation

```bash
# Via npm
npm install @optimizclaw/acip-security

# Via OpenClaw CLI
openclaw plugins install @optimizclaw/acip-security
```

## Features

- Message filtering and attack detection
- Risk scoring with configurable thresholds
- Command support for Discord, Slack, Telegram, Matrix, WhatsApp
- Statistics tracking and logging
- Admin controls

## Configuration

See the plugin documentation in `@optimizclaw/acip-security/README.md`

## Usage

```bash
# Commands available in chat
!acip-status     # Check protection status
!acip-stats      # View attack statistics
!acip-help       # Show help
!acip-enable     # Enable protection (admin)
!acip-disable    # Disable protection (admin)
!acip-reload     # Reload prompts (admin)
!acip-report     # Detailed report (admin)
```

## Documentation

- Main README: [../README.md](../README.md)
- Installation guide: [../docs/installation.md](../docs/installation.md)
- API reference: [../docs/api-reference.md](../docs/api-reference.md)
- Architecture: [../docs/architecture.md](../docs/architecture.md)

## License

MIT License - see [../LICENSE](../LICENSE)
