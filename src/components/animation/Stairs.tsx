import { animate, motion} from 'framer-motion'

const stair = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%","0%"],
  },
}

const reverseIndex = (index: number) => {
  const total = 7
  return total - index - 1;
}

const Stairs = () => {
  return (
    <>
      {[...Array(7)].map((_, index) => {
        return (
        <motion.div
          key={index}
          variants={stair}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            delay: reverseIndex(index) * 0.1,
            ease: "easeInOut",
          }}
          className="h-full w-full bg-white relative"
        />
        )}
      )}
    </>
  )
}

export default Stairs