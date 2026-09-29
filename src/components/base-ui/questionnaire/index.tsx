import type { ComponentProps } from "react";
import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";
import { CheckIcon } from "lucide-react";
import type Button from "@/components/base-ui/button";
import buttonStyles from "@/components/base-ui/button/styles.module.css";
import styles from "./styles.module.css";

type ButtonStyleProps = Pick<ComponentProps<typeof Button>, "size" | "variant">;

function Questionnaire({
  className,
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Root>) {
  return (
    <QuestionnairePrimitive.Root
      data-slot="questionnaire"
      className={`${styles.questionnaire} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function QuestionnaireProgress({
  className,
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Progress>) {
  return (
    <QuestionnairePrimitive.Progress
      data-slot="questionnaire-progress"
      className={`${styles["questionnaire-progress"]} ${
        className ?? ""
      }`.trim()}
      {...props}
    />
  );
}

function QuestionnaireItem({
  className,
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Item>) {
  return (
    <QuestionnairePrimitive.Item
      data-slot="questionnaire-item"
      className={`${styles["questionnaire-item"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function QuestionnaireTitle({
  className,
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Title>) {
  return (
    <QuestionnairePrimitive.Title
      data-slot="questionnaire-title"
      className={`${styles["questionnaire-title"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function QuestionnaireDescription({
  className,
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Description>) {
  return (
    <QuestionnairePrimitive.Description
      data-slot="questionnaire-description"
      className={`${styles["questionnaire-description"]} ${
        className ?? ""
      }`.trim()}
      {...props}
    />
  );
}

function QuestionnaireChoices({
  className,
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Choices>) {
  return (
    <QuestionnairePrimitive.Choices
      data-slot="questionnaire-choices"
      className={`${styles["questionnaire-choices"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function QuestionnaireChoice({
  children,
  className,
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Choice>) {
  return (
    <QuestionnairePrimitive.Choice
      data-slot="questionnaire-choice"
      className={`${styles["questionnaire-choice"]} ${className ?? ""}`.trim()}
      {...props}>
      <QuestionnairePrimitive.ChoiceInput
        data-slot="questionnaire-choice-input"
        className={styles["questionnaire-choice-input"]}
      />
      <span
        aria-hidden="true"
        data-slot="questionnaire-choice-indicator"
        className={styles["questionnaire-choice-indicator"]}>
        <span className={styles["questionnaire-choice-indicator-dot"]} />
        <CheckIcon className={styles["questionnaire-choice-indicator-check"]} />
      </span>
      <QuestionnairePrimitive.ChoiceLabel
        data-slot="questionnaire-choice-label"
        className={styles["questionnaire-choice-label"]}>
        {children}
      </QuestionnairePrimitive.ChoiceLabel>
      <QuestionnairePrimitive.ChoiceShortcut
        data-slot="questionnaire-choice-shortcut"
        className={styles["questionnaire-choice-shortcut"]}
      />
    </QuestionnairePrimitive.Choice>
  );
}

function QuestionnaireChoiceDescription({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      data-slot="questionnaire-choice-description"
      className={`${styles["questionnaire-choice-description"]} ${
        className ?? ""
      }`.trim()}
      {...props}
    />
  );
}

function QuestionnaireInput({
  className,
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Input>) {
  return (
    <div
      data-slot="questionnaire-input-wrapper"
      className={styles["questionnaire-input-wrapper"]}>
      <QuestionnairePrimitive.Input
        data-slot="questionnaire-input"
        className={`${styles["questionnaire-input"]} ${className ?? ""}`.trim()}
        {...props}
      />
    </div>
  );
}

function QuestionnaireError({
  className,
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Error>) {
  return (
    <QuestionnairePrimitive.Error
      data-slot="questionnaire-error"
      className={`${styles["questionnaire-error"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function QuestionnaireActions({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="questionnaire-actions"
      className={`${styles["questionnaire-actions"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

const navClassName = (slot: string, className?: string) =>
  `${buttonStyles.button} ${styles[slot]} ${className ?? ""}`.trim();

function QuestionnairePrevious({
  children,
  className,
  size = "md",
  variant = "outline",
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Previous> & ButtonStyleProps) {
  return (
    <QuestionnairePrimitive.Previous
      data-slot="questionnaire-previous"
      data-size={size}
      data-variant={variant}
      className={navClassName("questionnaire-previous", className)}
      {...props}>
      {children ?? "Previous"}
    </QuestionnairePrimitive.Previous>
  );
}

function QuestionnaireSkip({
  children,
  className,
  size = "md",
  variant = "outline",
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Skip> & ButtonStyleProps) {
  return (
    <QuestionnairePrimitive.Skip
      data-slot="questionnaire-skip"
      data-size={size}
      data-variant={variant}
      className={navClassName("questionnaire-skip", className)}
      {...props}>
      {children ?? "Skip"}
    </QuestionnairePrimitive.Skip>
  );
}

function QuestionnaireNext({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Next> & ButtonStyleProps) {
  return (
    <QuestionnairePrimitive.Next
      data-slot="questionnaire-next"
      data-size={size}
      data-variant={variant}
      className={navClassName("questionnaire-next", className)}
      {...props}>
      {children ?? "Next"}
    </QuestionnairePrimitive.Next>
  );
}

function QuestionnaireSubmit({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ComponentProps<typeof QuestionnairePrimitive.Submit> & ButtonStyleProps) {
  return (
    <QuestionnairePrimitive.Submit
      data-slot="questionnaire-submit"
      data-size={size}
      data-variant={variant}
      className={navClassName("questionnaire-submit", className)}
      {...props}>
      {children ?? "Submit"}
    </QuestionnairePrimitive.Submit>
  );
}

export {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
};
