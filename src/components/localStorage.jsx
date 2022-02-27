import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';

export default function WishList() {
  const [wishText, setWishText] = useState('');
  const [wishList, setWishList] = useState([]);

  const handleWishAdd = () => {
    setWishList((list) => list.concat({ id: uuid(), wish: wishText }));
    setWishText('');
  };

  const handleWishInput = (event) => setWishText(event.target.value);

  useEffect(()=>{localStorage.setItem('item', JSON.stringify(wishList.map((item)=>{
    console.log('Item Added : ',item.wish);
    return item.wish;
  })))},[wishList])
  return (
    <div>
      <h1>WishList</h1>
      <input
        onChange={handleWishInput}
        value={wishText}
        placeholder={'I wish...'}
      />
      <button onClick={handleWishAdd}>Add </button>
      <ul>
        {wishList.map(({ id, wish }) => (
          <li key={id}> {wish} </li>
        ))}
      </ul>
    </div>
  );
}