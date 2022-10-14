import { useState, useEffect } from 'react'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import Header from '../src/components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [name, checkName] = useState(true)
  const [age, checkAge] = useState(true)
  const [country, checkCountry] = useState(true)
  const [traits, checkTraits] = useState(true)
  const [traitsNum, setTraitsNum] = useState(5)

  async function generate() {
    console.log('sldkfjalskjd')
    await fetch('https://api.api-ninjas.com/v1/babynames', {
      headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY },
      contentType: 'application/json'
    })
      .then((response) => response.json())
      .then((data) => console.log(data[0]))
  }

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/babynames', {
      method: 'GET',
      headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY },
      contentType: 'application/json'
    })
      .then((response) => response.json())
      .then((data) => console.log(data[0]))
  })

  return (
    <Box className={styles.container}>
      <Header />
      <Typography variant='h6'>A character a day keeps the writer&apos;s block away.</Typography>
      <Typography variant='h6'>Select all you want to generate:</Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked value={name} onClick={() => checkName(!name)} />} label="Name" />
        <FormControlLabel control={<Checkbox defaultChecked value={age} onClick={() => checkAge(!age)} />} label="Age" />
        <FormControlLabel control={<Checkbox defaultChecked value={country} onClick={() => checkCountry(!country)} />} label="Country" />
        <FormControlLabel control={<Checkbox defaultChecked value={traits} onClick={() => checkTraits(!traits)} />} label="Traits" />
        <TextField type='number' variant='standard' value={traitsNum} onChange={(e) => setTraitsNum(e.target.value)} label='Number of Traits' disabled={!traits} />
      </FormGroup>
      <Button variant='contained' onClick={generate}>Generate</Button>
    </Box>
  )
}