import React, { useEffect, useState } from 'react';

export default function Counter() {
  const [counts, setCounts] = useState(0);
  const clickHandler = () => {
    setCounts(counts + 1);
  };
  useEffect(() => {
    console.log(counts);
  });
  return (
    <div>
      <p>Number of counts : {counts}</p>
      <button onClick={clickHandler}>counter</button>
    </div>
  );
}
