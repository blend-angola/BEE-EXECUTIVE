import Logo from "./logo"
import Buzz from "./buzz"
import Container from "./container"
import { NavLink } from "react-router-dom"
import { HEADER_LINKS } from "../../constants"
import MobileButton from "../mobile/mobile-button"

const Header = () => {
  const isLinkActive =
    "text-beeYellow-primary text-lg font-semibold capitalize hover:text-beeYellow-secondary duration-200 transition-all ease-in-out"
  const isNotLinkActive =
    "text-beeWhiteSmoke text-lgfont-semibold  capitalize hover:text-beeYellow-secondary duration-200 transition-all ease-in-out"

  return (
    <header className="relative h-20 bg-beeBlack-primary border-b-[1px] border-b-beeBlack-secondary">
      <Container className="flex items-center h-full justify-between py-2">
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
