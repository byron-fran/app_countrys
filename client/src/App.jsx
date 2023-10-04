import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadCountries } from './redux/actions';
import { Routes, Route, useNavigate, } from 'react-router-dom';
import ListCountries from './components/ListCountries';
import SearchBar from './components/SearchBar';
import FindCountries from './components/FindCountries';
import DetailCountry from './components/DetailCountry';
import NavBar from './components/NavBar';
import FormActivity from './components/FormActivity';
import './App.css'
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const [searchCountry, setSearchCountry] = useState('');
  const [error, setError] = useState(false);
  const [countriesFind, setCountriesFind] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [acivityExist, setAcivityExist] = useState(false);
  const [infoActivity, setInfoActivity] = useState({
    name : '',
    difficulty : '',
    duration : '',
    season: '',
    countryId :[]
  });

  useEffect(() => {
    dispatch(loadCountries())
  }, []);


  const handleSubmit = async e => {
    e.preventDefault();

    if (!searchCountry.split(' ').join('').length <= 0) {
      // dispatch(searchCountries(searchCountry));
      try {
        const url = `http://localhost:3001/countries/?name=${searchCountry}`;

        const { data } = await axios(url);
        setCountriesFind(data.success)
        setError(false)
        setSearchCountry('')
        Navigate('/search');
      }
      catch (error) {
        //console.log(error.response.status)
        if (error.response.status === 404) {
          setCountriesFind([])
          setSearchCountry('')
          setError(true)
          Navigate('/search');
        }
      }
      return
    }
  }

  return (
    <>

      <NavBar />
      <SearchBar searchCountry={searchCountry} setSearchCountry={setSearchCountry} handleSubmit={handleSubmit} />
      <Routes>
        <Route path='/' element={<ListCountries currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
        <Route path='/search' element={<FindCountries error={error} countriesFind={countriesFind} />} />
        <Route path='/detail/:id' element={<DetailCountry   setAcivityExist={setAcivityExist} 
          acivityExist={acivityExist} infoActivity={infoActivity} setInfoActivity={setInfoActivity}  />} />
        <Route path='/form' element={<FormActivity 
          infoActivity={infoActivity} 
          setInfoActivity={setInfoActivity} 
          setAcivityExist={setAcivityExist} 
          acivityExist={acivityExist} />}/>
      </Routes>
    </>
  )
}

export default App
