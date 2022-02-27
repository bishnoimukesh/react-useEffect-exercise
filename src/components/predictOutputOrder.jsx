import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('using useEffect', count)
  })

  function incrementClickHandler() {
    setCount((count) => {
      console.log('on Click', count)
      return count + 1;
    })
  }

  console.log('before render...', count)
  return (
    <div className='App'>
      <p>Total counts : {count}</p>
      <button onClick={incrementClickHandler}>Increment </button>
    </div>
  )
}
