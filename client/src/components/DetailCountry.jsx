import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { detailCountry } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { formaterDinero } from "../helpers";
import CardActivity from "./CardActivity";
import '../styles/detailCountry.css'


const DetailCountry = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const countryDetail = useSelector(state => state.detailCoutry.success);

    useEffect(() => {
        dispatch(detailCountry(id));

    }, [id]);

    if (countryDetail === undefined) return null;


    return (
        <div className={`${countryDetail.Activities.length ? 'detail_grid' : 'detail_flex'}`}>
            <div className={`${countryDetail.Activities.length ? 'deatail_card2' : 'deatail_card'}`}>
                <h1>{countryDetail.name}</h1>
                <img className='detail_img' src={`${countryDetail.image}`} alt="image-country" />
                <h2>{countryDetail.capital === 'null'? "" :  countryDetail.capital}</h2>
                <p className="detail_continent">{countryDetail.continents}</p>
                <p className="detail_population">{formaterDinero(countryDetail.population)}</p>
                <p>{countryDetail.subregion === 'null'? '' : countryDetail.subregion}</p>
            </div>

            <div className='detail_info'>
                
                {countryDetail.Activities && countryDetail.Activities.map(activity => {
                    return (
                        <CardActivity key={activity.id} activity={activity} />
                    )
                })}
            </div>

        </div>
    )
}

export default DetailCountry