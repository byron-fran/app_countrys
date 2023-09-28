
// eslint-disable-next-line react/prop-types
const CardActivity = ({ activity }) => {
  // eslint-disable-next-line react/prop-types
  const { name, difficulty, duration } = activity
  return (
    <div className="card_activity">
      <div>
        <h2>{name}</h2>
        <div className="info_activity">
           <p> dificultad: {difficulty}</p>
            <p>Duracion: {duration} hrs.</p>
        </div>
       


      </div>
    </div>
  )
}

export default CardActivity