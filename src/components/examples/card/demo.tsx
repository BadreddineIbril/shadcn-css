import Button from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";

export default function CardDemo() {
  return (
    <Card style={{ width: "100%" }}>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "grid", gap: "8px" }}>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div style={{ display: "grid", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  style={{
                    marginInlineStart: "auto",
                    display: "inline-block",
                    fontSize: "14px",
                  }}>
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter style={{ flexDirection: "column", gap: "8px" }}>
        <Button type="submit" style={{ width: "100%" }}>
          Login
        </Button>
        <Button variant="outline" style={{ width: "100%" }}>
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
