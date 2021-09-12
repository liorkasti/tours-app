import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from "react-redux";

import useFetch from '../../hooks/useFetch';
import loader from '../../assets/loader.gif';
import './promotionsPage.css';

const PromotionsPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [loaded, data, getData, errorFetchMessage] = useFetch([]);
  useEffect(() => {
    getData();
  }, [])

  if (!loaded) {
    return <img src={loader} className="img-fluid" alt="Responsive image" />
  }

  const renderList = products.map((product) => {
    console.log(product);

    {/*TODO: offset 30px*/ }
    return (
      < Col md={3} sm={1} key={product.id}>
        <button variant="outline-secondary">
            <img src={product.img} className="img-fluid" alt="Responsive image" />
            <p className="title">{product.title}</p>
        </button>
      </Col >
    );
  });
  return (
    <div className="card-container">
      <h1>טיולים מאורגנים</h1>
      <Container>
        <Row>
          {renderList}
        </Row>
      </Container>
    </div >
  );
};

export default PromotionsPage;
