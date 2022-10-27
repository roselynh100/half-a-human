import { useContext, useEffect } from 'react'
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
      <Typography variant='h3' sx={{ mb: 1 }}>{human?.name ? human.name : 'A nameless human'}</Typography>
      <Typography sx={{ mb: 4, fontStyle: 'italic' }}>
        {human?.age && 'Age ' + human.age}
        {human?.age && human?.country ? ', ' : ''}
        {human?.country && 'from ' + human.country}
      </Typography>
      <Box sx={{ width: 450, mt: -5, mb: -3 }}>
        <HumanChart />
      </Box>
      { human.traits ? <Typography sx={{ mt: 1 }}>Everything else is up to you!</Typography> : <Typography sx={{ mt: 5 }}>Everything else is up to you!</Typography>}
      <Box sx={{ mt: 2 }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href='/'><Button variant='outlined'>Generate another human</Button></Link>
        </motion.div>
      </Box>
    </Box>
  )
}

export default Human