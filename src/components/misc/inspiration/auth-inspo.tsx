import AppleIcon from "@/assets/icons/apple";
import GoogleIcon from "@/assets/icons/google";
import LogoIcon from "@/assets/icons/logo";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import Separator from "@/components/ui/separator";

export default function AuthInspiration() {
  return (
    <div className="inspiration-box">
      <div className="info">
        <div className="icon">
          <LogoIcon />
        </div>
        <div className="content">
          <h3 className="title">Create an account</h3>
          <p className="description">
            Please enter your details to create an account.
          </p>
        </div>
      </div>
      <div className="advanced-option">
        <Button variant="outline">
          <GoogleIcon /> Continue with Google
        </Button>
        <Button variant="outline">
          <AppleIcon />
          Continue with Apple
        </Button>
      </div>
      <div className="or">
        <Separator /> OR <Separator />
      </div>
      <div className="field">
        <Label htmlFor="inspo-1">Email Address</Label>
        <Input type="email" placeholder="hello@gmail.com" id="inspo-1" />
      </div>
      <Button>Continue with Email</Button>
      <div className="login">
        Already have an account?
        <Button variant="link">Login</Button>
      </div>
    </div>
  );
}
