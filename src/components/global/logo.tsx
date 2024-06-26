import React from "react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { useTheme } from "../../context/theme-context"

type Props = {
  className?: string
}

const Logo: React.FC<Props> = ({ className }) => {
  const { theme } = useTheme()

  const logo =
    theme === "dark"
      ? "/logotipo/logotipo-texto.png"
      : "/logotipo/logotipo-texto-black.png"

  return (
    <Link
      to="/"
      className={twMerge(
        "flex-col items-center justify-center lg:block hidden w-44",
        className
      )}
    >
      <div className="relative h-8 w-full">
        <img
          src={logo}
          alt="logotipo"
          className="absolute transition-all duration-200 ease-in-out inset-0 w-full h-full object-contain"
        />
      </div>

      <p className="text-beeYellow-secondary text-center text-sm w-full">
        Buzzing ideias.
      </p>
    </Link>
  )
}
export default Logo
