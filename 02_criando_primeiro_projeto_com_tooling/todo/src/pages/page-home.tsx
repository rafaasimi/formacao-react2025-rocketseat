import { Container } from "../components/container";
import { TasksSummary } from "../core-components/tasks-summary";

export function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between gap-2">
        <TasksSummary />
      </header>
    </Container>
  );
}
