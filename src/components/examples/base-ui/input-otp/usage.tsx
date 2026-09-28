import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/base-ui/input-otp";

<InputOTP length={6}>
  <InputOTPGroup>
    <InputOTPSlot />
    <InputOTPSlot />
    <InputOTPSlot />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot />
    <InputOTPSlot />
    <InputOTPSlot />
  </InputOTPGroup>
</InputOTP>;
