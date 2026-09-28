import Label from "@/components/base-ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/base-ui/radio-group";

<RadioGroup defaultValue="option-one">
  <div>
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div>
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>;
