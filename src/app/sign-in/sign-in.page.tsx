import React from 'react';
import { NavLink } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useSignInFormManager } from './sign-in.hooks';
import { SignUpRoute } from 'app/sign-up/sign-up.route';
import { RainbowButton } from 'core/ui/components/rainbow-button';

interface SignUpProps {}

export function SignInPage(props: SignUpProps) {
  const { handleSubmit, initialValues, schema } = useSignInFormManager();

  return (
    <Wrapper data-testid="SignIn">
      <Title>Вход</Title>

      <FormWrapper>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={schema}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <label>
                  Email: <Field type="text" name="login" />
                  <ErrorMessage name="login" component="div" />
                </label>
                <label>
                  Password:
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </label>

                <ActionsWrapper>
                  <RainbowButton type="submit">Войти</RainbowButton>
                  <NavLink to={SignUpRoute.route}>Зарегистрироваться</NavLink>
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
  ${tw`flex flex-col m-auto`};
  width: 500px;
`;
