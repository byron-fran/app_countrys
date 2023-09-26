
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CardActivity = ({activity}) => {
    // eslint-disable-next-line react/prop-types
    const {name,difficulty ,duration} = activity
  return (
    <div>
         <div>
            <h2>{name}</h2>
            <p>{difficulty}</p>
            <p>{duration}</p>
            <NavLink to='/form'>
                   <button >Agregar nueva Actividad</button>
            </NavLink>
         
        </div>
    </div>
  )
}

export default CardActivity