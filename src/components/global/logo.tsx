import React from "react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

type Props = {
  className?: string
}

const Logo: React.FC<Props> = ({ className }) => {
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
          src="/logotipo/logotipo-texto.png"
          alt="logotipo"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      <p className="text-beeYellow-secondary text-center text-sm w-full">
        Buzzing ideias.
      </p>
    </Link>
  )
}
export default Logo
