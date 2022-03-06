import React, { useEffect, useState } from 'react';

// Variables
let resultFirst = Number;
let resultSecond = Number;
let resultThird = Number;
let result = Number;
let guess = Number;

// Origin prices from reklama website
const firstPrice = 500;
const secondPrice = 1000;
const thirdPrice = 1500;

// For pasting prices
let guessTerminal = prompt('Paste price: ');

const PricePage = () => {
  // State
  const [rate, setRate] = useState('');
  // Side effects
  useEffect(() => {
    const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_API_KEY}`;
    // Async - Await fetch
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // Set state value from async fetch
        setRate(data.rates.USD);
        // Error handling **must thing after package releases
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  // To fixed Number function
  function expoNumbers(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  // Content Component
  return (
    <>
      <div className='hero'>
        <div>
          USD rate *from API: <b>{rate} USD instead To EUR</b>
        </div>
        <ul>
          <p> Converted prices *from euros:</p>
          <li>
            <b>500 EUR = {(resultFirst = rate * firstPrice).toFixed(2)} USD</b>
          </li>
          <li>
            <b>
              1000 EUR = {(resultSecond = rate * secondPrice).toFixed(2)} USD
            </b>
          </li>
          <li>
            <b>1500 EUR = {(resultThird = rate * thirdPrice).toFixed(2)} USD</b>
          </li>
        </ul>
        {expoNumbers(guessTerminal * rate) + ' USD'}
      </div>
      {/* / DEV T.E.S.T.I.N.G. TERMINAL / */}

      {/* {console.log(
        expoNumbers(resultFirst) +
          ' USD\n' +
          expoNumbers(resultSecond) +
          ' USD\n' +
          expoNumbers(resultThird) +
          ' USD\n'
      )} */}

      {/* /// Prompt terminal box action */}

      {console.log(
        'Conversion result: ',
        expoNumbers(guessTerminal * rate),
        'USD'
      )}
    </>
  );
};

export default PricePage;
