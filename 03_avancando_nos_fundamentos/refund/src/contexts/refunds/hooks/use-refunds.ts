import { fetcher } from "@/helpers/api";
import { useQuery } from "@tanstack/react-query";
import type { Refund } from "../models/refund";
import { createSerializer, parseAsString, useQueryState } from "nuqs";

const toSearchParams = createSerializer({
  page: parseAsString,
  q: parseAsString,
});

export function useRefunds() {
  const [page, setPage] = useQueryState("page");
  const [q, setQ] = useQueryState("q");

  const { data, isLoading } = useQuery<RefundsResponse>({
    queryKey: ["refunds", page, q],
    queryFn: () => fetcher(`/refunds${toSearchParams({ page, q })}`),
  });

  return {
    refunds: data?.refunds?.data || [],
    meta: data?.refunds?.meta,
    isLoadingRefunds: isLoading,
    filters: {
      page,
      setPage,
      q,
      setQ,
    },
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
