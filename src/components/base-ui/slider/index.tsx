import styles from "./styles.module.css";
import { useMemo, type ComponentProps } from "react";
import { Slider as SliderPrimitive } from "@base-ui/react/slider";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  thumbAlignment = "edge",
  ...props
}: Omit<ComponentProps<typeof SliderPrimitive.Root>, "className"> & {
  className?: string;
}) {
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
      thumbAlignment={thumbAlignment}
      className={`${styles.slider} ${className ?? ""}`.trim()}
      {...props}>
      <SliderPrimitive.Control
        data-slot="slider-control"
        className={styles["slider-control"]}>
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={styles["slider-track"]}>
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className={styles["slider-range"]}
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            index={index}
            className={styles["slider-thumb"]}
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export default Slider;
