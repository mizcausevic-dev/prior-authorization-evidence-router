import express from "express";

import {
  approvalPosture,
  evidenceLane,
  payload,
  payerRules,
  summary,
  verification
} from "./services/priorAuthorizationService";
import {
  renderApprovalPosture,
  renderDocs,
  renderEvidenceLane,
  renderOverview,
  renderPayerRules,
  renderVerification
} from "./services/render";

const app = express();
const port = Number(process.env.PORT ?? 5438);

app.get("/", (_req, res) => res.type("html").send(renderOverview()));
app.get("/evidence-lane", (_req, res) => res.type("html").send(renderEvidenceLane()));
app.get("/payer-rules", (_req, res) => res.type("html").send(renderPayerRules()));
app.get("/approval-posture", (_req, res) => res.type("html").send(renderApprovalPosture()));
app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
app.get("/api/evidence-lane", (_req, res) => res.json(evidenceLane()));
app.get("/api/payer-rules", (_req, res) => res.json(payerRules()));
app.get("/api/approval-posture", (_req, res) => res.json(approvalPosture()));
app.get("/api/verification", (_req, res) => res.json(verification()));
app.get("/api/sample", (_req, res) => res.json(payload()));

if (require.main === module) {
  app.listen(port, "127.0.0.1", () => {
    console.log(`Prior Authorization Evidence Router listening on http://127.0.0.1:${port}`);
  });
}

export default app;
