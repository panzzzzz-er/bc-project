import React, { useState } from 'react';

const KnackContract = ({ knackContract, account }) => {
  const [name, setName] = useState('');

  const handleAddListener = async () => {
    try {
      await knackContract.methods.addNewListener(name).send({ from: account });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h2>Knack Contract</h2>
      <div>
        <label htmlFor="name">Add New Listener: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddListener}>Add</button>
      </div>
    </div>
  );
};

export default KnackContract;
