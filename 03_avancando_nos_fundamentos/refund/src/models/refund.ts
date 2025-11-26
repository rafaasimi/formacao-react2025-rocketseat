import type { RefundCategory } from "./refund-category";

export type Refund = {
  title: string;
  category: RefundCategory;
  value: number;
  receipt: string;
};
