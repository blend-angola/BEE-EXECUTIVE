import { useState } from "react"
import { IoMdMenu } from "react-icons/io"
import { MdClose } from "react-icons/md"

import { AnimatePresence, motion } from "framer-motion"

const MobileButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="flex lg:hidden">
      <button
        onClick={handleOpen}
        className="text-beeYellow-secondary text-3xl"
      >
        <IoMdMenu />
      </button>
      {isOpen && (
        <motion.div className="absolute top-0 w-full transition-all duration-200 ease-linear right-0 bg-black/70 h-screen z-10">
          <motion.div
            initial={{ width: "0vw" }}
            whileInView={{ width: "85vw" }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="bg-beeBlack-primary h-full absolute right-0 flex items-start p-4 justify-end"
          >
            <button
              onClick={handleOpen}
              className="text-3xl text-beeYellow-secondary"
            >
              <MdClose />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default MobileButton
