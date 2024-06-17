import Service from "./service"
import { SERVICES } from "../../constants"
import Container from "../global/container"

const ServiceSection = () => {
  return (
    <section className="relative w-full mt-[80px]">
      <Container className="flex flex-col gap-4">
        <div className="absolute left-0 lg:h-[6vh] lg:w-[3vw] h-10 w-10 rounded-r-full bg-beeYellow-secondary" />
        <h1 className="text-beeYellow-secondary text-4xl font-bold lg:text-left text-center">
          O que fazemos?
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 lg:gap-4">
          <p className="lg:col-span-2 text-center lg:text-left text-beeWhiteSmoke text-base text-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            rem dolorum provident quaerat harum accusantium possimus expedita
            ducimus atque? Quis minima voluptas itaque voluptatibus delectus,
            eveniet quo vitae asperiores. Ipsam
          </p>
          {SERVICES.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServiceSection
