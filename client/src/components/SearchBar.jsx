import '../styles/searchbar.css'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../styles/header.css'
// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchCountry, setSearchCountry, handleSubmit }) => {
  const location = useLocation()
  return (
    <>

    {
       location.pathname !== '/form' &&  (
        <div className='container_search'>
        <form onSubmit={handleSubmit}>
          <div className='container_postion'>
            <div className='grid_search'>
               <input className='input_search' value={searchCountry} type="text" placeholder='Buscar un pais' onChange={e => setSearchCountry(e.target.value)} />
                <button className='btn_search' type='submit'>Buscar</button>
            </div>
      
              <div className='btn_absolute'>
                  <NavLink to='/form'><button  className='btn_float'>+</button></NavLink>
              </div>
            
          </div>
         
        </form>
      </div>
       )
    }

    </>

  )
}

export default SearchBar