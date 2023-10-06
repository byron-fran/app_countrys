import { useEffect, } from "react";
import { useSelector, } from "react-redux"
import CardCountry from "./CardCountry";
import SelectFilters from "../components/SelectFilters";
import { generarId } from "../helpers";
import usePagination from "../hooks/usePagination";
import '../styles/listCountries.css'

// eslint-disable-next-line react/prop-types
const ListCountries = ({ currentPage, setCurrentPage, setFormModal, refreshData }) => {

  const countries = useSelector(state => state.listCountries);
  const { currentCountries, listBottons } = usePagination(currentPage, countries)
  useEffect(() => {

  }, [countries]);

  if (countries === undefined || countries.length <= 0) return null;

  return (
    <div onClick={() => setFormModal(false)} >
      <SelectFilters
        setCurrentPage={setCurrentPage}
        refreshData={refreshData}
        />
        


      <div className="countries_card">
        {currentCountries.length > 0 && currentCountries.map(country => {
          return (
            <CardCountry key={country.id} country={country} />
          )
        })}


      </div>
      <div className="list_buttons">
        {listBottons.map(botton => {
          return (
            <button
              onClick={() => setCurrentPage(botton)}
              key={generarId()}
              className={currentPage === botton ? 'active' : 'noActive'}>{botton}</button>)})}
      </div>


    </div>
  )
}

export default ListCountries