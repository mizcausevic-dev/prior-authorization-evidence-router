# Security Policy

## Scope

This repository demonstrates evidence-routing primitives. Production deployment
requires a BAA, formal HIPAA compliance review, and qualified medical-data
infrastructure. Do not deploy as-is.

It is a **reference control plane** for prior-authorization evidence routing,
payer-rule mapping, and approval posture. It ships **synthetic, non-PHI sample
data only**. It is **not HIPAA-compliant out of the box** and must not be used
with real protected health information (PHI) without an independent compliance
and security review.

## HIPAA readiness (not compliance)

This project provides HIPAA-**readiness scaffolding** — patterns for evidence
packaging and audit-legible workflows. It does **not** constitute HIPAA, SOC 2,
or BAA compliance, and nothing here should be read as a certification.

## Supported versions

| Version | Supported |
|---------|-----------|
| `v1.0-prod` and later | ✅ |
| `v0.1-shipped` (pre-hardening) | ❌ |

## Reporting a vulnerability

Please report suspected vulnerabilities privately to **security@kineticgain.com**
(or open a [GitHub security advisory](https://github.com/mizcausevic-dev/prior-authorization-evidence-router/security/advisories/new)).
Do not open a public issue for a security report, and never include real PHI in
any report.

We aim to acknowledge within 3 business days.

## Dependency posture

- Dependencies are monitored weekly via Dependabot (npm + GitHub Actions).
- CI runs `npm audit --audit-level=high` on every push and pull request.
- High/critical advisories are triaged and either patched or documented here.

### Known / accepted advisories

_None at v1.0-prod._
