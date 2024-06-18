import Container from "../global/container"

const teamMembers = [
  {
    id: 1,
    img: "/team/1.jpg",
  },
  {
    id: 2,
    img: "/team/2.jpg",
  },
  {
    id: 3,
    img: "/team/3.jpg",
  },
  {
    id: 4,
    img: "/team/4.jpg",
  },
  {
    id: 5,
    img: "/team/5.jpg",
  },
  {
    id: 6,
    img: "/team/6.jpg",
  },
  {
    id: 7,
    img: "/team/1.jpg",
  },
  {
    id: 8,
    img: "/team/2.jpg",
  },
]

const TeamSection = () => {
  return (
    <section className="w-full lg:mt-[80px] min-h-screen flex flex-col items-center justify-between lg:gap-2">
      <Container>
        <div className="absolute left-0 lg:h-[6vh] lg:w-[3vw] h-6 w-10 rounded-r-full bg-beeYellow-secondary" />
        <h1 className="text-beeYellow-secondary text-2xl lg:text-4xl font-bold lg:text-left text-center">
          Nossa Equipa
        </h1>
        <p className="text-beeWhiteSmoke leading-normal my-12 text-center lg:w-[60vw] w-full lg:text-left">
          Uma agência de comunicação com 31 anos de existência em Angola,
          contudo inquieta, ágil e com foco em resultados. Trabalhamos com base
          em metodologias flexíveis, e equipas multidisciplinares prontas a dar
          asas à imaginação, e abraçamos todos os desafios.
        </p>
      </Container>

      <div className="grid grid-cols-2 bg-red-400 md:grid-cols-3 w-full  lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative w-full h-full">
            <img
              src={member.img}
              alt="projeto"
              className="w-full h-full obect-contain aspect-square"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
