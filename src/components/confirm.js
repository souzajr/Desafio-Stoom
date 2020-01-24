import React, { useEffect, useState } from 'react';
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import mock from '../services/mock/pizza-backend';

const Confirm = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [recommended, setRecommended] = useState('');
  const [cookies] = useCookies(['pizza']);
  const [pizza, setPizza] = useState(mock[0]);

  useEffect(() => {
    if (props.location.state) setRecommended(props.location.state.recommended);

    if (cookies.pizza && cookies.pizza !== 'null') setPizza(cookies.pizza);

    setLoading(true);
  }, []);


  return (
    <>
      {loading ? (
        <>
          {typeof recommended === 'boolean' ? (
            <Container>
              <Row>
                <Col md={{ size: 8, offset: 2 }}>
                  <h1 className="text-center">Confirme seu pedido</h1>
                </Col>
                {recommended ? (
                  <>
                    <Col md={{ size: 8, offset: 2 }}>
                      <ListGroup className="mb-3">
                        {pizza.items.map((item) => (
                          <ListGroupItem
                            key={item.id}
                            className="d-flex justify-content-between lh-condensed"
                          >
                            <div>
                              <h6 className="mt-2">{item.name}</h6>
                            </div>
                            <span>{item.type}</span>
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                      <Button onClick={() => history.goBack()} type="button">Voltar</Button>
                      <Button
                        onClick={() => history.push({
                          pathname: '/',
                          state: { buy: true, type: 'recommended' },
                        })}
                        color="primary"
                        type="submit"
                        className="float-right"
                      >
                        Comprar
                      </Button>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col md={{ size: 8, offset: 2 }}>
                      <ListGroup className="mb-3">
                        <ListGroupItem
                          className="d-flex justify-content-between lh-condensed"
                        >
                          <div>
                            <h6 className="mt-2">Tipo de massa</h6>
                          </div>
                          <span>{pizza.dough}</span>
                        </ListGroupItem>
                        <ListGroupItem
                          className="d-flex justify-content-between lh-condensed"
                        >
                          <div>
                            <h6 className="mt-2">Tipo de tamanho</h6>
                          </div>
                          <span>{pizza.size}</span>
                        </ListGroupItem>
                        <ListGroupItem
                          className="d-flex justify-content-between lh-condensed"
                        >
                          <div>
                            <h6 className="mt-2">Tipo de recheio</h6>
                          </div>
                          <span>{pizza.filling}</span>
                        </ListGroupItem>
                      </ListGroup>
                      <Button onClick={() => history.goBack()} type="button">Voltar</Button>
                      <Button
                        onClick={() => history.push({
                          pathname: '/',
                          state: { buy: true, type: 'normal' },
                        })}
                        color="primary"
                        type="submit"
                        className="float-right"
                      >
                        Comprar
                      </Button>
                    </Col>
                  </>
                )}
              </Row>
            </Container>
          ) : history.push({
            pathname: '/',
            state: 'Sem produto',
          })}
        </>
      ) : 'Carregando...'}
    </>
  );
};

export default Confirm;
