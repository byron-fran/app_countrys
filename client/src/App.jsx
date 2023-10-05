import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadCountries } from './redux/actions';
import { Routes, Route, useNavigate, } from 'react-router-dom';
import ListCountries from './views/ListCountries';
import SearchBar from './components/SearchBar';
import FindCountries from './views/FindCountries';
import DetailCountry from './components/DetailCountry';
import NavBar from './components/NavBar';
import FormModal from './views/FormModal';
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
  const [formModal, setFormModal] = useState(false);
  const [bottonFloat, setBottoFloat] = useState(true);
  const [refreshData, setRefreshData] = useState(false)
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

  useEffect(() => {
    if(!formModal){
      setAcivityExist(false)
      setInfoActivity({
        ...infoActivity,
        name : '',
        difficulty : '',
        duration : '',
        season: '',
        countryId :[]
      })
      return
    }
  }, [formModal]);
  
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
    <div >
        {formModal && <FormModal
          formModal={formModal}
          setFormModal={setFormModal}
          infoActivity={infoActivity}
          setInfoActivity={setInfoActivity}
          acivityExist={acivityExist}
          setAcivityExist={setAcivityExist}
          setBottoFloat={setBottoFloat}
          />}

      <NavBar />
      <SearchBar 
        searchCountry={searchCountry} 
        setSearchCountry={setSearchCountry} 
        handleSubmit={handleSubmit} 
        formModal={formModal}
        setFormModal={setFormModal}
        setAcivityExist={setAcivityExist}
        setBottoFloat={setBottoFloat}
        bottonFloat={bottonFloat}/>
        
      <Routes>
        <Route path='/' element={<ListCountries 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          setFormModal={setFormModal}
          formModal={formModal}
          bottonFloat={bottonFloat}
          setBottoFloat={setBottoFloat}
     
          />}
           />
        <Route path='/search' element={<FindCountries 
          error={error} 
          countriesFind={countriesFind}
          bottonFloat={bottonFloat}
          setBottoFloat={setBottoFloat}
           />} />
        <Route path='/detail/:id' element={<DetailCountry

          setAcivityExist={setAcivityExist} 
          acivityExist={acivityExist} 
          infoActivity={infoActivity} 
          setInfoActivity={setInfoActivity} 
          formModal={formModal}
          setFormModal={setFormModal}
          setBottoFloat={setBottoFloat}
          />} />
   
      </Routes>
    </div>
  )
}

export default App
