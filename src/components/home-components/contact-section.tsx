import Container from "../global/container"
import Form from "./form"

const ContactSection = () => {
  return (
    <section className="w-full mt-[80px]">
      <Container className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="w-full flex flex-col gap-8">
          <h1 className="text-3xl lg:text-4xl font-semibold text-skin-text text-center lg:text-start">
            Vamos falar?
          </h1>
          <Form />
        </div>
        <div className="w-full h-full flex items-center justify-center mt-10 lg:mt-0">
          <h1 className="text-skin-text text-center lg:text-left text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            nam reiciendis nostrum quam eos placeat a id cumque voluptatum
            asperiores nihil consectetur eveniet.
          </h1>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
