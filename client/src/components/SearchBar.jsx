import '../styles/searchbar.css'

import { useLocation } from 'react-router-dom';
import '../styles/header.css'
// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchCountry, setSearchCountry, handleSubmit, setFormModal, setBottoFloat, bottonFloat}) => {
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
                {bottonFloat && (
                  <button  className='btn_float' onClick={()=>{ 
                    setBottoFloat(false)
                    setFormModal(true)}}>+</button>
                )}
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