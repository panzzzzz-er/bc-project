import React, { useState } from 'react';

const ArtistDonation = ({ knackContract, account }) => {
  const [artistName, setArtistName] = useState('');
  const [amount, setAmount] = useState(0);

  const handleDonate = async () => {
    try {
      await knackContract.methods.donateArtist(artistName).send({ from: account, value: amount });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h2>Support an Artist</h2>
      <div>
        <label htmlFor="artistName">Artist Name: </label>
        <input
          type="text"
          id="artistName"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Donation Amount (ETH): </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleDonate}>Donate</button>
    </div>
  );
};

export default ArtistDonation;
