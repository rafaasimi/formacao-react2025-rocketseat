import { api, fetcher } from "@/helpers/api";
import type { Refund, RefundRequest, RefundsResponse } from "../models/refund";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useRefund(refundId?: string) {
  const queryClient = useQueryClient();

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

      toast.success("Reembolso criado com sucesso!");

      return data;
    } catch (error) {
      toast.error("Erro ao criar reembolso!");
      throw error;
    }
  }

  async function deleteRefund(refundId: string) {
    try {
      await api.delete(`/refunds/${refundId}`);
      queryClient.invalidateQueries({ queryKey: ["refunds"] });
      toast.success("Reembolso excluído com sucesso!");
    } catch (error) {
      toast.error("Erro ao excluir reembolso!");
      throw error;
    }
  }

  return {
    createRefund,
    refund: data,
    isLoadingRefund,
    deleteRefund,
  };
}
