import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { detailCountry } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { formaterDinero } from "../helpers";
import CardActivity from "./CardActivity";


const DetailCountry = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const countryDetail = useSelector(state => state.detailCoutry.success);

    useEffect(() => {
        dispatch(detailCountry(id));
       
    }, [id]);

   if(countryDetail === undefined)return null;
  

  return (
    <div className="detail_card">
        <div>
        <h1>{countryDetail.name}</h1>
        <img src={`${countryDetail.image}`} alt="image-country" />
        <h2>{countryDetail.capital}</h2>
        <p>{countryDetail.continents}</p>
        <p>{formaterDinero(countryDetail.population)}</p>
        <p>{countryDetail.subregion}</p>
        </div>
      
        <div>
            {countryDetail.Activities && countryDetail.Activities.map(activity => {
                return (
                    <CardActivity key={activity.id} activity={activity}/>
                )
            })}
        </div>

    </div>
  )
}

export default DetailCountry