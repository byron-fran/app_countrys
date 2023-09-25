import { useEffect, useState } from "react";
import { useSelector,  } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardCountry from "./CardCountry"


const FindCountries = () => {
    const [noCountries, setNoCountries] = useState(false)
    //const Navigate = useNavigate()
    const countriesSearch = useSelector(state => state.searchCountries.success );
    useEffect(() => {
      if(countriesSearch  === undefined || countriesSearch.length <=0){
        setNoCountries(true)
        return
      }
      setNoCountries(false)
    }, [countriesSearch ])
    if(countriesSearch === undefined || countriesSearch.length <=0){ 
     
      return null 
    }
  

  return (
  <>
    <div className="countries_card">
        {countriesSearch.length >0 && countriesSearch.map(country => {
            return (
                <CardCountry key={country.id} country={country}/>
            )
        })}
    </div>
    <div>
      {countriesSearch.length === 0 &&  (<p>No hay resultados</p>)}
    </div>
  </>
  )
}

export default FindCountries