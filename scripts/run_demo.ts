import { payload, summary } from "../src/services/priorAuthorizationService";

console.log("prior-authorization-evidence-router demo");
console.log(JSON.stringify(summary(), null, 2));
console.log(JSON.stringify(payload().rules, null, 2));
