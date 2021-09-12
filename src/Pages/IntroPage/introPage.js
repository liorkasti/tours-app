import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import promoImage from '../../assets/promoImage.jpg';

import './introPage.css';

const IntroPage = () => {

  return (
    <div className="card-container">
      <h1>טיולים מאורגנים</h1>
      <Container>
        <Row>
          <Col sm={1} md={3} >
            <button variant="outline-secondary">
              <img src={promoImage} className="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
          <Col sm={1} md={3} >
            <button variant="outline-secondary">
              <img src={promoImage} className="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
          <Col sm={1} md={3} >
            <button variant="outline-secondary">
              <img src={promoImage} className="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
          <Col sm={1} md={3} >
            <button variant="outline-secondary">
              <img src={promoImage} className="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
        </Row>
        <Row>
          <Col sm={1} md={3} >
            <button variant="outline-secondary">
              <img src={promoImage} className="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
          <Col sm={1} md={3} >
            <button variant="outline-secondary">
              <img src={promoImage} className="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
          <Col sm={1} md={3} >
            <button variant="outline-secondary">
              <img src={promoImage} className="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
          <Col sm={1} md={3} >
            <button variant="outline-secondary">
              <img src={promoImage} className="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
        </Row>
      </Container>
    </div >
  );
};

export default IntroPage;
