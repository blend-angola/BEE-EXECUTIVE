import { MdLightMode } from "react-icons/md"
import { MdNightlightRound } from "react-icons/md"

import { useTheme } from "../../context/theme-context"

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={() => toggleTheme()}>
      {theme === "dark" ? (
        <MdLightMode className="text-xl size-10 border border-beeBorder p-2 rounded-lg  text-beeYellow-secondary" />
      ) : (
        <MdNightlightRound className="text-xl size-10 border border-black/10 p-2 rounded-lg shadow-beeBlack-secondary  text-black"  />
      )}
    </button>
  )
}

export default ThemeButton
