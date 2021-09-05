import { PROMOTIONS } from './types';

export const fetchData = (data) => {
  return {
    type: PROMOTIONS,
    payload: {
      data
    },
  };
};