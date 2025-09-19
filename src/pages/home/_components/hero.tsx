import Button from "@/components/ui/button";
import TailwindCss from "@/assets/images/zommer-wojak.png";
import CssModules from "@/assets/images/chad-wojak.png";
import SwitchDemo from "@/components/examples/switch/demo";
import ToggleGroupDemo from "@/components/examples/toggle-group/demo";
import RadioGroupDemo from "@/components/examples/radio-group/demo";
import DrawerDemo from "@/components/examples/drawer/demo";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-box">
        <h1 className="title">Build your Component Library</h1>
        <p className="description">
          Beautifully designed components that you can copy and paste into your
          apps. <br /> Made with{" "}
          <small className="css-modules">
            <img src={CssModules} alt="css-modules" />
            CSS Modules
          </small>{" "}
          instead{" "}
          <small className="tailwind">
            <img src={TailwindCss} alt="tailwind" /> Tailwind CSS
          </small>
          . Open source.
        </p>
        <div className="actions">
          <Button asChild>
            <Link to="/docs/components/accordion">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/docs/components">View Components</Link>
          </Button>
        </div>
      </div>
      <div className="playground-box">
        <div className="demo">
          <DrawerDemo />
        </div>
        <div className="demo">
          <SwitchDemo />
        </div>
        <div className="demo">
          <RadioGroupDemo />
        </div>
        <div className="demo">
          <ToggleGroupDemo />
        </div>
      </div>
    </section>
  );
}
