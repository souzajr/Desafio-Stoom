import React, { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const FirstStep = () => {
  const history = useHistory();
  const [dough, setDough] = useState(null);
  const [cookies, setCookie] = useCookies(['pizza']);

  useEffect(() => {
    cookies.pizza && cookies.pizza.dough
      ? setDough(cookies.pizza.dough)
      : setDough('Massa tipo 1');
  }, []);

  function handleForm(e) {
    e.preventDefault();

    setCookie('pizza', { dough }, { path: '/' });

    history.push('/segundo-passo');
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h1 className="text-center">Monte sua pizza - Massa</h1>
          </Col>
          <Col md={{ size: 8, offset: 2 }}>
            <Form onSubmit={(e) => handleForm(e)}>
              <ListGroup className="mb-3">
                <ListGroupItem className="d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="mt-2">Escolha o tipo de massa</h6>
                  </div>
                  <FormGroup>
                    <Input
                      type="select"
                      onChange={(e) => setDough(e.target.value)}
                    >
                      {dough === 'Massa tipo 1' ? (
                        <option selected>Massa tipo 1</option>
                      ) : (
                        <option>Massa tipo 1</option>
                      )}
                      {dough === 'Massa tipo 2' ? (
                        <option selected>Massa tipo 2</option>
                      ) : (
                        <option>Massa tipo 2</option>
                      )}
                      {dough === 'Massa tipo 3' ? (
                        <option selected>Massa tipo 3</option>
                      ) : (
                        <option>Massa tipo 3</option>
                      )}
                    </Input>
                  </FormGroup>
                </ListGroupItem>
              </ListGroup>
              <Button onClick={() => history.goBack()} type="button">Voltar</Button>
              <Button color="primary" type="submit" className="float-right">Ir para o segundo passo</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FirstStep;
