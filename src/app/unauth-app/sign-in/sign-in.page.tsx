import React from 'react';
import { NavLink } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import { useSignInFormManager } from './sign-in.hooks';
import { SignUpPage } from '../sign-up/sign-up.page';

interface SignUpProps {}

export function SignInPage(props: SignUpProps) {
  const { handleSubmit, initialValues, schema } = useSignInFormManager();

  return (
    <StyledCard data-testid="SignIn">
      <Card.Header>Вход</Card.Header>

      <Card.Body>
        <FormWrapper>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={schema}
          >
            {({ handleSubmit, values, errors, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <RowWrapper>
                  <Col lg="4">
                    <Form.Group controlId="validationFormikUsername">
                      <Form.Label>Логин</Form.Label>

                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>

                        <Form.Control
                          type="text"
                          placeholder="login"
                          name="login"
                          value={values.login}
                          onChange={handleChange}
                          isInvalid={!!errors.login}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.login}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </RowWrapper>

                <RowWrapper className="mt-3">
                  <Col lg="4">
                    <Form.Group controlId="validationCustom03">
                      <Form.Label>Пароль</Form.Label>

                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={values.login}
                        onChange={handleChange}
                        isInvalid={!!errors.login}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </RowWrapper>

                <ActionsWrapper>
                  <Col lg="2">
                    <Button type="submit">Войти</Button>
                  </Col>

                  <Col lg="2" className="text-right">
                    <NavLink to={SignUpPage.route}>Зарегестрироваться</NavLink>
                  </Col>
                </ActionsWrapper>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </Card.Body>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  ${tw`mt-10`};
`;

const RowWrapper = styled(Row)`
  ${tw`justify-center`};
`;

const ActionsWrapper = styled(Row)`
  ${tw`!mt-3 items-center justify-center`};
`;

const FormWrapper = styled.div``;
