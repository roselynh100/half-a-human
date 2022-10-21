import { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import Header from '../src/components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [name, checkName] = useState(true)
  const [age, checkAge] = useState(true)
  const [country, checkCountry] = useState(true)
  const [traits, checkTraits] = useState(true)
  const [traitsNum, setTraitsNum] = useState(5)

  const generate = async () => {
    let human = {}
    if (name) {
      const nameRes = await fetch('/api/name')
      const data = await nameRes.json()  
      human.name = data.name
    }
    if (age) human.age = Math.floor(Math.random() * 75) + 5
    if (country) {
      if (human.name) {
        const countryRes = await fetch('/api/country', {
          method: 'POST',
          body: JSON.stringify({ name: human.name })
        })
        const data = await countryRes.json()
        human.country = data.name.common
      }
      else {
        const countryRes = await fetch('/api/country')
        const data = await countryRes.json()
        human.country = data.name.common
      }
    }
    if (traits) {
      const traitsRes = await fetch('/api/traits', {
        method: 'POST',
        body: JSON.stringify({ number: traitsNum })
      })
      const data = await traitsRes.json()
      human.traits = data
    }
    console.log('our human is:', human)
  }

  return (
    <Box className={styles.container}>
      <Header />
      <Typography variant='h6'>A character a day keeps the writer&apos;s block away.</Typography>
      <Typography variant='h6'>Select all you want to generate:</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={name} onClick={() => checkName(!name)} />} label='Name' />
        <FormControlLabel control={<Checkbox checked={age} onClick={() => checkAge(!age)} />} label='Age' />
        <FormControlLabel control={<Checkbox checked={country} onClick={() => checkCountry(!country)} />} label='Country' />
        <FormControlLabel control={<Checkbox checked={traits} onClick={() => checkTraits(!traits)} />} label='Traits' />
        <TextField type='number' variant='standard' value={traitsNum} onChange={(e) => setTraitsNum(e.target.value)} label='Number of Traits' disabled={!traits} />
      </FormGroup>
      <Button variant='contained' onClick={generate}>Generate</Button>
    </Box>
  )
}