import React from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={twMerge("w-full lg:w-[1200px] mx-auto px-8 lg:px-0", className)}>
      {children}
    </div>
  )
}

export default Container
