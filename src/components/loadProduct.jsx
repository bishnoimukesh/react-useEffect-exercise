import axios from 'axios';
import React, { useState } from 'react';

export default function fetchApi() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
      setLoading(true);
      axios
        .get('./api/products')
        .then((response) => {
          setProducts(response.data.products);
          setLoading(false);
        })
        .catch((error) => console.log('error is : ', error));
  }, []);

  return (
    <div className="App">
      <h1> Showcase Products </h1>
      {loading && 'loading...'}
      <div>{products && products.map((product)=>
        <li>{product.name}</li>)}
      </div>
    </div>
  );
}