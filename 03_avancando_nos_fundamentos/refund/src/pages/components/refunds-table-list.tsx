import { RefundsTableItem } from "./refunds-table-item";
import { IconButton } from "@/components/icon-button";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useRefunds } from "@/contexts/refunds/hooks/use-refunds";

export function RefundsTableList() {
  const { refunds, meta, isLoadingRefunds, filters } = useRefunds();

  function handlePreviousPage() {
    if (meta && meta.currentPage > 1) {
      filters.setPage((meta.currentPage - 1).toString());
    }
  }

  function handleNextPage() {
    if (meta && meta.currentPage < meta.lastPage) {
      filters.setPage((meta.currentPage + 1).toString());
    }
  }

  return (
    <div className="space-y-6">
      {isLoadingRefunds && (
        <div className="text-center text-sm text-gray-200">
          Carregando! Aguarde até que as despesas sejam carregadas.
        </div>
      )}

      {!isLoadingRefunds && refunds.length === 0 && (
        <div className="text-center text-sm text-gray-200">
          Nenhuma despesa encontrada. Aproveite para adicionar uma despesa!
        </div>
      )}

      {!isLoadingRefunds && refunds.length > 0 && (
        <>
          <div className="flex flex-col gap-4">
            {refunds.map((refund) => (
              <RefundsTableItem key={refund.id} refund={refund} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-[.625rem]">
            <IconButton
              icon={<CaretLeftIcon />}
              size="sm"
              disabled={meta?.currentPage === 1}
              onClick={handlePreviousPage}
            />
            <span className="text-sm text-gray-200">
              {meta?.currentPage}/{meta?.lastPage}
            </span>
            <IconButton
              icon={<CaretRightIcon />}
              size="sm"
              disabled={meta?.currentPage === meta?.lastPage}
              onClick={handleNextPage}
            />
          </div>
        </>
      )}
    </div>
  );
}
