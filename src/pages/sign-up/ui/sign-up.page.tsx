import clsx from "clsx";
import { SignUpForm } from "@/features/auth";

export function SignUpPage() {

  return (
    <main className="grow flex flex-col py-24 ">
      <div
        className={clsx(
          "rounded-xl border border-slate-300 px-14 py-8 pb-14 w-full max-w-[400px] bg-white self-center shadow-lg",
          "dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-700/30",
        )}
      >
        <h1 className="text-2xl mb-6">Sign up</h1>
        <SignUpForm />
      </div>
    </main>
  );
}
