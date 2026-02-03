# Guide de Contribution

Merci de votre intérêt pour contribuer à ACIP-FR ! 🎉

## 🌟 Comment Contribuer

### Signaler un Bug 🐛

1. Vérifiez que le bug n'a pas déjà été signalé dans [Issues](https://github.com/optimizclaw/acip-fr/issues)
2. Créez une nouvelle issue avec le template "Bug Report"
3. Incluez:
   - Description claire du problème
   - Étapes pour reproduire
   - Comportement attendu vs comportement observé
   - Logs et captures d'écran si possible
   - Version d'ACIP-FR et environnement

### Proposer une Fonctionnalité 💡

1. Vérifiez dans [Issues](https://github.com/optimizclaw/acip-fr/issues) et [Discussions](https://github.com/optimizclaw/acip-fr/discussions)
2. Créez une issue avec le template "Feature Request"
3. Décrivez:
   - Le problème que cela résoudrait
   - La solution proposée
   - Les alternatives considérées

### Soumettre une Pull Request 🔧

1. **Fork** le projet
2. **Créez une branche**:
```bash
   git checkout -b feature/AmazingFeature
```
3. **Committez vos changements**:
```bash
   git commit -m 'feat: Add AmazingFeature'
```
   (Utilisez Conventional Commits)
4. **Pushez vers la branche**:
```bash
   git push origin feature/AmazingFeature
```
5. **Ouvrez une Pull Request**

## 📝 Standards de Code

### Python

- Suivez PEP 8
- Utilisez des docstrings pour les fonctions
- Tests unitaires requis pour les nouvelles fonctionnalités
- Type hints encouragés

### JavaScript/Node.js

- Suivez Airbnb Style Guide
- ESLint doit passer
- Tests Jest requis

### Commits

Utilisez Conventional Commits:

- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation uniquement
- `style:` Formatage, points-virgules manquants, etc.
- `refactor:` Refactoring de code
- `test:` Ajout de tests
- `chore:` Maintenance

## 🧪 Tests
```bash
# Python
pytest tests/

# Node.js
npm test
```

## 📄 Licence

En contribuant, vous acceptez que vos contributions soient sous licence MIT.

## 🙏 Merci

Vos contributions font d'ACIP-FR/OptimizClaw un meilleur projet ! 🚀