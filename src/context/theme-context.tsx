import { createContext, useContext, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

type ThemeProviderProps = {
  children: React.ReactNode
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const currentTheme = localStorage.getItem("theme") as Theme
    return currentTheme ? currentTheme : "light"
  })

  function toggleTheme() {
    setTheme((current: Theme) => {
      const newTheme = current === "dark" ? "light" : "dark"
      localStorage.setItem("theme", newTheme as Theme)
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => {
  return useContext(ThemeContext)
}
