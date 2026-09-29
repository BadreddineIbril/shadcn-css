import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar mode="single" selected={date} onSelect={setDate} />;
