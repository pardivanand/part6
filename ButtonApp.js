import React, { useState } from 'react';

function ButtonApp() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
    console.log('Button clicked', counter);

};
  return (
    <div>
      {counter}
      <button onClick={handleClick}>AddToCart</button>
    </div>
  );
}

export default ButtonApp;