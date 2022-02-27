import React, { useEffect, useState } from 'react';
import Counter from './components/counter.jsx'
import PredictOutputOrder from './components/predictOutputOrder.jsx'
import LocalStorage from './components/localStorage.jsx'
import './style.css';

export default function App() {
  return(
    // <Counter />
    // <PredictOutputOrder />
    <LocalStorage />
  )
}
