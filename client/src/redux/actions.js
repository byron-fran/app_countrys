import { LOAD_COUNTRIES, SEARCH_COUNTRIES, DETAIL_COUNTRY, ORDER_lOWEST, MAJOR_ORDER, POPULATION_LOWEST, POPULATION_MAJOR } from "../types/types";

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

export const countriesOrderMajor =() => {
    return dispatch =>{
        try{
            return dispatch({
                type : MAJOR_ORDER
            })
        }
        catch(error){
            console.log(error)
        }    
    }
};
export const countriesOrderLowest = () => {
    return dispatch => {
        return dispatch({
            type  : ORDER_lOWEST,
        })
    }
}
export const populationMajor = () => {
    return dispatch => {
        return dispatch({
            type : POPULATION_MAJOR
        })
    }
};

export const populationLowest = () => {
    return dispatch => {
        return dispatch({
            type : POPULATION_LOWEST
        })
    }
}