import { useEffect,} from "react";
import { useSelector, } from "react-redux"
import CardCountry from "./CardCountry";
import Filters from "./Filters";
import { generarId } from "../helpers";
import '../styles/listCountries.css'

// eslint-disable-next-line react/prop-types
const ListCountries = ({currentPage, setCurrentPage}) => {
  const countries = useSelector(state => state.listCountries);

  useEffect(() => {

  }, [countries])

  if (countries === undefined || countries.length <= 0) return null;
  // if(countriesSearch === undefined || countriesSearch.length <= 0) return null;
  // console.log(countriesSearch)

  const countryPerPage = 12;

  const indexOfLastCountry = currentPage * countryPerPage;

  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  const totalPages = Math.ceil(countries.length / countryPerPage);

  // let countryPerPage = 20;
  // let totaCuntries = countries.length;
  // let  totalButtons = totaCuntries / countryPerPage;

  // let buttons = [];
  // for(let i = 1; i<=totalButtons.toFixed(); i++){
  //   buttons.push(i)
  // }
  // console.log(currentCountries);


  return (
    <>
      <Filters currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="countries_card">
        {currentCountries.length > 0 && currentCountries.map(country => {
          return (
            <CardCountry key={country.id} country={country} />
          )
        })}


      </div>
      <div className="list_buttons">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button key={generarId()} 
            onClick={() => setCurrentPage(pageNumber)}
            className={currentPage === pageNumber ? 'active' : 'noActive'}>
              {pageNumber}
            </button>
          )
        })}
      </div>


    </>
  )
}

export default ListCountries