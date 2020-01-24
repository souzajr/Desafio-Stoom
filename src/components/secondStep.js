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

const SecondStep = () => {
  const history = useHistory();
  const [size, setSize] = useState(null);
  const [cookies, setCookie] = useCookies(['pizza']);

  useEffect(() => {
    cookies.pizza && cookies.pizza.size
      ? setSize(cookies.pizza.size)
      : setSize('Tamanho tipo 1');
  }, []);

  function handleForm(e) {
    e.preventDefault();

    setCookie('pizza', { ...cookies.pizza, size }, { path: '/' });

    history.push('/terceiro-passo');
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h1 className="text-center">Monte sua pizza - Tamanho</h1>
          </Col>
          <Col md={{ size: 8, offset: 2 }}>
            <Form onSubmit={(e) => handleForm(e)}>
              <ListGroup className="mb-3">
                <ListGroupItem className="d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="mt-2">Escolha o tipo de tamanho</h6>
                  </div>
                  <FormGroup>
                    <Input
                      type="select"
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {size === 'Tamanho tipo 1' ? (
                        <option selected>Tamanho tipo 1</option>
                      ) : (
                        <option>Tamanho tipo 1</option>
                      )}
                      {size === 'Tamanho tipo 2' ? (
                        <option selected>Tamanho tipo 2</option>
                      ) : (
                        <option>Tamanho tipo 2</option>
                      )}
                      {size === 'Tamanho tipo 3' ? (
                        <option selected>Tamanho tipo 3</option>
                      ) : (
                        <option>Tamanho tipo 3</option>
                      )}
                    </Input>
                  </FormGroup>
                </ListGroupItem>
              </ListGroup>
              <Button onClick={() => history.goBack()} type="button">Voltar</Button>
              <Button color="primary" type="submit" className="float-right">Ir para o terceiro passo</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SecondStep;
