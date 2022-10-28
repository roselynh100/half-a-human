import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import styles from './Loading.module.css'

const Loading = () => {

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1
      }
    },
    end: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const loadingCircleVariants = {
    start: {
      y: '0%'
    },
    end: {
      y: '150%'
    }
  }

  const loadingCircleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
  }

  return (
    <Box className={styles.loadingBackground}>
      <motion.div className={styles.loadingContainer}
        variants={loadingContainerVariants}
        initial='start'
        animate='end'
      >
        <motion.span className={styles.loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span className={styles.loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span className={styles.loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </Box>
  )
}

export default Loading