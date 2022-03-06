import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  //Hooks
  // ---state
  // const [data, setData] = useState(null);
  const [rate, setRate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  // // --- side effects
  useEffect(() => {
    //fetching data
    axios
      .get(endpoint)
      .then((data) => {
        // setData(data.data);
        setRate(data.data.rates.USD);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.err);
        setIsLoading(false);
      });
  }, [endpoint]);

  return { rate, isLoading, error };

  //
};
export default useFetch;
