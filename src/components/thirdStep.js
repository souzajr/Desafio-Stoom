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

const ThirdStep = () => {
  const history = useHistory();
  const [filling, setFilling] = useState(null);
  const [cookies, setCookie] = useCookies(['pizza']);

  useEffect(() => {
    cookies.pizza && cookies.pizza.filling
      ? setFilling(cookies.pizza.filling)
      : setFilling('Recheio tipo 1');
  }, []);

  function handleForm(e) {
    e.preventDefault();

    setCookie('pizza', { ...cookies.pizza, filling }, { path: '/' });

    history.push({
      pathname: '/confirmar',
      state: { recommended: false },
    });
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h1 className="text-center">Monte sua pizza - Recheio</h1>
          </Col>
          <Col md={{ size: 8, offset: 2 }}>
            <Form onSubmit={(e) => handleForm(e)}>
              <ListGroup className="mb-3">
                <ListGroupItem className="d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="mt-2">Escolha o tipo de recheio</h6>
                  </div>
                  <FormGroup>
                    <Input
                      type="select"
                      onChange={(e) => setFilling(e.target.value)}
                    >
                      {filling === 'Recheio tipo 1' ? (
                        <option selected>Recheio tipo 1</option>
                      ) : (
                        <option>Recheio tipo 1</option>
                      )}
                      {filling === 'Recheio tipo 2' ? (
                        <option selected>Recheio tipo 2</option>
                      ) : (
                        <option>Recheio tipo 2</option>
                      )}
                      {filling === 'Recheio tipo 3' ? (
                        <option selected>Recheio tipo 3</option>
                      ) : (
                        <option>Recheio tipo 3</option>
                      )}
                    </Input>
                  </FormGroup>
                </ListGroupItem>
              </ListGroup>
              <Button onClick={() => history.goBack()} type="button">Voltar</Button>
              <Button color="primary" type="submit" className="float-right">Verificar pedido</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThirdStep;
