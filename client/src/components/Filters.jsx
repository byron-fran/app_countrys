/* eslint-disable no-case-declarations */
import { useSelector, } from "react-redux";
import axios from "axios";
import { useEffect, Fragment } from "react";
import useHandlersFilters from "../hooks/useHandlersFilters";
import SelectFilters from "./SelectFilters";
import '../styles/filters.css'
import useActivities from "../hooks/useActivities";
// eslint-disable-next-line react/prop-types
const Filters = ({ setCurrentPage }) => {

    const countries = useSelector(state => state.listCountries);
    const { activities } = useActivities()
    //,
    //setActivities,
    const {
        handleOrderByName,
        handlerContinent,
        handlerByPopulation,
        handleReserOrder,
        handlerByActivity, } = useHandlersFilters(setCurrentPage);

    if (countries === undefined || countries.length <= 0) return null;

    return (
        <div className="container_filter">
            <SelectFilters
                handleReserOrder={handleReserOrder}
                handleOrderByName={handleOrderByName}
                handlerByPopulation={handlerByPopulation}
                handlerContinent={handlerContinent}
            />
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

export default Filters