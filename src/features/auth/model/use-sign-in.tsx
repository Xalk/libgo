import { useSession, api, SignInDto } from "@/entities/session";


import { useState } from "react";

import { useRouter } from "next/router";

export function useSignIn() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const setCurrentSession = useSession((s) => s.setCurrentSession);

  const signIn = (signInDto: SignInDto) => {
    setIsLoading(true);
    api.
      signIn(signInDto)
      .then(async (session) => {
        // setCurrentSession(await api.getSession());

        return session;
      })
      .then(() => {
        router.push("/profile");
      })
      .catch(() => {
        setError("sign-in-error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    error,
    signIn,
  };
}
