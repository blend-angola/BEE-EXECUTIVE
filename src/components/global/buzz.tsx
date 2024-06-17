import { Link } from "react-router-dom"

const Buzz = () => {
  return (
    <Link to="/" className="relative h-7 w-16">
      <img
        alt="logotipo"
        src="/logotipo/buzz.png"
        className="absolute inset-0 w-full h-full object-contain"
      />
    </Link>
  )
}

export default Buzz
