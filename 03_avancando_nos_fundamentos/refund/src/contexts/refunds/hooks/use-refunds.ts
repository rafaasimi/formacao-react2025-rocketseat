import { fetcher } from "@/helpers/api";
import { useQuery } from "@tanstack/react-query";
import type { Refund } from "../models/refund";

export function useRefunds() {
  const { data, isLoading } = useQuery<RefundsResponse>({
    queryKey: ["refunds"],
    queryFn: () => fetcher("/refunds"),
  });

  return {
    refunds: data?.refunds?.data || [],
    meta: data?.refunds?.meta,
    isLoadingRefunds: isLoading,
  };
}

type RefundMeta = {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  firstPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: string | null;
  previousPageUrl: string | null;
};

type RefundsResponse = {
  refunds: {
    meta: RefundMeta;
    data: Refund[];
  };
};
