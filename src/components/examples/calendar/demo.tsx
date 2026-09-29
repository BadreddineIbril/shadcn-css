import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
      }}
    />
  );
}
