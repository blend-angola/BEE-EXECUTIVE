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
    <section className="w-full bg-indigo-600 mt-[80px] min-h-screen flex flex-col items-center justify-between gap-2">
      <Container className="h-[40vh]">
        <div className="absolute left-0 lg:h-[6vh] lg:w-[3vw] h-10 w-10 rounded-r-full bg-beeYellow-secondary" />
        <h1 className="text-beeYellow-secondary text-4xl font-bold lg:text-left text-center">
          Nossa Equipa
        </h1>
        <p className="text-beeWhiteSmoke my-12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          possimus officiis sint. Fugit officiis ab quibusdam amet iste ex,
          animi veniam dolorem commodi sed maxime nisi dicta enim non blanditiis
          consectetur sint laborum ad tempore perspiciatis modi debitis minima
          velit placeat. Omnis commodi deleniti eaque animi ratione, id pariatur
          sapiente perspiciatis qui veniam eos, voluptatem, eius expedita minus!
          Ea nemo dolore tenetur, eum non recusandae voluptatum fuga libero odio
          explicabo quos quas esse mollitia, iure impedit. Sapiente quae odit
          inventore, quasi corrupti debitis provident quibusdam perferendis
          deleniti iure sequi ullam eligendi iusto dolorem commodi nam dicta
          animi modi expedita labore.
        </p>
      </Container>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative w-full h-full">
            <img
              src={member.img}
              alt="projeto"
              className="w-full h-full obect-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
