# Quick Start Guide - ACIP-FR v1.3

Welcome to ACIP-FR! This guide will get you up and running in 5 minutes.

## 🎯 What is ACIP-FR?

ACIP-FR (Advanced Cognitive Inoculation Prompt - French) is a security framework that protects Large Language Models (LLMs) against prompt injection attacks.

## 🚀 Getting Started

### 1. Installation

Choose your installation method:

**Option A: OpenClaw Plugin (Recommended)**
```bash
openclaw plugins install @optimizclaw/acip-security
```

**Option B: Manual Installation**
```bash
git clone https://github.com/optimizclaw/acip-fr.git
cd acip-fr
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your API key
```

### 2. Quick Test

```bash
python src/acip_fr_tester_v1_3.py prompts/ACIP_FR_v1_1.md
```

### 3. Using ACIP-FR

See [Integration Guide](installation.md) for detailed integration instructions.

## 📋 Available Features

- ✅ Prompt injection detection
- ✅ Risk scoring
- ✅ Multiple LLM model support
- ✅ Interactive testing
- ✅ Benchmarking capabilities
- ✅ Discord/Slack/Telegram commands

## 🎓 Next Steps

- Read the full [README](../README.md)
- Check [Architecture](architecture.md) for system design
- Review [API Reference](api-reference.md) for implementation details

## 💡 Need Help?

- Check [Issues](https://github.com/optimizclaw/acip-fr/issues)
- Read [Documentation](../docs/)
- Join our community

---

**Happy protecting! 🛡️**
