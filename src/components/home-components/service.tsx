import { motion } from "framer-motion"
import React, { useState } from "react"

type Props = {
  service: {
    id: number
    bg: string
    title: string
    img: string
    imgHover: string
  }
}

const Service: React.FC<Props> = ({ service }) => {
  const { img, imgHover, title } = service
  const [image, setImage] = useState(img)

  function mouseEnter() {
    setImage(imgHover)
  }
  function mouseLeave() {
    setImage(img)
  }
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="p-6 hover:bg-beeYellow-secondary transition-all ease-in-out duration-200 border border-beeBorder w-full lg:justify-start justify-center rounded-xl flex lg:flex-row flex-col items-center gap-4"
    >
      <img src={image} alt={title} className="object-contain h-14 w-20" />
      <h1 className="text-xl text-center lg:text-left text-skin-text capitalize">
        {title}
      </h1>
    </div>
  )
}

export default Service
