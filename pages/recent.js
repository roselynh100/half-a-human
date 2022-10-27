import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Header from '../src/components/Header'
import HumanCard from '../src/components/HumanCard'

import { theme } from '../utils/theme'
import styles from '../styles/Home.module.css'

const Recent = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const getHumans = async () => {
      const humanRes = await fetch('http://localhost:3000/api/humans')
      setData(await humanRes.json())
    }
    getHumans()
  }, [])

  console.log('data:)', data)

  return (
    <Box className={styles.container}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Link href='/'>
          <ChevronLeftIcon fontSize='large' sx={{ color: theme.palette.primary.main, cursor: 'pointer' }} />
        </Link>
        <Header />
        <ChevronLeftIcon fontSize='large' sx={{ color: 'white' }} />
      </Box>
      <Typography variant='h5' sx={{ textAlign: 'center', mb: 2 }}>View the most recent humans!</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', width: 700 }}>
        {data.map((human, index) => {
          return <HumanCard key={index} name={human.name} age={human.age} country={human.country} traits={human.traits} />
        })}
      </Box>

    </Box>
  )
}

export default Recent