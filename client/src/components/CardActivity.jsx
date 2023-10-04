import axios from "axios";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import useFormValidate from "../hooks/useFormValidate";

// eslint-disable-next-line react/prop-types
const CardActivity = ({ activity,setRefreshData,infoActivity, setInfoActivity ,acivityExist, setAcivityExist}) => {
 
  const Navigate  = useNavigate();
  // eslint-disable-next-line react/prop-types

  const deleteActivity = async id => {
    const url = `http://localhost:3001/activities/${id}`;
    try{
      setRefreshData(!true)
      const {data} = await axios.delete(url);
      //console.log('ya se cargo...')
      //setRefreshData(true)
      setRefreshData(!false)
      return data
    }
    catch(error){console.log(error)}
  }
  const handleDelete = async (id) => {
    await deleteActivity(id)
  }
  const handleUpdate = () => {
   
    Navigate('/form');
    console.log('actualizando')
    //console.log(activity)
    setAcivityExist(true)
    setInfoActivity(activity)
  }
  const { name, difficulty, duration, id} = activity
  return (
    <div className="card_activity">
      <div>
        <h2>{name}</h2>
        <div className="info_activity">
           <p> dificultad: {difficulty}</p>
           <p>Duracion: {duration} hrs.</p>
        </div>
        <div className="info_botones">
          <button onClick={() => {
           
            handleDelete(activity.id)}}>Eliminar</button>
          <button onClick={handleUpdate}>Actualizar</button>
        </div>
      </div>
    </div>
  )
}

export default CardActivity