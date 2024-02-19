import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your Google Sheets API endpoint
    const sheetId = '795123173';
    const range = 'Sheet1!D4:E4'; // Specify the range (row and column)

    // Your API request
    try {
      await axios.post(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}`,
        {
          values: [[name]], // Data to be sent
        },
        {
          params: {
            key: 'AIzaSyAsxYoeup-Yh77VNfO1S-ECUmWUbRU0lsQ', // Your API key
          },
        }
      );
      console.log('Data sent successfully!');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
   
    <button type="submit">Submit</button>
  </form>
  );
}

export default App;
