// SYNTHETIC TEST DATA — assertions reference the synthetic, non-PHI sample
// fixtures in ../data/samplePriorAuth.ts. No real protected health information.
import { describe, expect, test } from "vitest";

import {
  renderApprovalPosture,
  renderDocs,
  renderEvidenceLane,
  renderOverview,
  renderPayerRules,
  renderVerification
} from "./render";
import {
  approvalPackets,
  payerRuleMap,
  priorAuthCases
} from "../data/samplePriorAuth";

const renderers = [
  ["overview", renderOverview],
  ["evidence-lane", renderEvidenceLane],
  ["payer-rules", renderPayerRules],
  ["approval-posture", renderApprovalPosture],
  ["verification", renderVerification],
  ["docs", renderDocs]
] as const;

describe("render", () => {
  test.each(renderers)("%s produces a full HTML document with nav", (_label, fn) => {
    const html = fn();
    expect(html.startsWith("<!DOCTYPE html>")).toBe(true);
    expect(html).toContain("</html>");
    expect(html).toContain("Prior Authorization Evidence Router");
    expect(html).toContain('href="/evidence-lane"');
    expect(html).toContain('href="/docs"');
  });

  test("overview surfaces case data and risk tags", () => {
    const html = renderOverview();
    expect(html).toContain(priorAuthCases[0].caseId);
    expect(html).toContain(priorAuthCases[0].payer);
    expect(html).toContain('class="tag critical"');
  });

  test("evidence lane lists every case with owner and next action", () => {
    const html = renderEvidenceLane();
    for (const item of priorAuthCases) {
      expect(html).toContain(item.caseId);
      expect(html).toContain(item.owner);
    }
  });

  test("payer rules show rules, owners, and all readiness tag classes", () => {
    const html = renderPayerRules();
    for (const rule of payerRuleMap) {
      expect(html).toContain(rule.ruleId);
      expect(html).toContain(rule.owner);
    }
    expect(html).toContain('class="tag red"');
    expect(html).toContain('class="tag green"');
    expect(html).toContain('class="tag yellow"');
  });

  test("approval posture shows packets, completeness scores, and audiences", () => {
    const html = renderApprovalPosture();
    for (const packet of approvalPackets) {
      expect(html).toContain(packet.packetId);
      expect(html).toContain(String(packet.completenessScore));
      expect(html).toContain(packet.audience);
    }
  });

  test("verification renders proof statements", () => {
    const html = renderVerification();
    expect(html).toContain("Verification");
    expect(html).toContain("evidence");
  });

  test("docs page enumerates the route surface", () => {
    const html = renderDocs();
    expect(html).toContain("/payer-rules");
    expect(html).toContain("/approval-posture");
  });
});
