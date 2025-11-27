import type { Receipt } from "@/contexts/receipts/models/receipt";
import type { RefundCategory } from "./refund-category";

export type Refund = {
  id: string;
  title: string;
  category: RefundCategory;
  value: number;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  receipt: Receipt;
};

export type RefundMeta = {
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

export type RefundRequest = {
  title: string;
  category: RefundCategory;
  value: number;
  receipt: string;
};

export type RefundsResponse = {
  refunds: {
    meta: RefundMeta;
    data: Refund[];
  };
};
