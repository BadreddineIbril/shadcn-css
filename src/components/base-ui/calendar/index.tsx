import { useEffect, useRef, type ComponentProps } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker";
import Button from "@/components/base-ui/button";
import styles from "./styles.module.css";

const cx = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(" ");

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: ComponentProps<typeof DayPicker> & {
  buttonVariant?: ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cx(styles.calendar, className)}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cx(styles.root, defaultClassNames.root),
        months: cx(styles.months, defaultClassNames.months),
        month: cx(styles.month, defaultClassNames.month),
        nav: cx(styles.nav, defaultClassNames.nav),
        button_previous: cx(
          styles["nav-button"],
          defaultClassNames.button_previous
        ),
        button_next: cx(styles["nav-button"], defaultClassNames.button_next),
        month_caption: cx(
          styles["month-caption"],
          defaultClassNames.month_caption
        ),
        dropdowns: cx(styles.dropdowns, defaultClassNames.dropdowns),
        dropdown_root: cx(
          styles["dropdown-root"],
          defaultClassNames.dropdown_root
        ),
        dropdown: cx(styles.dropdown, defaultClassNames.dropdown),
        caption_label: cx(
          styles["caption-label"],
          captionLayout !== "label" && styles["caption-label-dropdown"],
          defaultClassNames.caption_label
        ),
        month_grid: cx(styles["month-grid"], defaultClassNames.month_grid),
        weekdays: cx(styles.weekdays, defaultClassNames.weekdays),
        weekday: cx(styles.weekday, defaultClassNames.weekday),
        week: cx(styles.week, defaultClassNames.week),
        week_number_header: cx(
          styles["week-number-header"],
          defaultClassNames.week_number_header
        ),
        week_number: cx(styles["week-number"], defaultClassNames.week_number),
        day: cx(
          styles.day,
          props.showWeekNumber && styles["day-with-week-number"],
          defaultClassNames.day
        ),
        range_start: cx(styles["range-start"], defaultClassNames.range_start),
        range_middle: cx(
          styles["range-middle"],
          defaultClassNames.range_middle
        ),
        range_end: cx(styles["range-end"], defaultClassNames.range_end),
        today: cx(styles.today, defaultClassNames.today),
        outside: cx(styles.outside, defaultClassNames.outside),
        disabled: cx(styles.disabled, defaultClassNames.disabled),
        hidden: cx(styles.hidden, defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => (
          <div
            data-slot="calendar"
            ref={rootRef}
            className={className}
            {...props}
          />
        ),
        Chevron: ({ className, orientation, ...props }) => {
          const Icon =
            orientation === "left"
              ? ChevronLeftIcon
              : orientation === "right"
                ? ChevronRightIcon
                : ChevronDownIcon;

          return <Icon className={cx(styles.chevron, className)} {...props} />;
        },
        PreviousMonthButton: (props) => (
          <Button variant={buttonVariant} size="icon" {...props} />
        ),
        NextMonthButton: (props) => (
          <Button variant={buttonVariant} size="icon" {...props} />
        ),
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => (
          <td {...props}>
            <div className={styles["week-number-cell"]}>{children}</div>
          </td>
        ),
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cx(styles["day-button"], defaultClassNames.day, className)}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
