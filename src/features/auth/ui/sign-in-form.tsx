import { UiTextField } from "@/shared/ui/ui-text-field";
import { useForm } from "react-hook-form";

import clsx from "clsx";
import { Button } from "flowbite-react";
import { useSignIn } from "../model/use-sign-in";
import { UiLink } from "@/shared/ui/ui-link";
import { ROUTES } from "@/shared/constants";


export function SignInForm({ className }: { className?: string }) {

  const { register, handleSubmit, formState } = useForm<{
    userName: string;
    password: string;
  }>({
    defaultValues: {
      userName: "",
      password: ""
    }
  });

  const { signIn, isLoading, error } = useSignIn();

  const handleSubmitSignIn = handleSubmit((data) => {
    signIn(data);
  });

  return (
    <form
      className={clsx(className, "flex flex-col gap-4")}
      onSubmit={handleSubmitSignIn}
    >
      <UiTextField
        label="Email"
        inputProps={{
          ...register("userName"),
          type: "string",
          placeholder: "username"
        }}
        error={formState.errors.userName?.message}
      />
      <UiTextField
        label={"password"}
        inputProps={{
          ...register("password"),
          type: "password",
          placeholder: "****"
        }}
        error={formState.errors.password?.message}
      />
      <Button type="submit" isProcessing={isLoading}>
        Sign in
      </Button>
      <UiLink className="!block" href={ROUTES.SIGN_UP}>Sign Up</UiLink>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
