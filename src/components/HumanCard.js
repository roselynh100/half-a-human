import { Card, CardActions, CardContent, Typography } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { motion } from 'framer-motion'

import { theme } from '../../utils/theme'

const HumanCard = (props) => {

  console.log('props are:', props)

  return (
    <motion.div whileHover={{ scale: 1.05 }} style={{ width: '45%', margin: 10, cursor: 'default' }}>
      <Card variant='outlined' sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography sx={{ fontWeight: 'bold' }}>{props.name ? props.name : 'Unknown Name'}</Typography>
          <Typography sx={{ lineHeight: 1.2, my: 1 }}>{props.age ? 'Age ' + props.age : 'An unknown age'}{props.country ? ', from ' + props.country : ' from an unknown country'}</Typography>
          <Typography>Traits: {props.traits ? '' : 'Unknown'}</Typography>
          {props.traits && props.traits.map((trait, index) => {
            return <Typography key={index} sx={{ fontSize: 18 }}>• {trait.trait}: {trait.value}</Typography>
          })}
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ThumbUpIcon sx={{ color: theme.palette.primary.main, mr: 1, mb: 1, cursor: 'pointer' }} />
        </CardActions>
      </Card>
    </motion.div>
  )
}

export default HumanCard