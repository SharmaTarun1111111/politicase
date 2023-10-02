import React, { useState, useEffect } from 'react';
import { fetchData } from './Services/Api.js'
import Table from './Components/Table.js';
import Header from './Components/Header';
import Footer from './Components/Footer';

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
  <Table rows = {database} />
  <Footer></Footer>
  </>
  
  
  )

}

export default App;



