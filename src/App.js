import React, { useState } from 'react';
import Web3 from 'web3';
import './App.css';

const App = () => {
  const [walletInfo, setWalletInfo] = useState(null);

  const connectToMetaMask = async () => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      // Enable MetaMask
      await window.ethereum.enable();

      // Create a new web3 instance
      const web3 = new Web3(window.ethereum);

      // Now you can use web3.js to interact with MetaMask
      // For example, you can get the current selected account
      const accounts = await web3.eth.getAccounts();

      // Set the walletInfo state with the address and account number
      setWalletInfo({
        address: accounts[0],
        accountNumber: accounts[0].substring(2) // Remove the '0x' prefix from the address
      });
    } else {
      // MetaMask is not installed
      console.log('Please install MetaMask.');
    }
  };

  return (
    <div className="App">
      <div className="button-container">
        <button className="centered-button" onClick={connectToMetaMask}>
          Connect to MetaMask
        </button>
      </div>

      {walletInfo && (
        <div className="wallet-info">
          <h2>Wallet Information</h2>
          <p>Address: {walletInfo.address}</p>
          <p>Account Number: {walletInfo.accountNumber}</p>
        </div>
      )}
    </div>
  );
};

export default App;
