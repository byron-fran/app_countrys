import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  orderByName,
  filterByContinent,
  orderByPopulation,
  loadCountries,
  filterByActivity
} from "../redux/actions";

const useHandlersFilters = (setCurrentPage, arrayActivities) => {
  const dispatch = useDispatch();
  const [activities, setActivities] = useState(arrayActivities)

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
  return {
    handleOrderByName,
    handlerContinent,
    handlerByPopulation,
    handleReserOrder,
    handlerByActivity,
    activities,
    setActivities

  }
}

export default useHandlersFilters