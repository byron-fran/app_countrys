import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardCountry from "./CardCountry";



// eslint-disable-next-line react/prop-types
const FindCountries = ({ error, countriesFind }) => {

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
        <div>
          {/*  eslint-disable-next-line react/prop-types */}
          {countriesFind && countriesFind.map(country => {
            return (
              <CardCountry key={country.id} country={country} />
            )
          })}
        </div>
      </div>

    </>
  )
}

export default FindCountries