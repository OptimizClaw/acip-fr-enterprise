# ACIP-FR Integration Module

Welcome to the ACIP-FR integration module! This package provides easy integration of ACIP-FR protection into your Python applications.

## 📦 Installation

```bash
pip install -r requirements.txt
```

## 🚀 Quick Start

```python
from acip_integration import ACIPProtection

# Initialize protection
protection = ACIPProtection(
    acip_version="v1.1",
    language="fr",
    auto_block_threshold=3
)

# Protect your messages
message = "Your user message here"
analysis = protection.analyze(message)

if analysis.blocked:
    print(f"Attack blocked: {analysis.reason}")
else:
    print(f"Message safe: {analysis.risk_score}")
```

## 📋 Configuration

See the configuration guide in the [main documentation](../docs/installation.md).

## 🤝 Contributing

Contributions are welcome! Please see the main [CONTRIBUTING.md](../CONTRIBUTING.md) file.
