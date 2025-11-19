import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarBlankIcon, CaretDownIcon } from "@phosphor-icons/react";
import { Calendar } from "../ui/calendar";
import { ptBR } from "react-day-picker/locale";

export interface SelectDateProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}

export function SelectDate({ value, onChange }: SelectDateProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(value);

  React.useEffect(() => {
    setDate(value);
  }, [value]);

  function handleSelect(newDate: Date | undefined) {
    setDate(newDate);
    if (onChange) {
      onChange(newDate);
    }
    setOpen(false);
  }

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id="date"
            className="h-12 px-3 py-3.5 rounded-md border border-gray-500 flex items-center justify-between"
            type="button"
          >
            <div className="flex items-center gap-2">
              <CalendarBlankIcon size={16} className="text-yellow" />
              {date ? date.toLocaleDateString() : "Selecione uma data"}
            </div>
            <CaretDownIcon />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={handleSelect}
            locale={ptBR}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
