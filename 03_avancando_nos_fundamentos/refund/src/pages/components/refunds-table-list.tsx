import { RefundsTableItem } from "./refunds-table-item";
import { IconButton } from "@/components/icon-button";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useRefunds } from "@/contexts/refunds/hooks/use-refunds";

export function RefundsTableList() {
  const { refunds, meta, isLoadingRefunds } = useRefunds();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        {isLoadingRefunds && <div>Carregando...</div>}
        {!isLoadingRefunds &&
          refunds.length > 0 &&
          refunds.map((refund) => (
            <RefundsTableItem key={refund.id} refund={refund} />
          ))}
        {!isLoadingRefunds && refunds.length === 0 && (
          <div>Nenhuma despesa encontrada</div>
        )}
      </div>

      <div className="flex items-center justify-center gap-[.625rem]">
        <IconButton
          icon={<CaretLeftIcon />}
          size="sm"
          disabled={meta?.currentPage === 1}
        />
        <span className="text-sm text-gray-200">
          {meta?.currentPage}/{meta?.lastPage}
        </span>
        <IconButton
          icon={<CaretRightIcon />}
          size="sm"
          disabled={meta?.currentPage === meta?.lastPage}
        />
      </div>
    </div>
  );
}
