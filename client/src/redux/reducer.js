import {
    LOAD_COUNTRIES,
    SEARCH_COUNTRIES,
    DETAIL_COUNTRY,
    ORDER_BY_NAME,
    FILERT_BY_CONTINENT,
    ORDER_BY_POPULATION
} from "../types/types"

const initialState = {
    listCountries: [],
    searchCountries: [],
    detailCoutry: []
}
export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_COUNTRIES:
            return {
                ...state,
                listCountries: action.payload.success
            }
        case SEARCH_COUNTRIES:
            return {
                ...state,
                searchCountries: action.payload
            }
        case DETAIL_COUNTRY:
            return {
                ...state,
                detailCoutry: action.payload
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
        default:
            return state
    }
}

