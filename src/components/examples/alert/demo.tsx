import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        alignItems: "start",
        gap: "16px",
      }}>
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
      <Alert>
        <PopcornIcon />
        <AlertTitle>
          This Alert has a title and an icon. No description.
        </AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul
            style={{
              listStylePosition: "inside",
              listStyleType: "disc",
              fontSize: "14px",
            }}>
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
