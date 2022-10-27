import { useState, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Header from '../src/components/Header'
import styles from '../styles/Home.module.css'

import HumanContext from '../src/components/HumanContext'
import { theme } from '../utils/theme'

export default function Home() {

  const router = useRouter()

  const [name, checkName] = useState(true)
  const [age, checkAge] = useState(true)
  const [country, checkCountry] = useState(true)
  const [traits, checkTraits] = useState(true)
  const [traitsNum, setTraitsNum] = useState(5)

  const [human, setHuman] = useContext(HumanContext)  

  const generate = async () => {
    let generatedHuman = {}
    if (!name && !age && !country && !traits) return alert('Please pick something to generate!')
    if (name) {
      const nameRes = await fetch('/api/name')
      const data = await nameRes.json()
      generatedHuman.name = data.name
    }
    if (age) generatedHuman.age = Math.floor(Math.random() * 75) + 5
    if (country) {
      if (generatedHuman.name) {
        const countryRes = await fetch('/api/country', {
          method: 'POST',
          body: JSON.stringify({ name: generatedHuman.name })
        })
        const data = await countryRes.json()
        generatedHuman.country = data.name.common
      }
      else {
        const countryRes = await fetch('/api/country')
        const data = await countryRes.json()
        generatedHuman.country = data.name.common
      }
    }
    if (traits) {
      const traitsRes = await fetch('/api/traits', {
        method: 'POST',
        body: JSON.stringify({ number: traitsNum })
      })
      const data = await traitsRes.json()
      generatedHuman.traits = data
    }
    console.log('our human is:', generatedHuman)
    setHuman(generatedHuman)
    await fetch('/api/humans', {
      method: 'POST',
      body: JSON.stringify({ human: generatedHuman })
    })
    router.push('/human')
  }

  return (
    <Box className={styles.container}>
      <Header />
      <Typography variant='h5' sx={{ textAlign: 'center' }}>A character a day keeps the writer&apos;s block away. <br />Select all you want to generate:</Typography>
      <FormGroup sx={{ mt: 2, mb: 6 }}>
        <FormControlLabel control={<Checkbox checked={name} onClick={() => checkName(!name)} />} label='Name' />
        <FormControlLabel control={<Checkbox checked={age} onClick={() => checkAge(!age)} />} label='Age' />
        <FormControlLabel control={<Checkbox checked={country} onClick={() => checkCountry(!country)} />} label='Country' />
        <FormControlLabel control={<Checkbox checked={traits} onClick={() => checkTraits(!traits)} />} label='Traits' />
        <TextField type='number' variant='standard' value={traitsNum} onChange={(e) => setTraitsNum(e.target.value)} label='Number of Traits' disabled={!traits} sx={{ input: {color: theme.palette.primary.main }, mt: 1 }} />
      </FormGroup>
      <Box sx={{ display: 'flex' }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button variant='contained' onClick={generate} sx={{ color: 'white', mr: 3 }}>Generate</Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href='/recent'><Button variant='outlined'>View recent</Button></Link>
        </motion.div>
      </Box>
    </Box>
  )
}