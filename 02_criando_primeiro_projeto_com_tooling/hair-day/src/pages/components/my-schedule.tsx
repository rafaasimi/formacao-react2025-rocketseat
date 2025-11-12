import { Paragraph } from "@/components/paragraph";
import { SelectDate } from "@/components/selectDate";
import { Title } from "@/components/title";

export function MySchedule() {
  return (
    <section className="px-28 py-10 space-y-8">
      <header className="flex items-start gap-3">
        <div className="flex-1 space-y-1">
          <Title size="lg">Sua agenda</Title>
          <Paragraph size="sm" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Paragraph>
        </div>
        <div className="min-w-56">
          <SelectDate value={new Date()}/>
        </div>
      </header>

      <main>
        
      </main>
    </section>
  );
}
