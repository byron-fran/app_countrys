import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { detailCountry } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { formaterDinero } from "../helpers";
import CardActivity from "./CardActivity";


const DetailCountry = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const countryDetail = useSelector(state => state.detailCoutry.success);

    useEffect(() => {
        dispatch(detailCountry(id));

    }, [id]);

    if (countryDetail === undefined) return null;


    return (
        <div className="detail_card">
            <div>
                <h1>{countryDetail.name}</h1>
                <img src={`${countryDetail.image}`} alt="image-country" />
                <h2>{countryDetail.capital === 'null'? "" :  countryDetail.capital}</h2>
                <p className="detail_continent">{countryDetail.continents}</p>
                <p className="detail_population">{formaterDinero(countryDetail.population)}</p>
                <p>{countryDetail.subregion === 'null'? '' : countryDetail.subregion}</p>
            </div>

            <div>
                <p>{!countryDetail.Activities.length && 'No hay actividades'}</p>
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