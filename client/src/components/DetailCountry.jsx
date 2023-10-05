import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formaterDinero } from "../helpers";
import CardActivity from "./CardActivity";
import axios from "axios";
import '../styles/detailCountry.css'

// eslint-disable-next-line react/prop-types
const DetailCountry = ({ setInfoActivity, setAcivityExist, setFormModal,  setBottoFloat}) => {

    const [countryDetail, setCountryDetail] = useState({});

    const [refreshData, setRefreshData] = useState(false);
    // const [alerta, setAlerta] = useState(false)
    const { id } = useParams();

    
    useEffect(() => {
        const getCountry = async () => {
            try {
                //setRefreshData(!true)
                //console.log(refreshData)
                const url = `http://localhost:3001/countries/${id}`
                const { data } = await axios(url);
              
                setCountryDetail(data.success)
                return data;
            }
            catch (error) { console.log(error.message) }
        };

        getCountry();
    }, [id,refreshData])

    if (countryDetail === undefined || countryDetail.Activities === undefined) return null;


    return (
        <>
            <div className={`${countryDetail.Activities.length ? 'detail_grid' : 'detail_flex'}`}>
                <div className={`${countryDetail.Activities.length ? 'deatail_card2' : 'deatail_card'}`}>
                    <h1>{countryDetail.name}</h1>
                    <img className='detail_img' src={`${countryDetail.image}`} alt="image-country" />
                    <h2>{countryDetail.capital === 'null' ? "" : countryDetail.capital}</h2>
                    <p className="detail_continent">{countryDetail.continents}</p>
                    <p className="detail_population">{formaterDinero(countryDetail.population)}</p>
                    <p>{countryDetail.subregion === 'null' ? '' : countryDetail.subregion}</p>
                </div>

                <div className='detail_info'>

                    {countryDetail.Activities && countryDetail.Activities.map(activity => {
                        return (
                            <CardActivity 
                                key={activity.id} 
                                setAcivityExist={setAcivityExist}
                                setFormModal={setFormModal} 
                                activity={activity} 
                                setRefreshData={setRefreshData}   
                                setInfoActivity={setInfoActivity}
                                setBottoFloat={setBottoFloat}/>
                        )
                    })}
                </div>

            </div>

        </>


    )
}

export default DetailCountry