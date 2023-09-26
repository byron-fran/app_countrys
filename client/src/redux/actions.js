import {
    LOAD_COUNTRIES,
    SEARCH_COUNTRIES,
    DETAIL_COUNTRY,
    ORDER_BY_NAME,
    FILERT_BY_CONTINENT,
    ORDER_BY_POPULATION

} from "../types/types";

import axios from 'axios'

export const loadCountries = () => {
    return async dispatch => {
        try {
            const { data } = await axios('http://localhost:3001/countries/');
            return dispatch({
                type: LOAD_COUNTRIES,
                payload: data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
};

export const searchCountries = searchWord => {
    return async dispatch => {
        try {
            const { data } = await axios(`http://localhost:3001/countries/?name=${searchWord}`);
            return dispatch({
                type: SEARCH_COUNTRIES,
                payload: data
            });
        } catch (error) {
            console.error(error.message);
        }
    }
};

export const detailCountry = searchDeatil => {
    return async dispatch => {
        try {
            const { data } = await axios(`http://localhost:3001/countries/${searchDeatil}`);
            return dispatch({
                type: DETAIL_COUNTRY,
                payload: data
            });

        }
        catch (error) {
            console.log(error)
        }
    }
};

export const orderByName = order => {
    return async dispatch => {
        try{
            const url = `http://localhost:3001/countriesOrders/${order}`;
            const {data} = await axios(url);
            return dispatch({
                type : ORDER_BY_NAME,
                payload : data.OrderByName
            })
        }
        catch(error) { console.log(error.message) }
    }
}
export const orderByPopulation = name => {
    return async dispatch => {
        const url = `http://localhost:3001/countriesPopulation/${name}`
        try{
            const {data} = await axios(url);
            return dispatch({
                type : ORDER_BY_POPULATION,
                payload : data.countriesByPopulation 
            })
        }
        catch(error) { console.log(error.message)}
    }
}
export const filterByContinent = (continent) => {
    return async dispatch =>{
        const url = `http://localhost:3001/countriesFilters/${continent}`
        const {data} = await axios(url);
        return dispatch({
            type : FILERT_BY_CONTINENT,
            payload : data.continentsByContinents
        })
    } 
}