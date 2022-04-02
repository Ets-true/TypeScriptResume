export interface User {
  login: string;
}

export interface SignUpResponse {
  user: User;
  token: string;
}

export interface SignInResponse {
  user: User;
  token: string;
}

export interface CheckAuthResponse {
  user: User;
}
