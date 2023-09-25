import { LOAD_COUNTRIES, SEARCH_COUNTRIES, DETAIL_COUNTRY, MAJOR_ORDER, ORDER_lOWEST, POPULATION_LOWEST, POPULATION_MAJOR} from "../types/types"

const initialState = {
    listCountries : [],
    searchCountries : [],
    detailCoutry : []
}
export const reducer = (state = initialState, action) => {

    switch(action.type){
        case LOAD_COUNTRIES:
            return {
                ...state,
                listCountries : action.payload.success
            }
        case SEARCH_COUNTRIES:
            return{
                ...state,
                searchCountries : action.payload
            }
        case  DETAIL_COUNTRY:
            return {
                ...state,
                detailCoutry : action.payload
            }  
        case MAJOR_ORDER :
            // eslint-disable-next-line no-case-declarations
           // const countr = state.listCountries.sort((a,b) => a.name.localeCompare(b.name));
          // console.log(state.listCountries)
            return {
            ...state,
             listCountries :state.listCountries.sort((a,b) => a.name.localeCompare(b.name))
            }  
        case ORDER_lOWEST:
            return {
                ...state,
                listCountries :state.listCountries.sort((a,b) => b.name.localeCompare(a.name))
            } 
         case POPULATION_MAJOR:
            return {
                ...state,
                 listCountries :state.listCountries.sort((a,b) => a.population- b.population)
                }  
        case POPULATION_LOWEST:
            return {
                ...state,
                listCountries :state.listCountries.sort((a,b) => b.population- a.population)
            } 
        default:
            return state
    }
}

