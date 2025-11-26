import logoImg from "@/assets/logo.png";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";
import { Link } from "react-router";

export function Header() {
  return (
    <header className="flex flex-col items-center justify-between gap-6 md:flex-row">
      <Link to="/">
        <img src={logoImg} alt="Refund" className="w-32 md:w-25" />
      </Link>

      <div className="flex items-center gap-4">
        <LinkButton to="/">Solicitações de reembolso</LinkButton>
        <LinkButton to="novo-reembolso">
          <Button>Nova solicitação</Button>
        </LinkButton>
      </div>
    </header>
  );
}
