import { api } from "@/helpers/api";
import type { RefundRequest, RefundsResponse } from "../models/refund";

export function useRefund() {
  async function createRefund(payload: RefundRequest) {
    try {
      const {} = api.post<RefundsResponse>("/refunds", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {}
  }

  return {
    createRefund,
  };
}
