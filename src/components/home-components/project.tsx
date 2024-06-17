import React from "react"

type Props = {
  project: {
    id: number
    img: string
  }
}

const Project: React.FC<Props> = ({ project }) => {
  const { img } = project
  return (
    <div className="relative w-full h-full lg:opacity-60 lg:hover:opacity-100 transition-all duration-200 ease-in-out cursor-pointer">
      <img
        src={img}
        alt="projeto"
        className="w-full h-full obect-contain aspect-auto"
      />
    </div>
  )
}

export default Project
