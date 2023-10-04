import { useState,} from "react"
import axios from "axios";
import useActivities from "./useActivities";

const useFormValidate = ( infoActivity, objAlerta,setInfoActivity ) => {
    const [exito, setExito] = useState(false)
    const [alerta, setAlerta] = useState(objAlerta);
    const {activities} = useActivities()

    const handlerSendInfo = async e => {
        e.preventDefault();
        //console.log(idsc)
        //hacer Valiaciones
        // if(infoActivity?.name.split(' ').join('').length <= 0){
        //   setAlerta({...alerta, name : 'Este campo no debe ir vacio'})
        //   return
        // }
        // setAlerta({...alerta, name : ''})
    
        // if(infoActivity.difficulty.split(' ').join('').length <= 0 ){
        //   setAlerta({...alerta, difficulty : "Este campo no debe ir vacio"})
        //   return
        // }
        // if(!Number(infoActivity.difficulty)){
        //   setAlerta({...alerta, difficulty : "debe ser un numero valido"});
        //   return
        // }
        // setAlerta({...alerta, difficulty : ""});
    
        // if(parseInt(infoActivity.difficulty) <=0 || parseInt( infoActivity.difficulty) >5){
        //   setAlerta({...alerta, difficulty : "Debe ser un número entre 1 y 5"})
        //   return
        // }
        // setAlerta({...alerta, difficulty : ""});
    
    
        // if(infoActivity.duration.split(' ').join('').length <= 0){
        //   setAlerta({...alerta, duration : 'Este campo no debe ir vacio'})
        //   return
        // }
        // setAlerta({...alerta, duration : ''})
        // if(!Number(infoActivity.duration)){
        //   setAlerta({...alerta,duration : "debe ser un numero valido"});
        //   return
        // }
        // setAlerta({...alerta, duration : ''})
    
        // if(parseInt(infoActivity.duration) <=0 || parseInt(infoActivity.duration ) > 24 ){
        //   setAlerta({...alerta, duration : 'Debe ser un numero etre 1 y 24'})
        //   return
        // }
        // setAlerta({...alerta, duration : ''})
    
    
        // if(infoActivity.season.split(' ').join('').length <= 0 ){
        //   setAlerta({...alerta,season : 'Selecciona un temporada'})
        //   return
        // }
        // setAlerta({...alerta, season : ''});
    
    
        // if(infoActivity.countryId.length <= 0){
        //   setAlerta({...alerta, countryId : "Selecciona al menos un pais"})
        //   return
        // }

        // setAlerta({...alerta, countryId : ''});
    
    
        setAlerta({
          name : '',
          difficulty : '',
          duration : '',
          season: '',
          countryId :'',
          
        });
        //Comprobar si existe para actulalizar
        const activityExist = activities.find(activity => activity.id === infoActivity.id);
        if(activityExist){
          //Actulizar el activity
         
          const url=  `http://localhost:3001/activities/${activityExist.id}`;
          try{
            const {data} = await axios.put(url, infoActivity);
            console.log(data)
            setExito(true)
            setInfoActivity({...infoActivity,
              name : '',
              difficulty : '',
              duration : '',
              season: '',
          
            });
  
            setTimeout(() => {
              setExito(false)
            }, 3000)
            //console.log(data)
          }
          catch(error){
            setExito(false) 
            console.log(error) ;
            setInfoActivity({...infoActivity,
              name : '',
              difficulty : '',
              duration : '',
              season: '',
    
              });
          }
        }
        else{
        
        const url = `http://localhost:3001/activities`;
        try{
          const {data} = await axios.post(url, infoActivity);

          setExito(true)
          setInfoActivity({...infoActivity,
            name : '',
            difficulty : '',
            duration : '',
            season: '',
        
          });

          setTimeout(() => {
            setExito(false)
          }, 3000)
          //console.log(data)
        }
        catch(error){
          setExito(false) 
          console.log(error) ;
          setInfoActivity({...infoActivity,
            name : '',
            difficulty : '',
            duration : '',
            season: '',
  
            });
        }
        }
        // console.log(activities)
        // console.log(infoActivity)
        //Enviar los datos del activity al server

       
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