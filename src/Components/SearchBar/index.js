import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

import Input from '../Input';
import './index.css';

const Header = () => {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <div class="container-fluid">
      <Input />
    </div>
  );
};

export default Header;
