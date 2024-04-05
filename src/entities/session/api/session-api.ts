import { BodyType, createInstance } from "@/shared/api/api-instance";
import { Session, SignInDto } from "../model/types";
import { AxiosRequestConfig } from "axios";

export const signIn = (
  signInDto: BodyType<SignInDto>,
  options?: AxiosRequestConfig
) => {
  return createInstance<Session>(
    {
      url: `/session/sign-in`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: signInDto
    },
    options
  );
};
