import {  useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadCountries, searchCountries } from './redux/actions';
import { Routes, Route, useNavigate, } from 'react-router-dom';
import ListCountries from './components/ListCountries';
import SearchBar from './components/SearchBar';
import FindCountries from './components/FindCountries';
import DetailCountry from './components/DetailCountry';
import NavBar from './components/NavBar';
import FormActivity from './components/FormActivity';


import './App.css'

function App() {
  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const [searchCountry, setSearchCountry] = useState('')

  useEffect(() => {
    dispatch(loadCountries())
  },[]);

//   useEffect(() => {
//     if(!searchCountries === ''){
// dispatch(searchCountries(searchCountries))
// return
//     }
    
//   },[searchCountry]);
const handleSubmit = e => {
  e.preventDefault();
 
 if(!searchCountry.split(' ').join('').length <= 0 ){
  dispatch(searchCountries(searchCountry));
  Navigate('/search');
  setSearchCountry('')
  return
 }

  
}
  
  return (
    <>
      <NavBar />
      <SearchBar searchCountry={searchCountry} setSearchCountry={setSearchCountry} handleSubmit={handleSubmit}/>
      <Routes>
        <Route path='/' element={<ListCountries/>}/>
        <Route path='/search' element={<FindCountries/>}/>
        <Route path='/detail/:id' element={<DetailCountry/>}/>
        <Route path='/form' element={<FormActivity/>}/>
      </Routes>
    </>
  )
}

export default App
