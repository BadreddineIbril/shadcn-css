import styles from "./styles.module.css";
import type { ComponentProps } from "react";
import { OTPField as OTPFieldPrimitive } from "@base-ui/react/otp-field";
import { MinusIcon } from "lucide-react";

type WithClassName<T> = Omit<T, "className"> & { className?: string };

function InputOTP({
  className,
  ...props
}: WithClassName<ComponentProps<typeof OTPFieldPrimitive.Root>>) {
  return (
    <OTPFieldPrimitive.Root
      data-slot="input-otp"
      className={`${styles["input-otp"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={`${styles["input-otp-group"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function InputOTPSlot({
  className,
  ...props
}: WithClassName<ComponentProps<typeof OTPFieldPrimitive.Input>>) {
  return (
    <OTPFieldPrimitive.Input
      data-slot="input-otp-slot"
      className={`${styles["input-otp-slot"]} ${className ?? ""}`.trim()}
      {...props}
    />
  );
}

function InputOTPSeparator({
  ...props
}: ComponentProps<typeof OTPFieldPrimitive.Separator>) {
  return (
    <OTPFieldPrimitive.Separator data-slot="input-otp-separator" {...props}>
      <MinusIcon />
    </OTPFieldPrimitive.Separator>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
