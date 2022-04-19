import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import tw, { styled } from 'twin.macro';

import { Formik } from 'formik';
import { SignInRoute } from 'app/sign-in/sign-in.route';
import { useSignUpFormManager } from './sign-up.hooks';

interface SignUpProps {}

export function SignUpPage(props: SignUpProps) {
  const { handleSubmit, initialValues, schema } = useSignUpFormManager();

  return (
    <StyledCard data-testid="SignUp">
      <Card.Header>Регистрация</Card.Header>

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
                  <Col lg="5">
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
                  <Col lg="5">
                    <Form.Group controlId="validationCustom03">
                      <Form.Label>Пароль</Form.Label>

                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </RowWrapper>

                <ActionsWrapper>
                  <Col lg="2">
                    <Button color="primary" type="submit">
                      Зарегестрироваться
                    </Button>
                  </Col>

                  <Col lg="3" className="text-right">
                    <NavLink to={SignInRoute.route}>Войти</NavLink>
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
