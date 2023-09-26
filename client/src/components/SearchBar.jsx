

// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchCountry, setSearchCountry, handleSubmit }) => {

  return (
    <>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input value={searchCountry} type="text" placeholder='Buscar un pais' onChange={e => setSearchCountry(e.target.value)} />
          </div>
          <button type='submit'>Buscar</button>
        </form>
      </div>
    </>

  )
}

export default SearchBar