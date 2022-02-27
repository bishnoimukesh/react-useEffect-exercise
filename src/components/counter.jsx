import React, { useEffect, useState } from 'react';

export default function Counter() {
  const [counts, setCounts] = useState(0);
  const clickHandler = () => {
    setCounts(counts + 1);
  };
  useEffect(() => {
    console.log(`Hey! This is the initial value of Counter: ${counts}.`);
  }, []);
  return (
    <div>
      <p>Number of counts : {counts}</p>
      <button onClick={clickHandler}>counter</button>
    </div>
  );
}
