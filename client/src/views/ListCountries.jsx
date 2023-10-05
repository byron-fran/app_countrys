import { useEffect,} from "react";
import { useSelector, } from "react-redux"
import CardCountry from "../components/CardCountry";
import SelectFilters from "../components/SelectFilters";
import { generarId } from "../helpers";
import '../styles/listCountries.css'

// eslint-disable-next-line react/prop-types
const ListCountries = ({currentPage, setCurrentPage, setFormModal,bottonFloat,  setBottoFloat}) => {
  const countries = useSelector(state => state.listCountries);

  useEffect(() => {

  }, [countries]);

  if (countries === undefined || countries.length <= 0) return null;


  const countryPerPage = 12;

  const indexOfLastCountry = currentPage * countryPerPage;

  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  const totalPages = Math.ceil(countries.length / countryPerPage);

  return (
    <div onClick={() => setFormModal(false)} >
      <SelectFilters setCurrentPage={setCurrentPage} />
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


    </div>
  )
}

export default ListCountries