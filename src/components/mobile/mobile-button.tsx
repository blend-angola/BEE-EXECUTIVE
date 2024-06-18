import { useState } from "react"
import MobileMenu from "./mobile-menu"
import { IoMdMenu } from "react-icons/io"

const MobileButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="flex lg:hidden">
      <button
        onClick={handleOpen}
        className="text-beeYellow-secondary text-5xl"
      >
        <IoMdMenu />
      </button>
      {isOpen && <MobileMenu handleOpen={handleOpen} />}
    </div>
  )
}

export default MobileButton
