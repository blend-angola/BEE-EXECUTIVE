import { DecorationMobile } from "./decoration"

const HistorySection = () => {
  return (
    <section className="relative w-full min-h-auto py-12 lg:py-20 lg:mt-[40px] flex flex-col lg:flex-row items-center lg:justify-start justify-center gap-8 lg:gap-0">
      <div className="relative w-full lg:w-[50vw] flex flex-col gap-4 text-center lg:text-left px-8 lg:pl-36">
        <div className="absolute lg:-left-0 lg:top-0 -top-16 left-1/2 -translate-x-1/2 bg-beeYellow-secondary lg:rounded-r-full rounded-b-full lg:h-[6vh] lg:w-[6vw] h-10 w-6" />
        <h1 className="text-3xl lg:text-4xl text-skin-title font-bold">
          A nossa história
        </h1>
        <p className="text-skin-text text-lg font-light">
          Uma agência de comunicação com 31 anos de existência em Angola,
          contudo inquieta, ágil e com foco em resultados. Trabalhamos com base
          em metodologias flexíveis, e equipas multidisciplinares prontas a dar
          asas à imaginação, e abraçarmos todos os desafios.
        </p>
        <p className="text-skin-text text-lg font-light">
          Aplicamos uma abordagem 360º, integrando Estratégia, Criatividade,
          Design e Inovação consolidado com o Marketing Digital em cada projeto
          que desenvolvemos.
        </p>
        <p className="text-skin-text text-lg font-light">
          O nosso objetivo como uma das mais antiga agências de comunicação em
          Angola, é criar comunicação diferenciada que deixe marcas nos
          consumidores, e garanta o retorno dos investimentos dos nossos
          clientes. Somos movidos pela eficiência e por resultados que criem
          buzz.
        </p>
      </div>

      <img
        src="buzz-decoration.png"
        className="object-cover w-[50vw] h-full hidden lg:block"
        alt=""
      />

      <DecorationMobile />
    </section>
  )
}

export default HistorySection
