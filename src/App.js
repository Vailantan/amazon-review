import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sheetId = '795123173';
    const range = 'Sheet1!D4:E4'; 

    try {
      await axios.post(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}`,
        {
          values: [[name]], 
        },
        {
          params: {
            key: 'AIzaSyAsxYoeup-Yh77VNfO1S-ECUmWUbRU0lsQ', 
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
