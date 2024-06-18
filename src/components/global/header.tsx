import Logo from "./logo"
import Buzz from "./buzz"
import Container from "./container"
import { Link, NavLink } from "react-router-dom"
import { HEADER_LINKS } from "../../constants"
import MobileButton from "../mobile/mobile-button"

const Header = () => {
  return (
    <header className="relative h-28 bg-beeBlack-primary border-b-[1px] border-b-beeBlack-secondary">
      <Container className="flex items-center h-full justify-between py-2">
        <MobileButton />
        <Logo className="w-56" />
        <ul className="lg:flex hidden items-center gap-10">
          {HEADER_LINKS.map((link, index) => (
            <li
              key={index}
              className={`${
                link.active &&
                "relative flex items-center rounded-b-full px-2 bg-beeYellow-secondary h-28 -top-2"
              }`}
            >
              <Link
                to={link.link}
                className={`${
                  link.active
                    ? "hover:text-beeWhiteSmoke text-beeBlack-secondary"
                    : "hover:text-beeYellow-secondary text-beeWhiteSmoke"
                } mt-4 text-base font-normal capitalize duration-200 transition-all ease-in-out`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Buzz />
      </Container>
    </header>
  )
}

export default Header
