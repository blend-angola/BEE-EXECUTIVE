import { Link, NavLink } from "react-router-dom"
import { HEADER_LINKS } from "../../constants"
import Container from "./container"
import MobileButton from "../mobile/mobile-button"

const Header = () => {
  const isLinkActive =
    "text-beeYellow-primary text-lg font-semibold capitalize hover:text-beeYellow-primary duration-200 transition-all ease-in-out"
  const isNotLinkActive =
    "text-beeWhiteSmoke text-lgfont-semibold  capitalize hover:text-beeYellow-primary duration-200 transition-all ease-in-out"

  return (
    <header className="relative bg-beeBlack-primary">
      <Container className="flex items-center justify-between py-4">
        <MobileButton />
        <Logo />
        <ul className="lg:flex hidden items-center gap-10">
          {HEADER_LINKS.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive ? `${isLinkActive}` : `${isNotLinkActive}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Buzz />
      </Container>
    </header>
  )
}

export default Header

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

const Buzz = () => {
  return (
    <Link to="/" className="relative h-8 lg:h-10 w-16">
      <img
        src="/logotipo/buzz.png"
        alt="logotipo"
        className="absolute inset-0 w-full h-full object-contain"
      />
    </Link>
  )
}
