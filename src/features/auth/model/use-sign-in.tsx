import { useSession } from "@/entities/session";


import { useState } from "react";
import { useRouter } from "next/router";

export function useSignIn() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const setCurrentSession = useSession((s) => s.setCurrentSession);

  const signIn = (signInDto: any) => {
    // setCurrentSession({
    //   id: "123",
    //   userId: "123",
    //   name: "123",
    //   email: "123",
    //   avatarId: "123",
    //   role: "user"
    // })
    // setIsLoading(true);
    // api.signIn(signInDto)
    //   .then(async (session) => {
    //     setCurrentSession(await api.getSession());
    //
    //     return session;
    //   })
    //   .then(() => {
    //     router.push("/profile");
    //   })
    //   .catch(() => {
    //     setError("sign-in-error");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  return {
    isLoading,
    error,
    signIn
  };
}
