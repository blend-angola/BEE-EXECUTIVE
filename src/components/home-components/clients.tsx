import { motion } from "framer-motion"
import { useMemo } from "react"

type Props = {
  totalClients: number
  clients: string[]
}

const ClientsDesktop: React.FC<Props> = ({ totalClients, clients }) => {
  const animationVariant = {
    animate: ({
      index,
      totalClients,
    }: {
      index: number
      totalClients: number
    }) => ({
      left: -120,
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        delay: (5 / totalClients) * (totalClients - index + 1),
      },
    }),
  }

  const memoClients = useMemo(() => {
    return clients.map((client, index) => (
      <motion.img
        key={index}
        src={client}
        loading="lazy"
        animate="animate"
        alt="logotipo-cliente"
        variants={animationVariant}
        custom={{ index, totalClients }}
        className="absolute object-contain left-[100%] h-28 w-36"
      />
    ))
  }, [clients])

  return (
    <div className="w-[80vw] p-8 rounded-full mt-14 overflow-hidden h-36 bg-white relative hidden lg:flex justify-center">
      {memoClients}
    </div>
  )
}

const ClientsMobile: React.FC<Props> = ({ clients }) => {
  const memoClients = useMemo(() => {
    return clients.map((client, index) => (
      <motion.img
        key={index}
        src={client}
        loading="lazy"
        animate="animate"
        alt="logotipo-cliente"
        className="object-contain h-20 w-16"
      />
    ))
  }, [clients])

  return (
    <div className="w-full p-8 rounded-lg mt-14 h-32 bg-white lg:hidden grid grid-cols-3 place-items-center">
      {memoClients}
    </div>
  )
}

export { ClientsMobile, ClientsDesktop }
