import React, { useEffect } from 'react';

const FactorialAlert = () => {
  useEffect(() => {
    const factorial = (num) => {
      if (num === 0 || num === 1) {
        return 1;
      }
      return num * factorial(num - 1);
    };

    const result = factorial(6); // any number :)

    alert(`Factorial: ${result}`);
  }, []);

  return null;
};

export default FactorialAlert;