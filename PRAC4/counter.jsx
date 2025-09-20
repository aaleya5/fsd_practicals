import React, { useState } from 'react';

function Prac4() {
  const [count, setCount] = useState(0);

  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const incrementFive = () => {
    setCount(prevCount => prevCount + 5);
  };

  const reset = () => {
    setCount(0);
  };

  const double = () => {
    setCount(prevCount => prevCount * 2);
  };

  const halve = () => {
    setCount(prevCount => Math.floor(prevCount / 2));
  };

  return (
    <div>
      <div>
        <h1>
          Counter App
        </h1>

        <div>
          <p>{count}</p>
          <div>
            <button
              onClick={increment}
            >
              Increment
            </button>
            <button
              onClick={decrement}
            >
              Decrement
            </button>
            <button
              onClick={reset}
            >
              Reset
            </button>
            <button
              onClick={incrementFive}
            >
              Increment Five
            </button>
            <button
              onClick={double}
            >
              Double
            </button>
            <button
              onClick={halve}
            >
              Halve
            </button>
          </div>
        </div>

        <br /><br />

        <h1>Welcome to charusat</h1>

        <div>
          <div>
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label>Surname</label>
            <input
              type="text"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              placeholder="Enter surname"
            />
          </div>
        </div>

        <div>
          <h2>Full Name:</h2>
          <p>
            {firstName} {surName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Prac4;
