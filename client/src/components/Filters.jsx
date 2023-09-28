/* eslint-disable no-case-declarations */
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import '../styles/filters.css'
import {
    orderByName,
    filterByContinent,
    orderByPopulation, 
    loadCountries,
    filterByActivity
} from "../redux/actions";


// eslint-disable-next-line react/prop-types
const Filters = ({ setCurrentPage}) => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.listCountries);
    const [activities, setActivities] = useState([])

    useEffect(() => {
        const getActivites = async () => {
            try{
                const url = 'http://localhost:3001/activitesAll';
                const {data} = await axios(url);
                setActivities(data)
                return data
            }
            catch(error){
                console.log(error.message)
            }
        }
        getActivites()
    }, []);
    
    if (countries === undefined || countries.length <= 0) return null;

    const handleOrderByName = (e) => {
        const order = e.target.value;
        dispatch(orderByName(order))
        setCurrentPage(1)
    };

    const handlerContinent = (e) => {
        const continent = e.target.value;
        dispatch(filterByContinent(continent));
        setCurrentPage(1)
    }
    const handlerByPopulation = e => {
        const population = e.target.value;
        dispatch(orderByPopulation(population))
        setCurrentPage(1)
    };
    const handleReserOrder = () => {
        dispatch(loadCountries())
        setCurrentPage(1)
    };
    const handlerByActivity = e => {
        const id = e.target.value
        dispatch(filterByActivity(id))
        setCurrentPage(1)
    }
    return (
        <div className="container_filter">
            <div>
                <button className="btn_filter" onClick={handleReserOrder}>Todos</button>
            </div>
            <div>
                <label className="label_filter" htmlFor="orderName">Order por nombre</label>
                <select className="select_filter" onChange={handleOrderByName} id="orderName">

                    <option value="Ascenedente">Ascendente</option>
                    <option value="Descendente">Descendente</option>

                </select>
            </div>
            <div>
                <label className="label_filter" htmlFor="orderPopulation">Ordernar por Poblacion</label>
                <select  className="select_filter" onChange={handlerByPopulation} name="orderPopulation" id="orderPopulation">
                    <option value="Mayor">Poblacion Mayor</option>
                    <option value="Menor">Poblacoion Menor</option>
                </select>

            </div>
            <div>
                <label className="label_filter" htmlFor="orderContinent">Ordernar por continente</label>
                <select  className="select_filter" onChange={handlerContinent} id="orderContinent">
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="South America">South America</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Asia">Asia</option>
                    <option value="North America">North America</option>
                    <option value="Antarctica">Antarctica</option>
                </select>
            </div>
            <div>
                <label className="label_filter" htmlFor="activity">Filtrar por actividad</label>
                <select  className="select_filter" name="activity" id="activity" onChange={handlerByActivity}>
                    <option>--Selecciona una actividad</option>
                    {
                        activities.length > 0 && activities.map(activity => (
                            <Fragment key={activity.id}>
                                <option value={activity.id}>{activity.name}</option>
                            </Fragment>
                        ))
                    }
                </select>
            </div>

        </div>
    )
}

export default Filters