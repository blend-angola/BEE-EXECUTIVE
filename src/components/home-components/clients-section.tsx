import Container from "../global/container"

const clients = [
  "/clients/1.png",
  "/clients/2.png",
  "/clients/3.png",
  "/clients/4.jpg",
  "/clients/5.png",
  "/clients/6.png",
]

const ClientsSection = () => {
  return (
    <section className="relative py-16 lg:mt-[40px]">
      <Container className="flex flex-col gap-4">
        <div className="absolute left-0 lg:h-[6vh] lg:w-[3vw] h-6 w-10 rounded-r-full bg-beeYellow-secondary" />

        <h1 className="text-beeYellow-secondary text-2xl lg:text-4xl font-bold lg:text-left text-center">
          Nossos clientes
        </h1>

        <div className="w-full p-8 lg:rounded-full rounded-lg mt-14 h-auto lg:h-36 overflow-hidden bg-beeWhiteSmoke grid grid-cols-2 place-items-center lg:flex items-center justify-center gap-4">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client}
              alt="logotipo-cliente"
              className="object-contain h-14 lg:w-28 w-20"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ClientsSection
