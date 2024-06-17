import React from "react"

type Props = {
  service: {
    id: number
    bg: string
    title: string
    img: string
    color: string
  }
}

const Service: React.FC<Props> = ({ service }) => {
  const { bg, color, img, title } = service
  return (
    <div
      style={{ backgroundColor: bg }}
      className="p-6 border-beeBlack-secondary w-full justify-start border rounded-xl flex items-center gap-4"
    >
      <img src={img} alt={title} className="object-contain h-14 w-20" />
      <h1 className="text-xl capitalize" style={{ color }}>
        {title}
      </h1>
    </div>
  )
}

export default Service
