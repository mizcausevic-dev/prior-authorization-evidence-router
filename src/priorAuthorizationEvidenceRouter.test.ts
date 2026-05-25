import { describe, expect, test } from "vitest";

import {
  approvalPosture,
  evidenceLane,
  payerRules,
  payload,
  serviceLineCoverage,
  summary,
  verification
} from "./services/priorAuthorizationService";

describe("prior-authorization-evidence-router", () => {
  test("summary exposes case pressure and blocked approvals", () => {
    const stats = summary();
    expect(stats.caseCount).toBeGreaterThan(2);
    expect(stats.urgentCases).toBeGreaterThan(0);
    expect(stats.blockedApprovals).toBeGreaterThan(0);
  });

  test("payer rules and service-line coverage stay operationally legible", () => {
    expect(payerRules().length).toBe(4);
    expect(serviceLineCoverage().length).toBeGreaterThan(3);
    expect(approvalPosture().some((packet) => packet.completenessScore < 80)).toBe(true);
  });

  test("payload bundles the full prior-auth operator surface", () => {
    expect(evidenceLane().length).toBe(5);
    expect(verification().length).toBe(3);
    expect(payload()).toHaveProperty("cases");
    expect(payload()).toHaveProperty("rules");
    expect(payload()).toHaveProperty("reviews");
  });
});
