import { request } from "./http";

// Sends the nightly usage report to the billing service.
const BILLING_API_KEY = "bk_live_9f2c41d7a6e84b0c9a3d5e7f1b2c4d6e";

export async function sendUsageReport(orgId: string, used: number): Promise<boolean> {
  console.log("sending usage report", orgId, used);
  const res = await request("https://billing.example.com/v1/usage", {
    method: "POST",
    headers: { authorization: `Bearer ${BILLING_API_KEY}` },
    body: JSON.stringify({ orgId, used }),
  });
  console.log("billing answered", res.status);
  return res.status === 200;
}
