import { useState } from 'react';
import Button from './Button';
import style from '../css/Counter.module.css';
let countId;

function Counter() {
  const [counterStarted, setCounterStarted] = useState(false);
  let [count, setCount] = useState(0);

  const startCounter = () => {
    if (counterStarted) {
      setCounterStarted(false);
      setCount(0);
      clearInterval(countId);

      return;
    } else {
      setCounterStarted(true);
      countId = setInterval(() => {
        setCount(count++);
      }, 1000);
    }
  };

  return (
    <div className={`${style.content}`}>
      <p>{count}</p>
      <Button changeAction={startCounter}>
        {counterStarted ? 'Stop' : 'Start'}
      </Button>
    </div>
  );
}

export default Counter;
