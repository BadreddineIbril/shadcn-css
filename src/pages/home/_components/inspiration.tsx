import AuthInspiration from "@/components/misc/inspiration/auth-inspo";
import SliderInspiration from "@/components/misc/inspiration/slider-inspo";
import TooltipInspiration from "@/components/misc/inspiration/tooltip-inspo";

export default function Inspiration() {
  return (
    <section className="inspiration">
      <div className="head">
        <h3 className="heading">Inspiration</h3>
        <p className="subheading">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
          minima!
        </p>
      </div>
      <div className="cards">
        <AuthInspiration />
        <SliderInspiration />
        <TooltipInspiration />
      </div>
    </section>
  );
}
