import React, { useState } from 'react';

const SongForm = ({ knackContract, account }) => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [hash, setHash] = useState('');
  const [price, setPrice] = useState(0);

  const handleAddSong = async () => {
    try {
      await knackContract.methods
        .addSong(name, genre, hash, price)
        .send({ from: account });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h2>Add a Song</h2>
      <div>
        <label htmlFor="name">Song Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="genre">Genre: </label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="hash">Hash: </label>
        <input
          type="text"
          id="hash"
          value={hash}
          onChange={(e) => setHash(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button onClick={handleAddSong}>Add Song</button>
    </div>
  );
};

export default SongForm;
