import { useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MinusIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import Button from "@/components/base-ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/base-ui/button-group";
import Input from "@/components/base-ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/base-ui/select";
import Label from "@/components/base-ui/label";

const CURRENCIES = [
  {
    value: "$",
    label: "US Dollar",
  },
  {
    value: "€",
    label: "Euro",
  },
  {
    value: "£",
    label: "British Pound",
  },
];

export default function ButtonGroupDemo() {
  const [currency, setCurrency] = useState("$");

  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <ButtonGroup>
        <ButtonGroup style={{ overflow: "hidden" }}>
          <Button variant="outline" size="icon" aria-label="Go Back">
            <ArrowLeftIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Archive</Button>
          <Button variant="outline">Report</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Snooze</Button>
          <Button variant="outline">
            <MoreHorizontalIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="Media controls"
        style={{ height: "fit-content" }}>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon">
          <MinusIcon />
        </Button>
      </ButtonGroup>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "24px",
        }}>
        <ButtonGroup>
          <Button variant="outline" size="sm">
            Small
          </Button>
          <Button variant="outline" size="sm">
            Button
          </Button>
          <Button variant="outline" size="sm">
            Group
          </Button>
          <Button variant="outline" size="icon-sm">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Default</Button>
          <Button variant="outline">Button</Button>
          <Button variant="outline">Group</Button>
          <Button variant="outline" size="icon">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="lg">
            Large
          </Button>
          <Button variant="outline" size="lg">
            Button
          </Button>
          <Button variant="outline" size="lg">
            Group
          </Button>
          <Button variant="outline" size="icon-lg">
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </div>
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            4
          </Button>
          <Button variant="outline" size="sm">
            5
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="icon-sm" aria-label="Previous">
            <ArrowLeftIcon />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Next">
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary" size="sm">
          Copy
        </Button>
        <ButtonGroupSeparator />
        <Button variant="secondary" size="sm">
          Paste
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">Button</Button>
        <ButtonGroupSeparator />
        <Button size="icon" variant="secondary">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Input placeholder="Search..." />
        <Button variant="outline" aria-label="Search">
          <SearchIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText render={<Label htmlFor="name" />}>
          Text
        </ButtonGroupText>
        <Input placeholder="Type something here..." id="name" />
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroup>
          <Select
            value={currency}
            onValueChange={(value) => value && setCurrency(value)}>
            <SelectTrigger>{currency}</SelectTrigger>
            <SelectContent>
              {CURRENCIES.map((currency) => (
                <SelectItem key={currency.value} value={currency.value}>
                  {currency.value} <span>{currency.label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input placeholder="10.00" pattern="[0-9]*" />
        </ButtonGroup>
        <ButtonGroup>
          <Button aria-label="Send" size="icon" variant="outline">
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  );
}
