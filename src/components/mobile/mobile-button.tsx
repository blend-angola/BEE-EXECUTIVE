import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { IoMdMenu } from "react-icons/io"
import { MdClose } from "react-icons/md"
import { HEADER_LINKS } from "../../constants"

const MobileButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="flex lg:hidden">
      <button
        onClick={handleOpen}
        className="text-beeYellow-secondary text-6xl"
      >
        <IoMdMenu />
      </button>
      {isOpen && (
        <motion.div
          initial={{ width: "0vw" }}
          whileInView={{ width: "100vw" }}
          transition={{ duration: 0.2, ease: "linear" }}
          className="bg-beeBlack-primary fixed top-0 w-full h-screen z-50 flex flex-col right-0 items-center p-8 justify-end"
        >
          <button
            onClick={handleOpen}
            className="text-5xl text-beeYellow-secondary self-end"
          >
            <MdClose />
          </button>
          <ul className="w-full h-full flex flex-col">
            {HEADER_LINKS.map((link, index) => (
              <li
                key={index}
                className="flex-1 text-3xl font-semibold text-beeYellow-secondary flex items-center justify-start capitalize"
              >
                <Link to={link.link}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  )
}

export default MobileButton
