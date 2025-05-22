import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function navComponent() {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton forceRedirectUrl={"/api/validate-session"}>Login</SignInButton> 
        <p>or</p>
        <SignUpButton forceRedirectUrl={"/api/validate-session"}/>
      </SignedOut>
    </>
  );
}
