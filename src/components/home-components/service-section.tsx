import Service from "./service"
import { SERVICES } from "../../constants"
import Container from "../global/container"

const ServiceSection = () => {
  return (
    <section className="relative w-full mt-[80px]">
      <Container className="flex flex-col gap-4">
        <div className="absolute lg:left-0 -top-20 lg:top-0 left-1/2 -translate-x-1/2 lg:h-[6vh] lg:w-[6vw] h-10 w-6 rounded-b-full lg:rounded-r-full bg-beeYellow-secondary" />

        <h1 className="text-skin-title text-2xl lg:text-4xl font-bold lg:text-left text-center">
          O que fazemos?
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 lg:gap-4">
          <p className="lg:col-span-2 text-center lg:text-left text-skin-text text-base text-normal">
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
