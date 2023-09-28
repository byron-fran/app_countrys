import '../styles/listCountries.css';
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const CardCountry = ({ country }) => {
  const Navigate = useNavigate();


  const handlerToDetail = id => {
    Navigate(`/detail/${id}`);
  }
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <div className="country_card" onClick={() => handlerToDetail(country.id)}>

        <div>
          {/* eslint-disable-next-line react/prop-types */}
          <p >{country.name}</p>
          {/* eslint-disable-next-line react/prop-types */}
          <img className="country_image" src={`${country.image}`} alt="img-country" />
          {/* eslint-disable-next-line react/prop-types */}
          <h4 className="detail_continent">{country.continents}</h4>
        </div>

      </div>
    </>
  )
}

export default CardCountry