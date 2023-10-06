import { useState,} from "react"
import useCreateOrUpdate from "./useCreateOrUpdate";

const useFormValidate = ( infoActivity, objAlerta,setInfoActivity,setFormModal,setRefreshData,setBottoFloat,setBottonVisible) => {
    const [exito, setExito] = useState(false);
    const {createOrUpdate} = useCreateOrUpdate(setInfoActivity, setFormModal,setExito,setRefreshData,setBottoFloat,setBottonVisible)
    const [alerta, setAlerta] = useState(objAlerta);
 
    const handlerSendInfo = async e => {
        e.preventDefault();
        //hacer Valiaciones
          //console.log(infoActivity)
          if(infoActivity.name.split(' ').join('').length <= 0){
            setAlerta({...alerta, name : 'Este campo no debe ir vacio'})
            return
          }
          setAlerta({...alerta, name : ''})
          if(infoActivity.difficulty === '' ){
            setAlerta({...alerta, difficulty : "Este campo no debe ir vacio"})
            return
          }
          if(!Number(infoActivity.difficulty)){
            setAlerta({...alerta, difficulty : "debe ser un numero valido"});
            return
          }
          setAlerta({...alerta, difficulty : ""});
      
          if(parseInt(infoActivity.difficulty) <=0 || parseInt( infoActivity?.difficulty) >5){
            setAlerta({...alerta, difficulty : "Debe ser un número entre 1 y 5"})
            return
          }
          setAlerta({...alerta, difficulty : ""});
      
      
          if(infoActivity.duration === ''){
            setAlerta({...alerta, duration : 'Este campo no debe ir vacio'})
            return
          }
          setAlerta({...alerta, duration : ''})
          if(!Number(infoActivity.duration)){
            setAlerta({...alerta,duration : "debe ser un numero valido"});
            return
          }
          setAlerta({...alerta, duration : ''})
      
          if(parseInt(infoActivity.duration) <=0 || parseInt(infoActivity.duration ) > 24 ){
            setAlerta({...alerta, duration : 'Debe ser un numero etre 1 y 24'})
            return
          }
          setAlerta({...alerta, duration : ''})
      
      
          if(infoActivity.season.split(' ').join('').length <= 0 ){
            setAlerta({...alerta,season : 'Selecciona un temporada'})
            return
          }
          setAlerta({...alerta, season : ''});
      
      
          if(infoActivity.countryId && infoActivity.countryId.length <= 0){
            setAlerta({...alerta, countryId : "Selecciona al menos un pais"})
            return
          }
  
          setAlerta({...alerta, countryId : ''});
      
      
          setAlerta({
            name : '',
            difficulty : '',
            duration : '',
            season: '',
            countryId :'',
            
            
          });
          //Comprobar si existe para actulalizar
          await createOrUpdate(infoActivity)
       
      };
    
    return {
        infoActivity,
        alerta,
        setAlerta,
        handlerSendInfo,
        exito
    }
}

export default useFormValidate