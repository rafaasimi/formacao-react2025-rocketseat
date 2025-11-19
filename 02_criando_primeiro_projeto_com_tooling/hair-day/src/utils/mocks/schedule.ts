export interface Schedule {
  id: string;
  name: string;
  date: Date;
  time: string;
}

export const SCHEDULE: Schedule[] = [
  {
    id: crypto.randomUUID().toString(),
    name: "Rafael Simionato",
    date: new Date(),
    time: "09:00",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "João Silva",
    date: new Date(),
    time: "10:00",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "Amanda Oliveira",
    date: new Date(),
    time: "11:00",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "Patrícia Souza",
    date: new Date(),
    time: "14:00",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "Fernanda dos Santos",
    date: new Date(),
    time: "16:00",
  },
  {
    id: crypto.randomUUID().toString(),
    name: "Luiz Fernando",
    date: new Date(),
    time: "19:00",
  },
];
