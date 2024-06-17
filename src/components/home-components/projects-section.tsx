import Project from "./project"

const projects = [
  {
    id: 1,
    img: "/projects/p-bai.jpg",
  },
  {
    id: 2,
    img: "/projects/p-bcs.jpg",
  },
  {
    id: 3,
    img: "/projects/p-dstv.jpg",
  },
  {
    id: 4,
    img: "/projects/p-ekwanza.jpg",
  },
  {
    id: 5,
    img: "/projects/p-sonangol.jpg",
  },
  {
    id: 6,
    img: "/projects/p-unitel.jpg",
  },
]

const ProjectsSection = () => {
  return (
    <section className="w-full mt-[80px] h-screen">
      <div className="w-full grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
