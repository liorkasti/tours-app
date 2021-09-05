import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap'
import axios from "axios";

import useFetch from '../../hooks/useFetch';
import loader from '../../assets/loader.gif';
import './promotionsPage.css';

const baseURL = "https://api.eshet.com/LandingPage/GetPromotions?pathname=/organized";

const PromotionsPage = () => {

  const [loaded, data, getData, errorFetchMessage] = useFetch([]);

  useEffect(() => {
    getData();
    console.log('promotion: ', data);

  }, [])

  if (!loaded) {
    return <img src={loader} class="img-fluid" alt="Responsive image" />
  }

  return (
    <div className="intro-page-wrapper">
      <h1 className="title">טיולים מאורגנים</h1>
      <div className="container">
        <Row class="row">
          {loaded && data.map((item) =>
            <>
              <Col>
                <button variant="outline-secondary">
                  <img src={item.img} class="img-fluid" alt="Responsive image" />
                  <p loader="title">{item.title}</p>
                </button>
              </Col>
            </>
          )}
        </Row>
      </div>
    </div >
  );
};

export default PromotionsPage;
