# Architecture

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      User Interface                          │
│  (Discord/Slack/Telegram/Web/Dashboard)                     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  OpenClaw Plugin Layer                       │
│  (Message Filtering, Command Processing)                    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   ACIP-FR Core Engine                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Risk Scoring System                                 │   │
│  │  - Signal Detection                                  │   │
│  │  - Weighted Calculation                              │   │
│  │  - Threshold Analysis                                │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Multi-Vector Protection                             │   │
│  │  - Direct Injections                                 │   │
│  │  - Authority Spoofing                                │   │
│  │  - Encoding Protection                               │   │
│  │  - Indirect Attacks                                  │   │
│  │  - Exfiltration Prevention                            │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  LLM-as-Judge Integration                            │   │
│  │  - Response Evaluation                               │   │
│  │  - Confidence Scoring                                │   │
│  │  - Detailed Reasoning                                │   │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    LLM Integration Layer                     │
│  - OpenRouter API                                           │
│  - Anthropic API                                            │
│  - Custom Providers                                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      Security Layer                         │
│  - Rate Limiting                                            │
│  - Retry Logic                                             │
│  - Error Handling                                           │
│  - Logging & Audit                                          │
└─────────────────────────────────────────────────────────────┘
```

## Component Descriptions

### 1. Plugin Layer

Handles integration with OpenClaw and message filtering.

**Key Responsibilities:**
- Message filtering and analysis
- Command processing
- User authentication
- Logging and monitoring

** Technologies:**
- JavaScript/Node.js
- OpenClaw SDK

### 2. Core Engine

The heart of ACIP-FR protection system.

**Risk Scoring System:**
- Detects signals in user messages
- Calculates weighted scores
- Implements special rules
- Determines action thresholds

**Multi-Vector Protection:**
- Direct injection detection
- Authority spoofing prevention
- Encoding protection (base64, hex, rot13)
- Indirect injection blocking
- Exfiltration prevention

**LLM-as-Judge:**
- Response evaluation
- Confidence scoring
- Detailed reasoning
- Pass/Fail/PARTIAL verdicts

### 3. LLM Integration Layer

Provides access to various LLM providers.

**Supported Providers:**
- OpenRouter (multi-model access)
- Anthropic (production)
- Custom providers

**Features:**
- Token management
- Caching
- Rate limiting
- Error handling

### 4. Security Layer

Additional security measures.

**Features:**
- Rate limiting
- Retry logic
- Error handling
- Logging and audit trail

## Data Flow

```
1. User Message Received
   ↓
2. Plugin Layer Checks
   - User authentication
   - Plugin status
   ↓
3. Risk Scoring Calculation
   - Signal detection
   - Score calculation
   ↓
4. Protection Decision
   - Safe message: pass through
   - Risky message: additional analysis
   ↓
5. LLM Protection
   - Apply ACIP prompt
   - Get protected response
   ↓
6. LLM-as-Judge Evaluation
   - Evaluate response quality
   - Confidence scoring
   - Reasoning analysis
   ↓
7. Final Output
   - Safe response
   - Blocked message with reason
   - Security log entry
```

## Scalability Considerations

### Horizontal Scaling
- Stateless plugin design
- Database for statistics
- Redis for caching

### Vertical Scaling
- LLM provider selection
- Auto-scaling triggers
- Resource optimization

### Performance Optimization
- Message caching
- Incremental risk scoring
- Batch processing

## Security Model

### Defense in Depth

1. **Input Validation**
   - Message sanitization
   - Risk score thresholding

2. **Access Control**
   - Role-based permissions
   - Whitelisting system

3. **Monitoring**
   - Real-time detection
   - Detailed logging
   - Analytics

4. **Containment**
   - Auto-blocking
   - Manual intervention
   - Audit trail

## Performance Metrics

- Message Processing Time: <100ms
- Risk Calculation: O(n) where n = message length
- Cache Hit Rate: 70-90%
- Attack Detection Rate: 95%+
- False Positive Rate: <1%

## Extension Points

The architecture supports easy extension:

- Custom signal detectors
- New LLM providers
- Additional protection vectors
- Custom command handlers
- Plugin hooks and callbacks
