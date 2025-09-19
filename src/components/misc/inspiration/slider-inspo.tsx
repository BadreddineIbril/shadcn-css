import { Alert, AlertDescription } from "@/components/ui/alert";
import Button from "@/components/ui/button";
import Slider from "@/components/ui/slider";
import { Info } from "lucide-react";
import { useState } from "react";

export default function SliderInspiration() {
  const [value, setValue] = useState([480]);

  return (
    <div className="slider-box">
      <div className="head">
        <h3 className="heading">Weekly Promotion</h3>
        <p className="subheading">
          Set your preferred level of weekly promotion notifications.
        </p>
      </div>
      <div className="core">
        <span className="label">WEEKLY PROMOTIONS</span>
        <span className="value">{value[0]}</span>
        <Slider value={value} max={1000} onValueChange={setValue} />
        <Alert>
          <Info />
          <AlertDescription>
            You are charged $122.50 to receive {value[0]} weekly promotions.
          </AlertDescription>
        </Alert>
      </div>
      <div className="footer">
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </div>
    </div>
  );
}
