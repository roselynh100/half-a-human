import { useContext } from 'react'
import Link from 'next/link'
import { Box, Button, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import HumanContext from '../src/components/HumanContext'
import HumanChart from '../src/components/HumanChart'

import styles from '../styles/Home.module.css'

const Human = () => {
  const [human, setHuman] = useContext(HumanContext)

  return (
    <Box className={styles.container}>
      <Typography>You&apos;ve created:</Typography>
      <Typography variant='h3'>{human?.name ? human.name : 'A nameless human'}</Typography>
      <Typography sx={{ my: 1, fontStyle: 'italic' }}>
        {human?.age && 'Age ' + human.age}
        {human?.age && human?.country ? ', ' : ''}
        {human?.country && 'from ' + human.country}
      </Typography>
      <Box sx={{ width: 500 }}>
        <HumanChart />
      </Box>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href='/'><Button variant='outlined'>Generate another human</Button></Link>
      </motion.div>
    </Box>
  )
}

export default Human