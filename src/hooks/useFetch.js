import { useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setProducts } from "../redux/actions/actions";

const baseURL = "https://api.eshet.com/LandingPage/GetPromotions?pathname=/organized";

export default function useFetch() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [errorFetchMessage, setErrorFetchMessage] = useState('');
  const dispatch = useDispatch();

  const getData = async () => {
    const result = [];

    await axios.get(baseURL)
      .then(data => {
        const response = data.data[0].Promotions;
        response.forEach((promotion, i) => {
          result.push({
            index: i,
            id: promotion.Id,
            title: promotion.Title,
            img: promotion.Img.replaceAll("{0}", "Maximal")
          })
        })
        dispatch(setProducts(result));
        setLoaded(true)
        setData(result);
      })
      .catch(function () {
        console.log("JSON loading attempt has failed!");
        setErrorFetchMessage('Something went wrong');
      });
  }
  return [loaded, data, getData, errorFetchMessage];
}