import { Card, CardContent, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const HumanCard = (props) => {

  return (
    <motion.div whileHover={{ scale: 1.05 }} style={{ width: '45%', margin: 15, cursor: 'default', boxShadow: '10px 10px 10px rgba(119, 172, 162, 0.5)' }}>
      <Card variant='outlined' sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography sx={{ fontWeight: 'bold' }}>{props.name ?? 'Unknown Name'}</Typography>
          <Typography sx={{ lineHeight: 1.2, my: 1 }}>{props.age ? 'Age ' + props.age : 'An unknown age'}{props.country ? ', from ' + props.country : ' from an unknown country'}</Typography>
          <Typography>Traits: {props.traits ? '' : 'Unknown'}</Typography>
          {props.traits && props.traits.map((trait, index) => {
            return <Typography key={index} sx={{ fontSize: 18 }}>• {trait.trait}: {trait.value}</Typography>
          })}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default HumanCard