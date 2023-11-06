import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MigrationsContract from './components/MigrationsContract';
import KnackContract from './components/KnackContract';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import ArtistDonation from './components/ArtistDonation';
import Web3 from 'web3'; // Import Web3

import migrationsABI from './ABI/migrationsABI.json'; // Import the Migrations contract ABI
import knackABI from './ABI/knackABI.json'; // Import the Knack contract ABI

const GanacheHost = 'http://localhost:7545'; // Update with your Ganache host
const MigrationsContractAddress = '0xB31484Fe37E4808b58F4F6078Da5261a87a4444a'; // Update with your contract address
const KnackContractAddress = '0x73A9c2432d0EB0531b2910983EB382b53C06095d'; // Update with your contract address

function App() {
  const [account, setAccount] = useState(''); // Your Ethereum account address
  const [migrationsContract, setMigrationsContract] = useState(null); // Migrations contract instance
  const [knackContract, setKnackContract] = useState(null); // Knack contract instance

  // Initialize Web3, load contracts, and set the account
  useEffect(() => {
    const web3 = new Web3(GanacheHost);

    const loadContracts = async () => {
      // Load Migrations contract ABI
      const migrationsContract = new web3.eth.Contract(migrationsABI, MigrationsContractAddress);
      setMigrationsContract(migrationsContract);

      // Load Knack contract ABI
      const knackContract = new web3.eth.Contract(knackABI, KnackContractAddress);
      setKnackContract(knackContract);

      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    };

    loadContracts();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Smart Contract Interaction App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/migrations">Migrations Contract</Link>
              </li>
              <li>
                <Link to="/knack">Knack Contract</Link>
              </li>
              <li>
                <Link to="/song">Add Song</Link>
              </li>
              <li>
                <Link to="/songs">Song List</Link>
              </li>
              <li>
                <Link to="/donation">Support an Artist</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/migrations" element={<MigrationsContract migrationsContract={migrationsContract} account={account} />} />
            <Route path="/knack" element={<KnackContract knackContract={knackContract} account={account} />} />
            <Route path="/song" element={<SongForm knackContract={knackContract} account={account} />} />
            <Route path="/songs" element={<SongList knackContract={knackContract} account={account} />} />
            <Route path="/donation" element={<ArtistDonation knackContract={knackContract} account={account} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
