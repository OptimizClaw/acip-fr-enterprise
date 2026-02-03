# Module d'Intégration ACIP-FR

Bienvenue dans le module d'intégration ACIP-FR ! Ce package fournit une intégration facile de la protection ACIP-FR dans vos applications Python.

## 📦 Installation

```bash
pip install -r requirements.txt
```

## 🚀 Démarrage Rapide

```python
from acip_integration import ACIPProtection

# Initialiser la protection
protection = ACIPProtection(
    acip_version="v1.1",
    language="fr",
    auto_block_threshold=3
)

# Protéger vos messages
message = "Votre message utilisateur ici"
analyse = protection.analyse(message)

if analyse.blocked:
    print(f"Attaque bloquée : {analyse.reason}")
else:
    print(f"Message sûr : {analyse.risk_score}")
```

## 📋 Configuration

Voir le guide de configuration dans la [documentation principale](../docs/installation.md).

## 🤝 Contribuer

Les contributions sont les bienvenues ! Consultez le [CONTRIBUTING.md](../CONTRIBUTING.md) pour les détails.
