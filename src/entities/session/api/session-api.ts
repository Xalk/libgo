import { BodyType, createInstance } from "@/shared/api/api-instance";
import { Session, SignInDto, TokensDto } from "../model/types";
import { AxiosRequestConfig } from "axios";

export const signIn = (signInDto: BodyType<SignInDto>, options?: AxiosRequestConfig) => {
  const formData = new URLSearchParams();
  formData.append("grant_type", "password");
  formData.append("client_id", "userweb");
  formData.append("username", signInDto.userName);
  formData.append("password", signInDto.password);

  return createInstance<TokensDto>(
    {
      url: `https://localhost:7002/connect/token`,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      withCredentials: true,
      data: formData,
    },
    options,
  );
};

export const getSession = (options?: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  return createInstance<{ sub: string }>(
    {
      url: `https://localhost:7002/connect/userinfo`,
      method: "get",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    },
    options,
  );
};

export const getMe = (id: string, options?: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  return createInstance<Session>(
    {
      url: `https://localhost:7015/api/v1/Users/private/${id}`,
      method: "get",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    },
    options,
  );
};
