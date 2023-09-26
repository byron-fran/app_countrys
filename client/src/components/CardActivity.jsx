
// eslint-disable-next-line react/prop-types
const CardActivity = ({ activity }) => {
  // eslint-disable-next-line react/prop-types
  const { name, difficulty, duration } = activity
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <p>{difficulty}</p>
        <p>{duration}</p>


      </div>
    </div>
  )
}

export default CardActivity