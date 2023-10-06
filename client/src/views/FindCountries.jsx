import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardCountry from "./CardCountry";
import usePagination from "../hooks/usePagination";
import { generarId } from "../helpers";

// eslint-disable-next-line react/prop-types
const FindCountries = ({ error, countriesFind, currentPage,setCurrentPage }) => {
  const {currentCountries, listBottons} = usePagination( currentPage, countriesFind)
  const Navigate = useNavigate()
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (countriesFind.length <= 0 && !error) {
      Navigate('/')

    }
  }, [])

  return (
    <>
      <div>
        {error && (<h1>No hay resultados</h1>)}
        {!error && (<h1>Resultados de busqueda</h1>)}
        <div className="countries_card">
         
          {/*  eslint-disable-next-line react/prop-types */}
          {currentCountries && currentCountries.map(country => {
            return (
              <CardCountry key={country.id} country={country} />
            )
          })}
        </div>
        <div className="list_buttons">
          {listBottons.map(botton => {
            return (
              <button key={generarId()}
                onClick={() => setCurrentPage(botton)}
                className={currentPage === botton ? 'active' : 'noActive'}>{botton}</button>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default FindCountries