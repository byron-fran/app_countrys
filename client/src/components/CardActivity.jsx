import React from 'react'
import FormActivity from './FormActivity';
import { NavLink } from 'react-router-dom';

const CardActivity = ({activity}) => {
  return (
    <div>
         <div>
            <h2>{activity.name}</h2>
            <p>{activity.difficulty}</p>
            <p>{activity.duration}</p>
            <NavLink to='/form'>
                   <button >Agregar nueva Actividad</button>
            </NavLink>
         
        </div>
    </div>
  )
}

export default CardActivity