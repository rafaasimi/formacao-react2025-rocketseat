import { z } from "zod";
import { REFUND_CATEGORIES } from "./models/refund-category";

export const refundRequestSchema = z.object({
  title: z.string().min(3, "Título deve ter pelo menos 3 caracteres"),
  category: z.enum(REFUND_CATEGORIES),
  value: z.coerce.number().min(1, "Valor deve ser maior que 0"),
  receipt: z.string().min(1),
});

export type RefundRequestSchema = z.infer<typeof refundRequestSchema>;
