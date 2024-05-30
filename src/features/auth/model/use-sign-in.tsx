import { useSession, api, SignInDto } from "@/entities/session";


import { useState } from "react";

import { useRouter } from "next/router";
import { AxiosError } from "axios";

export function useSignIn() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const setCurrentSession = useSession((s) => s.setCurrentSession);

  const signIn = (signInDto: SignInDto) => {
    setIsLoading(true);
    api.signIn(signInDto, { withCredentials: true })
      .then(async (tokensDto) => {
        localStorage.setItem("token", tokensDto.access_token);

        const userInfo = await api.getSession();
        const session = await api.getMe(userInfo.sub);

        setCurrentSession({
          id: session.id,
          userName: session.userName,
          email: session.email,
          nickname: session.nickname,
          description: session.description,
          registerDate: session.registerDate,
          role: session.role
        });
        return session;
      })
      .then(() => {
        router.push("/profile");
      })
      .catch((e: AxiosError<{ error_description: string }>) => {
        console.log(e);
        setError(e.response?.data?.error_description || "Unknown error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    error,
    signIn
  };
}
