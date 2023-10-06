import { Fragment } from "react";
import { useSelector } from "react-redux";
import useHandlersFilters from "../hooks/useHandlersFilters";
import '../styles/filters.css'
import useActivities from "../hooks/useActivities";

// eslint-disable-next-line react/prop-types
const SelectFilters = ({ setCurrentPage,  refreshData}) => {
    const countries = useSelector(state => state.listCountries);
    const { activities } = useActivities(refreshData);
    const {
        handleOrderByName,
        handlerContinent,
        handlerByPopulation,
        handleReserOrder,
        handlerByActivity, } = useHandlersFilters(setCurrentPage);
    if (countries === undefined || countries.length <= 0) return null;

    return (
        <div  className="container_filter">
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
                <select className="select_filter" onChange={handlerByPopulation} name="orderPopulation" id="orderPopulation">
                    <option value="Mayor">Poblacion Mayor</option>
                    <option value="Menor">Poblacoion Menor</option>
                </select>

            </div>
            <div>
                <label className="label_filter" htmlFor="orderContinent">Filtrar por continente</label>
                <select className="select_filter" onChange={handlerContinent} id="orderContinent">
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
                <select className="select_filter" name="activity" id="activity" onChange={handlerByActivity}>
                    <option>--Selecciona una actividad--</option>
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

export default SelectFilters