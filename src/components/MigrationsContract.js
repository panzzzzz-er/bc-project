import React, { useState } from 'react';

const MigrationsContract = ({ migrationsContract, account }) => {
  const [completed, setCompleted] = useState(0);

  const handleSetCompleted = async () => {
    try {
      await migrationsContract.methods.setCompleted(completed).send({ from: account });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h2>Migrations Contract</h2>
      <div>
        <label htmlFor="completed">Set Completed: </label>
        <input
          type="number"
          id="completed"
          value={completed}
          onChange={(e) => setCompleted(e.target.value)}
        />
        <button onClick={handleSetCompleted}>Set</button>
      </div>
    </div>
  );
};

export default MigrationsContract;
