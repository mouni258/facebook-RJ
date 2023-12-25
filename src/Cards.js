import React, { useState, useEffect } from 'react';


const Cards = () => {
  
  const cardData = [
    { id: 1, name: 'A', price: '10 Rs' },
    { id: 2, name: 'B', price: '20 Rs' },
    { id: 3, name: 'C', price: '30 Rs' },
    { id: 4, name: 'D', price: '40 Rs' },
    { id: 5, name: 'F', price: '50 Rs' },
  ];


 
  const [Cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


 // Effect to load wishlist from local storage on mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCards(storedWishlist);
  }, []);


 // Effect to filter cards when search term changes
  useEffect(() => {
    const filtered = cardData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [searchTerm]);


 
  const addToWishlist = (itemId) => {
    const item = cardData.find(i => i.id === itemId);


   if (item) {
      const updatedWishlist = [...Cards, item];
      setCards(updatedWishlist);


     localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    }
  };


 
  const deleteItem = (itemId) => {
    const updatedWishlist = Cards.filter(item => item.id !== itemId);
    setCards(updatedWishlist);


   localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };


 return (
    <div>
      <h2>Wishlist Items </h2>
      <div>
        {Cards.map(item => (
          <div key={item.id}>
            <p>{item.name} - {item.price}</p>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        ))}
      </div>


     <div>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>


     <h2>Product Cards</h2>
      <div>
        {filteredCards.map(item => (
          <div key={item.id}>
            <p><strong>{item.name}</strong></p>
            <p>Price: {item.price}</p>
            <button onClick={() => addToWishlist(item.id)}>Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Cards;