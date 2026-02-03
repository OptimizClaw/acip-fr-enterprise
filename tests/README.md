# ACIP-FR Test Suite

This directory contains unit and integration tests for the ACIP-FR prompt injection protection system.

## 🧪 Test Structure

```
tests/
├── test_risk_scoring.py      # Risk calculation tests
├── test_injection_detection.py  # Attack pattern detection tests
├── test_llm_integration.py   # LLM API integration tests
├── test_plugin.py            # OpenClaw plugin tests
├── test_api.py               # REST API tests
└── test_benchmark.py         # Performance benchmarking tests
```

## 🚀 Running Tests

```bash
# Run all tests
pytest

# Run specific test file
pytest tests/test_risk_scoring.py

# Run with coverage
pytest --cov=src --cov-report=html

# Run with verbose output
pytest -v
```

## 📋 Test Cases

The test suite includes:
- Basic attack pattern detection
- Risk scoring accuracy
- LLM integration with ACIP-FR
- Plugin functionality
- API endpoints
- Performance benchmarks

## 🤝 Contributing

Add new test cases for:
- New attack vectors
- Edge cases
- Integration scenarios
- Performance improvements
