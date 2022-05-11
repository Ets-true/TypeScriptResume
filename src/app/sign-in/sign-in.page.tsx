import React from 'react';
import { NavLink } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import { useSignInFormManager } from './sign-in.hooks';
import { SignUpRoute } from 'app/sign-up/sign-up.route';

interface SignUpProps {}

export function SignInPage(props: SignUpProps) {
  const { handleSubmit, initialValues, schema } = useSignInFormManager();

  return (
    <RowWrapper>
      <Col lg="5">
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
                      <Col>
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
                      <Col>
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
                      <Col>
                        <Button color="primary" type="submit">
                          Войти
                        </Button>
                      </Col>

                      <LinkCol>
                        <NavLink to={SignUpRoute.route}>
                          Зарегистрироваться
                        </NavLink>
                      </LinkCol>
                    </ActionsWrapper>
                  </Form>
                )}
              </Formik>
            </FormWrapper>
          </Card.Body>
        </StyledCard>
      </Col>
    </RowWrapper>
  );
}

const LinkCol = styled(Col)`
  ${tw`lg:text-right md:text-right sm:text-right`};
`;

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
