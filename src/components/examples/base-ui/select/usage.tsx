import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/base-ui/select";

const items = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

<Select items={items}>
  <SelectTrigger>
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>;
