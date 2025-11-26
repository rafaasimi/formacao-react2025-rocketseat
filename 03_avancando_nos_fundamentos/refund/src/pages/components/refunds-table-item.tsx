import type { Refund } from "@/contexts/refunds/models/refund";
import {
  BedIcon,
  ForkKnifeIcon,
  PoliceCarIcon,
  ReceiptIcon,
  WrenchIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router";

const CATEGORIES = {
  food: {
    icon: <ForkKnifeIcon />,
    label: "Alimentos",
  },
  hosting: {
    icon: <BedIcon />,
    label: "Hospedagem",
  },
  transport: {
    icon: <PoliceCarIcon />,
    label: "Transporte",
  },
  services: {
    icon: <WrenchIcon />,
    label: "Serviços",
  },
  others: {
    icon: <ReceiptIcon />,
    label: "Outros",
  },
};

interface RefundTableItemProps {
  refund: Refund;
}

export function RefundsTableItem({ refund }: RefundTableItemProps) {
  return (
    <Link to={`reembolso/${refund.receipt}`} className="group">
      <div className="flex items-center gap-3 transition-[margin-left] duration-200 group-hover:ml-1.5">
        <div className="rounded-full bg-gray-400 p-2 text-[1.125rem] text-green-100">
          {CATEGORIES[refund.category].icon}
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="text-sm font-bold text-gray-100">{refund.title}</h3>
          <span className="text-xs font-normal text-gray-200">
            {CATEGORIES[refund.category].label}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-200">R$</span>
          <span className="text-sm font-semibold text-gray-100">
            {new Intl.NumberFormat("pt-BR", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(refund.value)}
          </span>
        </div>
      </div>
    </Link>
  );
}
