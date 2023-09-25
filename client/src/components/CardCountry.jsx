import { NavLink } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const CardCountry = ({country}) => {

  return (
    <div>
         {/* eslint-disable-next-line react/prop-types */}
      <NavLink to={`/detail/${country.id}`}>
          {/* eslint-disable-next-line react/prop-types */}
        <p>{country.name}</p>
           {/* eslint-disable-next-line react/prop-types */}
        <img src={`${country.image}`} alt="img-country" />
           {/* eslint-disable-next-line react/prop-types */}
        <p>{country.continents}</p>
      </NavLink>
  
    </div>
  )
}

export default CardCountry