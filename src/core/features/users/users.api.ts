import { SignUpFromData } from 'app/unauth-app/sign-up/sign-up.slice';
import { SignInFormData } from 'app/unauth-app/sign-in/sign-in.slice';

import api from 'core/services/api.service';
import {
  SignInResponse,
  SignUpResponse,
  CheckAuthResponse,
} from './users.constants';

export enum UsersRoutesEnum {
  signUp = '/api/users/signup',
  signIn = '/api/users/signin',
  checkAuth = '/api/users/checkauth',
}

export async function checkAuth() {
  return await api.get<CheckAuthResponse>(UsersRoutesEnum.checkAuth);
}

export async function submitSignUp(data: SignUpFromData) {
  return await api.post<SignUpResponse>(UsersRoutesEnum.signUp, data);
}

export async function submitSignIn(data: SignInFormData) {
  return await api.post<SignInResponse>(UsersRoutesEnum.signIn, data);
}
