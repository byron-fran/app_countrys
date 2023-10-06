import axios from 'axios'
import {
    LOAD_COUNTRIES,
    ORDER_BY_NAME,
    FILERT_BY_CONTINENT,
    ORDER_BY_POPULATION,
    FILTER_BY_ACTIVITY

} from "../types/types";



export const loadCountries = () => {
    return async dispatch => {
        try {
            const { data } = await axios('http://localhost:3001/countries/');
            return dispatch({
                type: LOAD_COUNTRIES,
                payload: data
            })
        }
        catch (error) { console.log(error) }
    }
};


export const orderByName = (order, continent, population) => {
    return async dispatch => {
        try{
            const url = `http://localhost:3001/countries?orderByName=${order}&continent=${continent}&orderByPopulation=${population}`;
            const {data} = await axios(url);
            // console.log(data)
            return dispatch({
                type : ORDER_BY_NAME,
                payload : data
            })
        }
        catch(error) { console.log(error.message) }
    }
};

//O
export const orderByPopulation = (order, continent, population) => {
    return async dispatch => {
        const url = `http://localhost:3001/countries?orderByPopulation=${population}&continent=${continent}`;
        try{
            const {data} = await axios(url);
            return dispatch({
                type : ORDER_BY_POPULATION,
                payload : data
            })
        }
        catch(error) { console.log(error.message)}
    }
};

//Filtrar por continente
export const filterByContinent =  (order, continent, population) => {
    return async dispatch =>{
        try{
            const url = `http://localhost:3001/countries?continent=${continent}&orderByPopulation=${population}&orderByName=${order}`;
            const {data} = await axios(url);
            return dispatch({
                type : FILERT_BY_CONTINENT,
                payload : data
            })
        }
        catch(error) {console.log(error.message)}

    } 
};
//Filtrar por actividades

export const filterByActivity = id => {
    return async dispatch =>{
        try{
            const url = `http://localhost:3001/activities/${id}`
            const {data} = await axios(url);
            return dispatch({
                type : FILTER_BY_ACTIVITY,
                payload : data.activityFind.Countries
            })
        }
        catch(error) {console.log(error.message)}

    } 
}
