import {  useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const getCountries = async () => {
    const {data} = await axios('http://localhost:3001/countries');
    console.log(data)
    return data
  }
  useEffect(() => {
    getCountries()
  },[])

  return (
    <>
    <h1>hla mundo</h1>
    </>
  )
}

export default App
