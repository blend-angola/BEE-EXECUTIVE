import { Outlet } from "react-router-dom"
import Footer from "./components/global/footer"
import Header from "./components/global/header"

function App() {
  return (
    <main className="w-full flex flex-col font-Poppins bg-beeBlack-primary">
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
