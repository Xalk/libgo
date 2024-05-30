// type Role = "admin" | "user";

export interface Session {
  id: number;
  userName: string;
  email: string;
  nickname: string;
  description: string;
  registerDate: Date;
  "role": "User" | "Admin";
}

export interface SignInDto {
  userName: string;
  password: string;
}

export interface TokensDto {
  access_token: string
  expires_in: number
  token_type: string
  scope: string
}

