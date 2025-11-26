import type { Refund } from "@/models/refund";
import { RefundsTableItem } from "./refunds-table-item";
import { IconButton } from "@/components/icon-button";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

const REFUNDS_MOCK: Refund[] = [
  {
    title: "Almoço",
    category: "food",
    value: 50.8,
    receipt: "5c0d2fd6-95d6-4236-835f-dc4443b7d1",
  },
  {
    title: "Passagem",
    category: "transport",
    value: 100,
    receipt: "5c0d2fd6-95d6-4236-835f-dc443232d1",
  },
  {
    title: "Compra de teclado",
    category: "others",
    value: 99,
    receipt: "5c0d2fd6-95d6-4236-835f-dc4434b7d1",
  },
  {
    title: "Monte Verde",
    category: "hosting",
    value: 1765.98,
    receipt: "5c0d2fd6-95d6-4236-835f-dc44434b7d1",
  },
  {
    title: "Formatação computador",
    category: "services",
    value: 80.5,
    receipt: "5c0d2fd6-95d6-4236-835f-dc34347d1",
  },
];

export function RefundsTableList() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        {REFUNDS_MOCK.map((refund) => (
          <RefundsTableItem key={refund.receipt} refund={refund} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-[.625rem]">
        <IconButton icon={<CaretLeftIcon />} size="sm" />
        <span className="text-sm text-gray-200">1/3</span>
        <IconButton icon={<CaretRightIcon />} size="sm" />
      </div>
    </div>
  );
}
