import "./index.css"
import React from "react"
import App from "./App.tsx"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import HomePage from "./pages/home-page.tsx"
import NotFoundPage from "./pages/not-found-page.tsx"
import ThemeProvider from "./context/theme-context.tsx"
import PortfolioPage from "./pages/portfolio-page.tsx"
import TeamPage from "./pages/team-page.tsx"
import BuzzPage from "./pages/buzz-page.tsx"
import ContactPage from "./pages/contact-page.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "equipa",
        element: <TeamPage />,
      },
      {
        path: "buzz",
        element: <BuzzPage />,
      },
      {
        path: "contactos",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
