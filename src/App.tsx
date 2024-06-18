import { Outlet } from "react-router-dom"
import Footer from "./components/global/footer"
import Header from "./components/global/header"
import { useTheme } from "./context/theme-context"

function App() {
  const { theme } = useTheme()
  return (
    <main
      className={`w-full flex flex-col font-Poppins bg-beeBg min-h-screen ${theme}`}
    >
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
