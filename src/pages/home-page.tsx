import HeroSection from "../components/home-components/hero-section"
import TeamSection from "../components/home-components/team-section"
import ContactSection from "../components/home-components/contact-section"
import ClientsSection from "../components/home-components/clients-section"
import HistorySection from "../components/home-components/history-section"
import ServiceSection from "../components/home-components/service-section"
import ProjectsSection from "../components/home-components/projects-section"

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <HistorySection />
      <ClientsSection />
      <ServiceSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
    </main>
  )
}

export default HomePage
