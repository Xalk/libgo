// type Role = "admin" | "user";

export interface Session {
  nickname: string;
  email: string
}

export interface SignInDto {
  email: string;
  password: string;
}
export interface TokensDto {
  accessToken: string;
  refreshToken: string;
}

