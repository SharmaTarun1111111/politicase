import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchData } from './services/api.js'
import Tabell2 from './komponenter/Tabell2.js';
import Header from './komponenter/Header';
import Footer from './komponenter/Footer';

function App() {
  const [database, setDatabase] = useState([])

  useEffect(() =>  {
    const getApi = async () => {
      const data = await fetchData()
      setDatabase(data)
    }

   getApi();

}, [])
  
  return (
  <>
  <Header></Header>
  <Tabell2 rows = {database} />
  <Footer></Footer>
  </>
  
  
  )

}

export default App;



