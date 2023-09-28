import { NavLink } from "react-router-dom"
import '../styles/listCountries.css'
// eslint-disable-next-line react/prop-types
const CardCountry = ({ country }) => {

  return (
    <div className="country_card">
      {/* eslint-disable-next-line react/prop-types */}
      <NavLink to={`/detail/${country.id}`}>
        {/* eslint-disable-next-line react/prop-types */}
        <p >{country.name}</p>
        {/* eslint-disable-next-line react/prop-types */}
        <img className="country_image" src={`${country.image}`} alt="img-country" />
        {/* eslint-disable-next-line react/prop-types */}
        <h4 className="detail_continent">{country.continents}</h4>
      </NavLink>

    </div>
  )
}

export default CardCountry