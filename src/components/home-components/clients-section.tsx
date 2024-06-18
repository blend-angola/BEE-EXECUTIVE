import { motion } from "framer-motion"
import Container from "../global/container"

const clients = [
  "/clients/1.png",
  "/clients/2.png",
  "/clients/3.png",
  "/clients/4.jpg",
  "/clients/5.png",
  "/clients/6.png",
]

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
      ease: "linear",
      repeat: Infinity,
      duration: 5,
      delay: (5 / totalClients) * (totalClients - index + 1),
    },
  }),
}

const ClientsSection = () => {
  const totalClients = clients.length
  return (
    <section className="relative py-16 lg:mt-[40px]">
      <Container className="flex flex-col gap-4">
        <div className="absolute left-0 lg:h-[6vh] lg:w-[3vw] h-6 w-10 rounded-r-full bg-beeYellow-secondary" />

        <h1 className="text-beeYellow-secondary text-2xl lg:text-4xl font-bold lg:text-left text-center">
          Nossos clientes
        </h1>

        <div className="lg:w-[80vw] w-full p-8 lg:rounded-full rounded-lg mt-14 h-32 overflow-hidden lg:h-36 bg-beeWhiteSmoke flex relative lg:flex justify-center">
          {clients.map((client, index) => (
            <motion.img
              custom={{ index, totalClients }}
              variants={animationVariant}
              animate="animate"
              key={index}
              src={client}
              alt="logotipo-cliente"
              className="absolute object-contain left-[100%] h-14 md:w-28 w-16"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ClientsSection
