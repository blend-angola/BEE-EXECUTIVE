import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { MdClose } from "react-icons/md"
import { HEADER_LINKS } from "../../constants"

type Props = {
  handleOpen: () => void
}

const MobileMenu: React.FC<Props> = ({ handleOpen }) => {
  return (
    <motion.div
      initial={{ width: "0vw" }}
      whileInView={{ width: "100vw" }}
      transition={{ duration: 0.2, ease: "linear" }}
      className="bg-beeBg fixed top-0 w-full h-screen z-50 flex flex-col right-0 items-center p-8 justify-end"
    >
      <button
        onClick={handleOpen}
        className="text-5xl text-beeYellow-secondary self-end"
      >
        <MdClose />
      </button>
      <ul className="w-full h-full flex flex-col py-10 px-8">
        {HEADER_LINKS.map((link, index) => (
          <li
            key={index}
            className={`flex-1 text-3xl ${
              index !== HEADER_LINKS.length - 1 && "border-b border-beeBorder"
            } font-semibold text-skin-title flex items-center justify-start capitalize`}
          >
            <Link to={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default MobileMenu
