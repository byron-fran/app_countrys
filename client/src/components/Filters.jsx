/* eslint-disable no-case-declarations */
import { useSelector, useDispatch } from "react-redux";
import { orderByName,
    filterByContinent,orderByPopulation, loadCountries} from "../redux/actions";
import { useEffect } from "react";


const Filters = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.listCountries);
   useEffect(() => {

    }, [])
    if(countries === undefined || countries.length <= 0) return null;


  
    const handleOrderByName = (e)=> {
        const order = e.target.value;
        dispatch(orderByName(order))
    };

    const handlerContinent = (e) => {
        const continent = e.target.value;
        dispatch(filterByContinent(continent));
    }
    const handlerByPopulation = e => {
        const population = e.target.value;
        dispatch(orderByPopulation(population))
    };
    const handleReserOrder = () => {
        dispatch(loadCountries())
    }
  return (
    <div>
        <div>
            <button onClick={handleReserOrder}>Todos</button>
        </div>
        <div>
            <label htmlFor="orderName">Order por nombre</label>
            <select onChange={ handleOrderByName} id="orderName">
              
                <option  value="Ascenedente">Ascendente</option>
                <option  value="Descendente">Descendente</option>
  
            </select>
        </div>
        <div>
            <label htmlFor="orderPopulation">Ordernar por Poblacion</label>
            <select onChange={handlerByPopulation} name="orderPopulation" id="orderPopulation">
                <option value="Mayor">Poblacion Mayor</option>
                <option value="Menor">Poblacoion Menor</option>
            </select>
              
        </div>
        <div>
            <label htmlFor="orderContinent">Ordernar por continente</label>
        <select onChange={handlerContinent} id="orderContinent">
                <option value="Africa">Africa</option>
                <option  value="Europe">Europe</option>
                <option value="South America">South America</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
                <option value="North America">North America</option>
                <option value="Antarctica">Antarctica</option>
            </select>
        </div>
     
        
    </div>
  )
}

export default Filters