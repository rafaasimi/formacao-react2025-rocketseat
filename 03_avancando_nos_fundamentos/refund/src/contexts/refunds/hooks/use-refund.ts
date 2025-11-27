import { api, fetcher } from "@/helpers/api";
import type { Refund, RefundRequest, RefundsResponse } from "../models/refund";
import { useQuery } from "@tanstack/react-query";

export function useRefund(refundId?: string) {
  const { data, isLoading: isLoadingRefund } = useQuery<Refund>({
    queryKey: ["refunds", refundId],
    queryFn: async () => {
      const { refund } = await fetcher(`/refunds/${refundId}`);
      return refund;
    },
    enabled: !!refundId,
  });

  async function createRefund(payload: RefundRequest) {
    try {
      const { data } = await api.post<RefundsResponse>("/refunds", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      console.error("Erro ao criar reembolso:", error);
    }
  }

  return {
    createRefund,
    refund: data,
    isLoadingRefund,
  };
}
