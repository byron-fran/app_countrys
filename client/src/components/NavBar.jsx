import '../styles/header.css'
import { useNavigate } from "react-router-dom"
// eslint-disable-next-line react/prop-types
const NavBar = () => {
  const Navigate = useNavigate()
  return (
    <div className="bg-nav" onClick={() => Navigate('/')}>
      <div className='bg-header'>
          <h1 className="text-h1">Welcome to world</h1>
      </div>
     
    </div>

  )
}

export default NavBar;
