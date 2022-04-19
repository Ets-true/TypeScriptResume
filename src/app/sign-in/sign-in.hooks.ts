import * as yup from 'yup';
import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'core/state/hooks';
import { HomeRoute } from 'app/home';

import { signInAction, SignInFormData } from 'app/sign-in/sign-in.slice';
import { selectUser } from 'app/app.selectors';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required(),
});

export function useSignInFormManager() {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const state = location.state as any;
  let from = state?.from?.pathname || HomeRoute.route;

  const handleSubmit = useCallback((formData: SignInFormData) => {
    dispatch(signInAction(formData));
  }, []);

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

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
