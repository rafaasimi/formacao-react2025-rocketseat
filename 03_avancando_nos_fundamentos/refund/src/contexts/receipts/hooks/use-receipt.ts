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

  async function downloadReceipt(receiptId: string) {
    try {
      const { data } = await api.get<{ url: string }>(
        `/receipts/download/${receiptId}`,
      );

      if (data.url.startsWith("/")) {
        window.open(`${import.meta.env.VITE_API_URL}${data.url}`, "_blank");
      } else {
        window.open(data.url, "_blank");
      }
    } catch (error) {
      console.error("Erro ao baixar comprovante:", error);
    }
  }

  return {
    createReceipt,
    downloadReceipt,
  };
}
