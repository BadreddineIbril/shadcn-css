import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/base-ui/questionnaire";

<Questionnaire>
  <QuestionnaireItem name="plan" required>
    <QuestionnaireTitle>Which plan fits you best?</QuestionnaireTitle>
    <QuestionnaireChoices>
      <QuestionnaireChoice value="free">Free</QuestionnaireChoice>
      <QuestionnaireChoice value="pro">Pro</QuestionnaireChoice>
    </QuestionnaireChoices>
  </QuestionnaireItem>
  <QuestionnaireActions>
    <QuestionnairePrevious />
    <QuestionnaireNext />
    <QuestionnaireSubmit />
  </QuestionnaireActions>
</Questionnaire>;
