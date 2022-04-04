import { useCallback } from 'react';
import * as yup from 'yup';

import { useAppDispatch } from 'core/state/hooks';
import {
  signInAction,
  SignInFormData,
} from 'app/unauth-app/sign-in/sign-in.slice';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required(),
});

export function useSignInFormManager() {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback((formData: SignInFormData) => {
    dispatch(signInAction(formData));
  }, []);

  const initialValues: SignInFormData = {
    login: '',
    password: '',
  };

  return {
    handleSubmit,
    initialValues,
    schema,
  };
}
