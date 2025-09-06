import styles from "./styles.module.css";
import { useMemo, type ComponentProps } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
        ? defaultValue
        : [min, max],
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={`${styles.slider} ${className ?? ""}`.trim()}
      {...props}>
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={styles["slider-track"]}>
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={styles["slider-range"]}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className={styles["slider-thumb"]}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export default Slider;
