import { memo } from "react"
import Container from "../global/container"
import { ClientsDesktop, ClientsMobile } from "./clients"

const clients = [
  "/clients/1.png",
  "/clients/2.png",
  "/clients/3.png",
  "/clients/4.jpg",
  "/clients/5.png",
  "/clients/6.png",
]

const MemoClientDesktop = memo(ClientsDesktop)
const MemoClientMobile = memo(ClientsMobile)

const ClientsSection = () => {
  const totalClients = clients.length
  return (
    <section className="relative py-8 lg:mt-[40px] border-y border-y-beeBorder">
      <Container className="flex flex-col gap-4 my-10">
        <div className="absolute lg:left-0 top-0 left-1/2 -translate-x-1/2 lg:h-[6vh] lg:w-[3vw] h-10 w-6 lg:rounded-r-full rounded-b-full bg-beeYellow-secondary" />

        <h1 className="text-skin-title text-3xl lg:text-4xl font-bold lg:text-left text-center">
          Nossos clientes
        </h1>
        <MemoClientDesktop clients={clients} totalClients={totalClients} />
        <MemoClientMobile clients={clients} totalClients={totalClients} />
      </Container>
    </section>
  )
}

export default ClientsSection
