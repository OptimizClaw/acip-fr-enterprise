# Installation Guide

This guide covers all installation methods for ACIP-FR.

## 📦 Prerequisites

- Python 3.8 or higher
- Node.js 18+ (for plugin installation)
- Git
- OpenRouter API key (for testing)
- Anthropic API key (for production)

## 🚀 Quick Installation

### Option 1: OpenClaw Plugin (Recommended)

```bash
openclaw plugins install @optimizclaw/acip-security
```

### Option 2: Manual Installation

```bash
git clone https://github.com/optimizclaw/acip-fr.git
cd acip-fr

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate    # On Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your API keys
```

### Option 3: npm/yarn (Node.js Plugin)

```bash
npm install @optimizclaw/acip-security
# or
yarn add @optimizclaw/acip-security
```

## 🔧 Configuration

### Environment Variables

```bash
# Required
OPENROUTER_API_KEY=your_api_key_here

# Optional
LLM_MODEL=openai/gpt-4o-mini
JUDGE_MODEL=google/gemma-3-27b-it
ACIP_MAX_RETRIES=3
ACIP_TIMEOUT=60
ACIP_ENABLE_CACHE=true
```

### OpenClaw Configuration

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
      "enableLogging": true
    }
  }
}
```

## 📊 Verification

After installation, verify the plugin works:

```bash
# Run tests
python src/acip_fr_tester_v1_3.py prompts/ACIP_FR_v1_1.md

# Check statistics
!acip-stats  # In your communication platform
```

## 🐛 Troubleshooting

### Plugin not loading

Check that:
1. OpenClaw is running version 2.0+
2. Plugin file is in correct location
3. Configuration is valid JSON

### Tests failing

1. Verify API keys are correct
2. Check internet connectivity
3. Review error logs in logs/ directory

## 📚 Next Steps

- [Quick Start](QUICK_START.md)
- [API Reference](api-reference.md)
- [Configuration](architecture.md)
