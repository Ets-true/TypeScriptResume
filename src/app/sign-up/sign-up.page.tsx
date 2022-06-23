import React from 'react';
import { NavLink } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

import { ErrorMessage, Field, Formik, Form } from 'formik';
import { SignInRoute } from 'app/sign-in/sign-in.route';
import { useSignUpFormManager } from './sign-up.hooks';
import { RainbowButton } from 'core/ui/components/rainbow-button';

interface SignUpProps {}

export function SignUpPage(props: SignUpProps) {
  const { handleSubmit, initialValues, schema } = useSignUpFormManager();

  return (
    <Wrapper data-testid="SignUp">
      <Title>Вход</Title>

      <FormWrapper>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={schema}
        >
          {() => {
            return (
              <Form>
                <label>
                  Email: <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label>
                  Password:
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </label>

                <ActionsWrapper>
                  <RainbowButton type="submit">
                    Зарегистрироваться
                  </RainbowButton>
                  <NavLink to={SignInRoute.route}>Войти</NavLink>
                </ActionsWrapper>
              </Form>
            );
          }}
        </Formik>
      </FormWrapper>
    </Wrapper>
  );
}

const ActionsWrapper = styled.div`
  ${tw`flex justify-between items-center mt-4`}
`;

const FormWrapper = styled.div`
  form {
    ${tw`flex flex-col`}

    label {
      ${tw`my-2`}

      div {
        ${tw`text-red-300`};
      }
    }

    input {
      ${tw`w-full`}
    }
  }
`;

const Title = styled.span``;

const Wrapper = styled.div`
  ${tw`flex flex-col m-auto `};
  width: 500px;
`;
