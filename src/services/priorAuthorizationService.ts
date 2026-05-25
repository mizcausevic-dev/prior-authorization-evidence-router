import { approvalPackets, payerRuleMap, priorAuthCases } from "../data/samplePriorAuth";

export function summary() {
  return {
    caseCount: priorAuthCases.length,
    urgentCases: priorAuthCases.filter((item) => item.turnaroundDays <= 2).length,
    evidenceGaps: payerRuleMap.filter((item) => item.readiness !== "green").length,
    blockedApprovals: approvalPackets.filter((item) => item.status !== "green").length,
    recommendation:
      "Clear peer-review rationale and conservative-treatment evidence first so denial risk does not cascade into missed reimbursement."
  };
}

export function evidenceLane() {
  return priorAuthCases;
}

export function payerRules() {
  return payerRuleMap;
}

export function approvalPosture() {
  return approvalPackets;
}

export function serviceLineCoverage() {
  const counts = new Map<string, number>();
  for (const item of priorAuthCases) {
    counts.set(item.serviceLine, (counts.get(item.serviceLine) ?? 0) + 1);
  }

  return Array.from(counts.entries()).map(([serviceLine, caseCount]) => ({
    serviceLine,
    caseCount
  }));
}

export function verification() {
  return [
    "The surface shows that prior-authorization failure is often a routing and evidence-packaging defect, not a purely clinical one.",
    "Payer rules become operational only when owners, evidence targets, and denial blockers are mapped into the same lane.",
    "Approval posture makes reimbursement and care-delay risk visible before a case drops into a denial or appeal spiral."
  ];
}

export function payload() {
  return {
    dashboard: summary(),
    cases: evidenceLane(),
    rules: payerRules(),
    reviews: approvalPosture(),
    serviceLines: serviceLineCoverage(),
    verification: verification()
  };
}
