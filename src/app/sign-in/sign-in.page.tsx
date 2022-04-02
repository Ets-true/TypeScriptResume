import { useAppDispatch } from 'core/state/hooks';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { signInAction, SignInFormData } from './sign-in.slice';

interface SignUpProps {}

export function SignInPage(props: SignUpProps) {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<SignInFormData>({
    login: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(signInAction(formData));
  };

  return (
    <Wrapper data-testid="SignIn">
      <Title>Вход</Title>

      <FormWrapper>
        <form onSubmit={onSubmit}>
          <InputWrapper>
            <input
              placeholder="Login"
              name="login"
              value={formData.login}
              type="text"
              onChange={onChange}
            />
          </InputWrapper>

          <InputWrapper>
            <input
              placeholder="Password"
              name="password"
              value={formData.password}
              type="password"
              onChange={onChange}
            />
          </InputWrapper>

          <ActionsWrapper>
            <input type="submit" value="Отправить" />

            <NavLink to="/signup">Регистрация</NavLink>
          </ActionsWrapper>
        </form>
      </FormWrapper>
    </Wrapper>
  );
}
const ActionsWrapper = styled.div`
  ${tw`mt-2 flex justify-between items-center`};

  input {
    ${tw`p-2`};

    border: 1px solid #c6c6c6;
  }
`;

const InputWrapper = styled.div`
  ${tw`mt-2`};

  input {
    ${tw`p-2`};

    border: 1px solid #c6c6c6;
  }
`;

const FormWrapper = styled.div``;

const Title = styled.div``;

const Wrapper = styled.div`
  ${tw`flex flex-col justify-center items-center p-4`};
`;
