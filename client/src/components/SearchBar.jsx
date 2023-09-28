import '../styles/searchbar.css'
import { NavLink } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchCountry, setSearchCountry, handleSubmit }) => {

  return (
    <>

      <div className='container_search'>
        <form onSubmit={handleSubmit}>
          <div className='container_postion'>
            <div className='grid_search'>
               <input className='input_search' value={searchCountry} type="text" placeholder='Buscar un pais' onChange={e => setSearchCountry(e.target.value)} />
                <button type='submit'>Buscar</button>
            </div>
            <div className='btn_absolute'>
               <NavLink to='/form'><button  className='btn_float'>+</button></NavLink>
            </div>
          
          </div>
         
        </form>
      </div>
    </>

  )
}

export default SearchBar