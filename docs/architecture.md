# Architecture

## Overview

`prior-authorization-evidence-router` is a lightweight TypeScript + Express control surface for modeling the operating layer between clinical intake, payer requirements, evidence packets, and approval-safe escalation.

## Surfaces

- `overview`
  - case count
  - urgent turnaround pressure
  - evidence gaps
  - blocked approvals
- `evidence-lane`
  - case-by-case evidence routing
  - owner lanes
  - turnaround timing
  - next action
- `payer-rules`
  - payer requirement mapping
  - evidence targets
  - readiness and blockers
- `approval-posture`
  - packet completeness
  - denial exposure
  - audience-specific blockers
- `verification`
  - what the repo proves about healthcare approval systems

## Data Model

- `PriorAuthCase`
  - case, payer, service line, owner, turnaround, evidence packet, risk, next action
- `PayerRule`
  - payer rule, evidence target, requirement type, owner, readiness, blocker
- `ApprovalPacket`
  - audience, completeness score, due window, blocker, decision note

## Design Principle

Prior authorization should be inspectable by clinical operations, revenue cycle, utilization review, and executive stakeholders. The system should explain:
- which case is under pressure right now
- what evidence requirement is missing
- who owns the next move
- where denial or turnaround risk is building
