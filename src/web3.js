import Web3 from 'web3';
require('dotenv').config();
const infuraApiKey = process.env.INFURA_API_KEY;

// Initialize Web3 instance
const web3 = new Web3(`https://mainnet.infura.io/v3/${infuraApiKey}`);

export default web3;
