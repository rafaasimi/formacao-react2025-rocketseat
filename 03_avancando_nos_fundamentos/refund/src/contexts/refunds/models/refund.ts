import type { Receipt } from "@/contexts/receipts/hooks/models/receipt";
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
