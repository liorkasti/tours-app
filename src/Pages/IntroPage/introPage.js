import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import promoImage from '../../assets/promoImage.jpg';

import './introPage.css';

const IntroPage = () => {

  return (
    <div className="intro-page-wrapper">
      <h1 className="title">טיולים מאורגנים</h1>
      <div className="container">
        <Row class="row">
          <Col>
            <button variant="outline-secondary">
              <img src={promoImage} class="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
          <Col>
            <button variant="outline-secondary">
              <img src={promoImage} class="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
          <Col>
            <button variant="outline-secondary">
              <img src={promoImage} class="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
          <Col>
            <button variant="outline-secondary">
              <img src={promoImage} class="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
        </Row>
        <Row class="row">
          <Col>
            <button variant="outline-secondary">
              <img src={promoImage} class="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
          <Col>
            <button variant="outline-secondary">
              <img src={promoImage} class="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
          <Col>
            <button variant="outline-secondary">
              <img src={promoImage} class="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
          <Col>
            <button variant="outline-secondary">
              <img src={promoImage} class="img-fluid" alt="Responsive image" />
              <p className="title">ולנסיה וקוסטה בלנקה</p>
            </button>{' '}
          </Col>
        </Row>
      </div>
    </div >
  );
};

export default IntroPage;
