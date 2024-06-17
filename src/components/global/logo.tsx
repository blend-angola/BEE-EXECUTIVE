import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/" className="relative lg:block hidden h-16 w-52">
      <img
        src="/logotipo/logotipo-texto.png"
        alt="logotipo"
        className="absolute inset-0 w-full h-full object-contain"
      />
    </Link>
  )
}
export default Logo
