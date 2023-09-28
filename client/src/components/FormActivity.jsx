import { useState, Fragment, useEffect } from "react"
import { useSelector } from "react-redux";
import '../styles/form.css'

import axios from "axios";
const FormActivity = () => {
  const countries = useSelector(state => state.listCountries);

  //const [marcado, setMarcado] = useState(false)
  const [idCountries, setIdCountries] = useState([]);
  const [exito, setExito] = useState(false)
  const [alerta, setAlerta] = useState ({
    name : '',
    difficulty : '',
    duration : '',
    season: '',
    countryId :''
  })


  const [infoActivity, setInfoActivity] = useState({
      name : '',
      difficulty : '',
      duration : '',
      season: '',
      countryId :[]
  })
 
 useEffect(() => {
    if(idCountries.length> 0){
       setInfoActivity({...infoActivity, countryId : idCountries}) 
    }
 }, [idCountries]);

  const handlerSendInfo = async e => {
    e.preventDefault();
    //console.log(idsc)
    //hacer Valiaciones
    if(infoActivity.name.split(' ').join('').length <= 0){
      setAlerta({...alerta, name : 'Este campo no debe ir vacio'})
      return
    }
    setAlerta({...alerta, name : ''})

    if(infoActivity.difficulty.split(' ').join('').length <= 0 ){
      setAlerta({...alerta, difficulty : "Este campo no debe ir vacio"})
      return
    }
    if(!Number(infoActivity.difficulty)){
      setAlerta({...alerta, difficulty : "debe ser un numero valido"});
      return
    }
    setAlerta({...alerta, difficulty : ""});

    if(parseInt(infoActivity.difficulty) <=0 || parseInt( infoActivity.difficulty) >5){
      setAlerta({...alerta, difficulty : "Debe ser un número entre 1 y 5"})
      return
    }
    setAlerta({...alerta, difficulty : ""});


    if(infoActivity.duration.split(' ').join('').length <= 0){
      setAlerta({...alerta, duration : 'Este campo no debe ir vacio'})
      return
    }
    setAlerta({...alerta, duration : ''})
    if(!Number(infoActivity.duration)){
      setAlerta({...alerta,duration : "debe ser un numero valido"});
      return
    }
    setAlerta({...alerta, duration : ''})

    if(parseInt(infoActivity.duration) <=0 || parseInt(infoActivity.duration ) > 12 ){
      setAlerta({...alerta, duration : 'Debe ser un numero etre 1 y 12'})
      return
    }
    setAlerta({...alerta, duration : ''})


    if(infoActivity.season.split(' ').join('').length <= 0 ){
      setAlerta({...alerta,season : 'Selecciona un temporada'})
      return
    }
    setAlerta({...alerta, season : ''});


    if(infoActivity.countryId.length <= 0){
      setAlerta({...alerta, countryId : "Selecciona al menos un pais"})
      return
    }
    setAlerta({...alerta, countryId : ''});


    setAlerta({
      name : '',
      difficulty : '',
      duration : '',
      season: '',
      countryId :''
    })
    //Enviar los datos del activity al server
    const url = `http://localhost:3001/activities`;
    try{
      const {data} = await axios.post(url, infoActivity);
      setExito(true)
      setInfoActivity({...infoActivity,
        name : '',
        difficulty : '',
        duration : '',
        season: '',
        countryId :[]})
      setTimeout(() => {
        setExito(false)
      }, 3000)
      console.log(data)
    }
    catch(error){
      setExito(false) 
      console.log(error) }
   


  };




  const hanlderSelectValue = e => {
    const id = e.target.value;
    const idFound = idCountries.find(ids => ids === id)
    if(!idFound){
      setIdCountries([...idCountries,id]);
      //setMarcado(true)
     //console.log(infoActivity)
     return
    }
   

   // idsc.filter(i => i !== idFound)
  }
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