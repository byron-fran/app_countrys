import { Fragment, useEffect } from "react"
import { useSelector } from "react-redux";
import '../styles/form.css'

import useFormValidate from "../hooks/useFormValidate";
import useSelectValidate from "../hooks/useSelectValidate";
const FormActivity = () => {

  const countries = useSelector(state => state.listCountries);

  const arrayIdCountries = []
  const objActivity = {
    name : '',
    difficulty : '',
    duration : '',
    season: '',
    countryId :[]
    } 

  const objAlerta = {
   name : '',
   difficulty : '',
   duration : '',
   season: '',
   countryId :''
  }
  const { infoActivity,setInfoActivity, alerta,handlerSendInfo,exito} = useFormValidate(objActivity, objAlerta);
  const { idCountries, hanlderSelectValue} = useSelectValidate(arrayIdCountries)
  useEffect(() => {
     if(idCountries.length> 0){
        setInfoActivity({...infoActivity, countryId : idCountries}) 
     }
  }, [idCountries]);


  return (
    <>
      {exito && (<p className="success">Se agregó nueva activiada con exito</p>)}
      <div className="container">
   
      <form className="form_container" onSubmit={handlerSendInfo}>
        <div>
          {alerta.name && (<p className="alerta">{alerta.name}</p>)}
          <label htmlFor="nombre">Nombre de la actividad</label>
          <input  type="text" id="nombre" placeholder="Ej. Escalar el imalaya" 
            value={infoActivity.name}
            onChange={e => setInfoActivity({...infoActivity, name : e.target.value})}
          />
        </div>
        <div>
        {alerta.difficulty && (<p className="alerta">{alerta.difficulty}</p>)}
          <label htmlFor="dificultad">Dificultad</label>
          <input type="text" id="dificultad" placeholder="Ej. 1-5"
          value={infoActivity.difficulty}
          onChange={e => setInfoActivity({...infoActivity, difficulty : e.target.value})}
           />
        </div>
        <div>
        {alerta.duration && (<p className="alerta">{alerta.duration}</p>)}
          <label htmlFor="duracion">Duracion</label>
          <input type="text" id="duracion" placeholder="Ej. 5 horas, max-10"
          value={infoActivity.duration}
          onChange={e => setInfoActivity({...infoActivity, duration: e.target.value})} />
         
        </div>

        <div className="div_select">
        {alerta.season && (<p className="alerta">{alerta.season}</p>)}
          <label htmlFor="season">Temporada</label>
          <select name="season" id="season" 
          value={infoActivity.season}
          onChange={e => setInfoActivity({...infoActivity, season : e.target.value})}>
            <option value="">--selecciona la Temporada--</option>
            <option value="Winter">Winter</option>
            <option value="sumner">sumner</option>
            <option value="Spring">Spring</option>
            <option value="Autumn">Autumn</option>
           
          </select>
        </div>
        <div  className="div_select">
        {alerta.countryId && (<p className="alerta">{alerta.countryId}</p>)}
            <select name="" id="" onChange={ hanlderSelectValue}>
              <option>--Selecciona uno o más Paises--</option>        
                {countries.length > 0 && countries.map(country => (
                  <Fragment key={country.id}>
                   <option value={country.id}  >{country.name}</option>
                  </Fragment>
               
              ))}
      
            </select>
        </div>
        <div>
          <button className="btn_add" type="submit">Agregar Actividad </button>
        </div>
      </form>
      
    </div>
    </>

  )
}

export default FormActivity