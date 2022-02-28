import React, { useEffect, useState } from 'react';
import Counter from './components/counter.jsx';
import PredictOutputOrder from './components/predictOutputOrder.jsx';
import LocalStorage from './components/localStorage.jsx';
import FetchApi from './components/fetchApi.jsx';
import setupMockServer from './api/mock.server';
import setupMockServer2 from './api/mock.server2';
import './style.css';
setupMockServer();
setupMockServer2();
export default function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <PredictOutputOrder /> */}
      {/* <LocalStorage /> */}
      <FetchApi />
    </>
  );
}
