import React, { useEffect, useState } from 'react';
import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
// import api from '../services/api'
import mock from '../services/mock/pizza-backend';


const Index = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [hasProduct, setHasProduct] = useState('');
  const [buyProduct, setBuyProduct] = useState('');
  const [cookies, setCookie] = useCookies(['pizza']);
  // const [data, setData] = useState(null);

  useEffect(() => {
    /*
      async function getData() {
        const data = await api.get('/dados-das-pizzas');
        setData(data);
      };

      getData();
    */

    const checkProps = props.location;

    if (checkProps.state) {
      if (checkProps.state === 'Sem produto') setHasProduct(props.location.state);
      if (checkProps.state.buy) setBuyProduct(checkProps.state.type);
    }

    setLoading(true);
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h1 className="text-center">Desafio Stoom</h1>
          </Col>
          {mock.map((pizza) => (
            <>
              {pizza.recommended ? (
                <Col key={pizza.id} md={{ size: 4, offset: 2 }}>
                  <Card>
                    <CardImg top src={pizza.img_url} />
                    <CardBody>
                      <CardTitle>{pizza.name}</CardTitle>
                      <CardText>{pizza.description}</CardText>
                      <Button
                        color="primary"
                        onClick={() => {
                          setCookie('pizza', null, { path: '/' });

                          history.push({
                            pathname: '/confirmar',
                            state: { recommended: true },
                          });
                        }}
                      >
                      Selecionar
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              ) : (
                <Col key={pizza.id} md="4">
                  <Card>
                    <CardImg top src={pizza.img_url} />
                    <CardBody>
                      <CardTitle>{pizza.name}</CardTitle>
                      <CardText>{pizza.description}</CardText>
                      <Button
                        color="primary"
                        onClick={() => history.push('/primeiro-passo')}
                      >
                        Selecionar
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              )}
            </>
          ))}
          {loading && buyProduct ? (
            <Col className="mt-3" md={{ size: 8, offset: 2 }}>
              <div className="alert alert-success" role="alert">
                Você comprou a pizza
                {' '}
                {buyProduct === 'normal'
                  ? `"${mock[1].name}"`
                  : `"${mock[0].name}" e ganhou ${mock[0].points} pontos`}
              </div>
            </Col>
          ) : null}
          {loading && hasProduct === 'Sem produto' ? (
            <Col className="mt-3" md={{ size: 8, offset: 2 }}>
              <div className="alert alert-danger" role="alert">
                Você deve selecionar um produto
              </div>
            </Col>
          ) : null}
        </Row>
      </Container>
    </>
  );
};

export default Index;
