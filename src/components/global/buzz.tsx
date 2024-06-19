import { Link } from "react-router-dom"

const Buzz = () => {
  return (
    <Link to="/buzz" className="relative h-10 w-24">
      <img
        alt="logotipo"
        src="/logotipo/buzz.png"
        className="absolute inset-0 w-full h-full object-contain"
      />
    </Link>
  )
}

export default Buzz
