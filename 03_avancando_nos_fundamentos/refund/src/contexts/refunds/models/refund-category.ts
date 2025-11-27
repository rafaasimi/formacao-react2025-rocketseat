export const REFUND_CATEGORIES = [
  "food",
  "hosting",
  "transport",
  "services",
  "other",
] as const;

export type RefundCategory = (typeof REFUND_CATEGORIES)[number];
