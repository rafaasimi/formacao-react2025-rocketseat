import { z } from "zod";

export const scheduleNewFormSchema = z.object({
  id: z.uuid(),
  name: z
    .string()
    .min(3, { message: "O nome precisa ter no mínimo 3 caracteres." })
    .max(255, { message: "O nome pode ter no máximo 255 caracteres." }),
  date: z.date().refine(
    (date) => {
      const now = new Date();
      const selectedDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      return selectedDate >= today;
    },
    {
      message: "Precisa ser uma data de hoje ou futura.",
    }
  ),
  time: z.string().min(1, {
    message: "É necessário informar um horário para o agendamento.",
  }),
});

export type ScheduleNewFormSchema = z.infer<typeof scheduleNewFormSchema>;
