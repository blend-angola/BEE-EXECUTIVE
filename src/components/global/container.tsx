import React from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={twMerge("w-full lg:w-[85vw] mx-auto px-4 lg:px-6", className)}>
      {children}
    </div>
  )
}

export default Container
