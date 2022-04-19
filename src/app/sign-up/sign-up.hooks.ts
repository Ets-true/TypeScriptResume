import * as yup from 'yup';
import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'core/state/hooks';
import { HomeRoute } from 'app/home';

import { selectUser } from 'app/app.selectors';
import { postFormDataAction, SignUpFromData } from './sign-up.slice';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required(),
});

export function useSignUpFormManager() {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const state = location.state as any;
  let from = state?.from?.pathname || HomeRoute.route;

  const handleSubmit = useCallback((formData: SignUpFromData) => {
    dispatch(
      postFormDataAction({
        formData,
        navigate() {
          navigate(HomeRoute.route);
        },
      })
    );
  }, []);

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  const initialValues: SignUpFromData = {
    login: '',
    password: '',
  };

  return {
    handleSubmit,
    initialValues,
    schema,
  };
}
