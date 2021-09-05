import { useState } from 'react';
import axios from "axios";

const baseURL = "https://api.eshet.com/LandingPage/GetPromotions?pathname=/organized";

export default function useFetch() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [errorFetchMessage, setErrorFetchMessage] = useState('');

  const getData = () => {
    const result = [];

    axios.get(baseURL)
      .then(data => {
        const response = data.data[0].Promotions;
        response.forEach((promotion, i) => {
          // console.log('promotion: ', promotion);
          result.push({
            key: i,
            id: promotion.Id,
            title: promotion.Title,
            img: promotion.Img //TODO: .indexOf("{0}") >= 0 REPLACE BY "Maximal”"
          })
        })

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