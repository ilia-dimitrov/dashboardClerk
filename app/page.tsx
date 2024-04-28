import LoggedIn from "@/components/LoggedIn";
import LoginPrompt from "@/components/LoginPrompt";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      {user ? <h1>Hi {user?.firstName}</h1> : <LoginPrompt />}
      {user ? <SignOutButton /> : <SignInButton />}

      {user && <LoggedIn />}
    </main>
  );
}
