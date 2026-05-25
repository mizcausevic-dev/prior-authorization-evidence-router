# Prior Authorization Evidence Router

TypeScript control plane for prior-authorization intake, evidence routing, payer-rule pressure, and approval-safe escalation across healthcare workflows.

## Why this exists

- Prior-auth teams lose time when clinical evidence, payer requirements, and owner handoffs live in separate systems.
- Denials often come from routing failures and incomplete packets, not from a lack of patient or procedure context.
- Revenue cycle, utilization review, and clinical operations all need the same approval picture without waiting on another spreadsheet.
- Digital health buyers care whether the approval workflow is auditable and recoverable, not whether the dashboard looks "AI-powered."

## Why this matters (KG Embedded tie-back)

This repo demonstrates the evidence-routing primitive for Digital Health / MedTech buyers: intake cases tied to payer rules, evidence gaps, approval blockers, and owner-safe escalation paths. A B2B SaaS buyer would care because healthcare approvals and denials often need to surface inside customer-facing operator tools without exposing PHI-heavy systems or unsafe write paths. Kinetic Gain Embedded extends this into security-first in-product analytics for approval-aware and evidence-aware reporting across care delivery and revenue operations, see [kineticgain.com/embedded](https://kineticgain.com/embedded).

## Routes

- `/`
- `/evidence-lane`
- `/payer-rules`
- `/approval-posture`
- `/verification`
- `/docs`

## API

- `/api/dashboard/summary`
- `/api/evidence-lane`
- `/api/payer-rules`
- `/api/approval-posture`
- `/api/verification`
- `/api/sample`

## Screenshots

![Overview](./screenshots/01-overview-proof.png)
![Detail view 1](./screenshots/02-evidence-lane-proof.png)
![Detail view 2](./screenshots/03-payer-rules-proof.png)
![Detail view 3](./screenshots/04-approval-posture-proof.png)

## Local Development

```powershell
cd prior-authorization-evidence-router
npm install
npm run dev
```

Open:
- [http://127.0.0.1:5438/](http://127.0.0.1:5438/)
- [http://127.0.0.1:5438/evidence-lane](http://127.0.0.1:5438/evidence-lane)
- [http://127.0.0.1:5438/payer-rules](http://127.0.0.1:5438/payer-rules)
- [http://127.0.0.1:5438/approval-posture](http://127.0.0.1:5438/approval-posture)
- [http://127.0.0.1:5438/verification](http://127.0.0.1:5438/verification)

## Validation

- `npm run build`
- `npm run test`
- `npm run demo`
- `npm run smoke`
- `npm run render:assets`

## Docs

- [Architecture](./docs/architecture.md)
- [Origin](./docs/ORIGIN.md)
- [Kinetic Gain Embedded tie-back](./docs/KINETIC_GAIN_EMBEDDED.md)
- [Changelog](./CHANGELOG.md)
