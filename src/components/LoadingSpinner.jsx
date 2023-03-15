import { motion } from 'framer-motion'
import Container from './Container'

const LoadingSpinner = () => {
  const variants = {
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 0.25,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  }
  const loadingTransition = {
    duration: 0.25,
    repeat: Infinity,
    repeatType: 'reverse',
  }

  return (
    <Container bgColor="bg-blue-100">
      <div className="flex">
        <motion.div
          animate={{ x: -80 }}
          transition={loadingTransition}
          className="h-1 w-16 rounded-full bg-yellow-500"
        />
        <motion.div
          animate={{ x: 80 }}
          transition={loadingTransition}
          className="h-1 w-16 rounded-full bg-red-500"
        />
      </div>
      <div className="absolute flex">
        <motion.div
          animate="rotate"
          variants={variants}
          className="h-1 w-14 rounded-full bg-blue-300"
        >
          <motion.div
            animate="rotate"
            variants={variants}
            className="h-1 w-14 rounded-full bg-blue-400"
          />
        </motion.div>
      </div>
    </Container>
  )
}

export default LoadingSpinner
