import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  orderByName,
  filterByContinent,
  orderByPopulation,
  loadCountries,
  filterByActivity
} from "../redux/actions";

const useHandlersFilters = (setCurrentPage) => {
  const [name, setName] = useState('');
  const[continent, setOrderContinent] = useState('');
  const [population, SetPopulation] = useState('')
  const dispatch = useDispatch();
  // const [activities, setActivities] = useState(arrayActivities)

  useEffect(() => {

  }, [name, population, continent])
  const handleOrderByName = e => {
    setName(e.target.value)
    //console.log(name)
    dispatch(orderByName(e.target.value, continent, population))
    setCurrentPage(1)
  };

  const handlerContinent = e => {
    //console.log(continent)
    setOrderContinent (e.target.value)
    dispatch(filterByContinent(name, e.target.value, population));
    setCurrentPage(1)
  }

  const handlerByPopulation = e => {
   // console.log(population)
    SetPopulation(e.target.value);
    //console.log(e.target.value)
    dispatch(orderByPopulation(name, continent,  e.target.value))
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


  }
}

export default useHandlersFilters