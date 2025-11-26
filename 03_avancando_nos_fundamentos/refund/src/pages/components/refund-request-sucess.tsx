import { Button } from "@/components/button";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

export function RefundRequestSucess() {
  return (
    <div className="mx-auto max-w-lg space-y-10 rounded-2xl bg-gray-500 p-10">
      <div className="flex flex-col items-center space-y-3 text-center">
        <h1 className="text-2xl font-bold text-green-100">
          Solicitação enviada!
        </h1>

        <CheckCircleIcon className="text-[6.875rem] text-green-100" />

        <p className="text-sm text-gray-200">
          Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o
          setor financeiro irá entrar em contato com você.
        </p>
      </div>

      <Link to="/novo-reembolso">
        <Button className="w-full">Nova solicitação</Button>
      </Link>
    </div>
  );
}
