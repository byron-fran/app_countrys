import { useSelector, useDispatch } from "react-redux";
import { countriesOrderMajor,countriesOrderLowest, populationLowest, populationMajor } from "../redux/actions";
import { useEffect } from "react";


const Filters = () => {
    const dispatch = useDispatch();


    // const orderMayor = (e) => {
        
      

    // };
    // const orderMenor = (e) => {
    //     console.log(e.target.value)
    // }


    useEffect(() => {

    }, [])
    const handleValor = (e)=> {
        switch(e.target.value){
            case 'ascendente':
                dispatch(countriesOrderMajor())
                break
             case 'descenetente':
                dispatch(countriesOrderLowest())
                break
             case  'mayor':
                dispatch(populationMajor())
                break
             case 'menor':
                dispatch(populationLowest())
                break      
            default:
                return
        }
    };

  return (
    <div>
     
        <div>
            <select onChange={handleValor}>
                <option value="">Ordenar Por</option>
                <option  value="ascendente">Ascendente</option>
                <option  value="descenetente">Descendente</option>
                <option value="mayor">Poblacion Mayor</option>
                <option value="menor">Poblacoion Menor</option>
            </select>
        </div>
     
        
    </div>
  )
}

export default Filters