import { api } from "@/helpers/api";
import type { ReceiptResponse } from "../models/receipt";

export function useReceipt() {
  async function createReceipt(file: File) {
    try {
      const formData = new FormData();
      formData.append("receiptFile", file);

      const { data } = await api.post<ReceiptResponse>("/receipts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return data;
    } catch (error) {
      throw error;
    }
  }

  return {
    createReceipt,
  };
}
