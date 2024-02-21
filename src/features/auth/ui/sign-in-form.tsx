import { UiTextField } from "@/shared/ui/ui-text-field";
import { useForm } from "react-hook-form";

import clsx from "clsx";
import { Button } from "flowbite-react";
import { useSignIn } from "../model/use-sign-in";


export function SignInForm({ className }: { className?: string }) {

  const { register, handleSubmit, formState } = useForm<{
    email: string;
    password: string;
  }>({
    defaultValues: {
      email: "",
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
          ...register("email"),
          type: "email",
          placeholder: "example@ex.com"
        }}
        error={formState.errors.email?.message}
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
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
