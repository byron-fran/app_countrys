import {
    LOAD_COUNTRIES,
    ORDER_BY_NAME,
    FILERT_BY_CONTINENT,
    ORDER_BY_POPULATION,
    FILTER_BY_ACTIVITY
} from "../types/types"

const initialState = {
    listCountries: []
}
export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_COUNTRIES:
            return {
                ...state,
                listCountries: action.payload
            }

        case FILERT_BY_CONTINENT:
            return {
                ...state,
                listCountries: action.payload
            }
        case ORDER_BY_NAME:
            return {
                ...state,
                listCountries: action.payload
            }
        case ORDER_BY_POPULATION:
            return {
                ...state,
                listCountries: action.payload
            }
        case FILTER_BY_ACTIVITY:
            return{
                ...state,
                listCountries: action.payload
            }
        default:
            return state
    }
}

