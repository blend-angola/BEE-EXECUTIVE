import React from "react"

type Props = {
  service: {
    id: number
    bg: string
    title: string
    img: string
  }
}

const Service: React.FC<Props> = ({ service }) => {
  const { img, title } = service
  return (
    <div className="p-6 hover:bg-beeYellow-secondary transition-all ease-in-out duration-200 border border-beeBorder w-full lg:justify-start justify-center rounded-xl flex lg:flex-row flex-col items-center gap-4">
      <img src={img} alt={title} className="object-contain h-14 w-20" />
      <h1 className="text-xl text-center lg:text-left text-skin-text capitalize">{title}</h1>
    </div>
  )
}

export default Service
