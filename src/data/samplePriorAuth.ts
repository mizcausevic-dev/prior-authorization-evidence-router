export type PriorAuthCase = {
  caseId: string;
  payer: string;
  patientSegment: string;
  serviceLine: string;
  evidencePacket: string;
  owner: string;
  turnaroundDays: number;
  status: "green" | "yellow" | "red";
  risk: "low" | "watch" | "critical";
  nextAction: string;
  excerpt: string;
};

export type PayerRule = {
  ruleId: string;
  payer: string;
  ruleTitle: string;
  requirementType: "clinical" | "coding" | "utilization" | "appeal";
  targetEvidence: string;
  owner: string;
  readiness: "green" | "yellow" | "red";
  impactArea: string;
  blocker: string;
};

export type ApprovalPacket = {
  packetId: string;
  caseId: string;
  payer: string;
  audience: string;
  completenessScore: number;
  status: "green" | "yellow" | "red";
  dueInDays: number;
  blocker: string;
  decisionNote: string;
};

export const priorAuthCases: PriorAuthCase[] = [
  {
    caseId: "PA-1018",
    payer: "Blue Harbor Health",
    patientSegment: "Orthopedic surgery",
    serviceLine: "Musculoskeletal",
    evidencePacket: "Imaging + PT history + surgeon note",
    owner: "Utilization Review",
    turnaroundDays: 2,
    status: "red",
    risk: "critical",
    nextAction: "Attach failed conservative-treatment timeline before payer nurse review.",
    excerpt: "Payer requires documented failed conservative treatment for six weeks before surgical approval."
  },
  {
    caseId: "PA-1042",
    payer: "North River Advantage",
    patientSegment: "Home infusion",
    serviceLine: "Specialty Pharmacy",
    evidencePacket: "Lab trend + prescribing note + benefits verification",
    owner: "Pharmacy Ops",
    turnaroundDays: 4,
    status: "yellow",
    risk: "watch",
    nextAction: "Route missing infusion start date attestation to clinician queue.",
    excerpt: "Prior authorization cannot proceed until the prescribing physician certifies infusion start timing and monitoring plan."
  },
  {
    caseId: "PA-1097",
    payer: "SummitCare PPO",
    patientSegment: "Advanced imaging",
    serviceLine: "Radiology",
    evidencePacket: "Ordering note + symptom history + prior treatment record",
    owner: "Revenue Cycle",
    turnaroundDays: 1,
    status: "red",
    risk: "critical",
    nextAction: "Escalate missing ordering rationale so the peer-review request is not auto-denied.",
    excerpt: "Imaging request needs symptom duration, failed therapy, and ordering rationale for peer review."
  },
  {
    caseId: "PA-1126",
    payer: "Union State Health Plan",
    patientSegment: "Behavioral health program",
    serviceLine: "Behavioral Health",
    evidencePacket: "Diagnosis record + treatment plan + progress note",
    owner: "Clinical Intake",
    turnaroundDays: 6,
    status: "yellow",
    risk: "watch",
    nextAction: "Confirm treatment-plan signature coverage before packet handoff.",
    excerpt: "Behavioral program authorization needs signed treatment plan and progress note within the last 14 days."
  },
  {
    caseId: "PA-1161",
    payer: "Vertex Family Health",
    patientSegment: "Cardiac monitor",
    serviceLine: "Cardiology",
    evidencePacket: "Diagnostic note + symptom log + device order",
    owner: "Care Navigation",
    turnaroundDays: 8,
    status: "green",
    risk: "low",
    nextAction: "Finalize outbound packet and watch only for payer turnaround.",
    excerpt: "Diagnostic device authorization may proceed once symptom log and ordering note are bundled."
  }
];

export const payerRuleMap: PayerRule[] = [
  {
    ruleId: "RULE-21",
    payer: "Blue Harbor Health",
    ruleTitle: "Conservative treatment proof",
    requirementType: "clinical",
    targetEvidence: "Six-week therapy timeline with failed response notation",
    owner: "Utilization Review",
    readiness: "yellow",
    impactArea: "Surgical approval",
    blocker: "Therapy timeline exists in notes, but it is not extracted into the payer packet yet."
  },
  {
    ruleId: "RULE-27",
    payer: "SummitCare PPO",
    ruleTitle: "Peer review rationale packet",
    requirementType: "utilization",
    targetEvidence: "Ordering rationale plus prior treatment and symptom-duration proof",
    owner: "Revenue Cycle",
    readiness: "red",
    impactArea: "Imaging reimbursement",
    blocker: "Ordering rationale is still trapped in free-text notes and not mapped into the outbound review form."
  },
  {
    ruleId: "RULE-33",
    payer: "Union State Health Plan",
    ruleTitle: "Signed behavioral plan validation",
    requirementType: "clinical",
    targetEvidence: "Treatment plan signature and current progress-note verification",
    owner: "Clinical Intake",
    readiness: "yellow",
    impactArea: "Program enrollment",
    blocker: "Signature coverage is inconsistent across imported plan documents."
  },
  {
    ruleId: "RULE-39",
    payer: "North River Advantage",
    ruleTitle: "Infusion start attestation",
    requirementType: "appeal",
    targetEvidence: "Physician attestation plus monitoring plan reference",
    owner: "Pharmacy Ops",
    readiness: "green",
    impactArea: "Specialty medication start",
    blocker: "No blocker; only packaging and outbound routing remain."
  }
];

export const approvalPackets: ApprovalPacket[] = [
  {
    packetId: "APR-11",
    caseId: "PA-1018",
    payer: "Blue Harbor Health",
    audience: "Payer nurse review",
    completenessScore: 72,
    status: "red",
    dueInDays: 2,
    blocker: "Conservative-treatment evidence is incomplete in the final packet.",
    decisionNote: "Escalate to utilization review lead before the nurse-review window closes."
  },
  {
    packetId: "APR-14",
    caseId: "PA-1097",
    payer: "SummitCare PPO",
    audience: "Peer-review board",
    completenessScore: 68,
    status: "red",
    dueInDays: 1,
    blocker: "Ordering rationale and failed-treatment proof are not both mapped.",
    decisionNote: "Treat as same-day denial-risk exposure until evidence is normalized."
  },
  {
    packetId: "APR-19",
    caseId: "PA-1126",
    payer: "Union State Health Plan",
    audience: "Behavioral health reviewer",
    completenessScore: 84,
    status: "yellow",
    dueInDays: 4,
    blocker: "Treatment-plan signature coverage still needs a final check.",
    decisionNote: "Packet is recoverable if the signature verification clears today."
  }
];
