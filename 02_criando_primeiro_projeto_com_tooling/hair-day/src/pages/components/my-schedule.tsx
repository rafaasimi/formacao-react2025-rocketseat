import { Paragraph } from "@/components/paragraph";
import { SelectDate } from "@/components/selectDate";
import { TableHour } from "@/components/tableHour";
import { Title } from "@/components/title";

export function MySchedule() {
  return (
    <section className="md:px-28 md:py-10 space-y-8">
      <header className="flex items-start gap-3 flex-col sm:flex-row">
        <div className="flex-1 space-y-1">
          <Title size="lg">Sua agenda</Title>
          <Paragraph size="sm" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Paragraph>
        </div>
        <div className="min-w-56">
          <SelectDate value={new Date()} />
        </div>
      </header>

      <main className="space-y-3">
        <TableHour period="morning" availableInterval={[9,12]}/>
        <TableHour period="afternoon" availableInterval={[13,18]}/>
        <TableHour period="night" availableInterval={[19,21]}/>
      </main>
    </section>
  );
}
