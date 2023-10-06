/* eslint-disable react/prop-types */
import axios from "axios";
// import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CardActivity = ({ activity,setRefreshData, setInfoActivity , setAcivityExist, setFormModal,  setBottoFloat}) => {
 
  // const Navigate  = useNavigate();
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
    setFormModal(true);
    setBottoFloat(false);
    setAcivityExist(true);
    setInfoActivity(activity);
  }
  const { name, difficulty, duration} = activity
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