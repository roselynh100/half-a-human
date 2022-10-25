import { useEffect, useContext } from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import Chart from 'chart.js/auto'
import { Radar } from 'react-chartjs-2'
import HumanContext from './HumanContext'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const HumanChart = () =>{
  const [human, setHuman] = useContext(HumanContext)

  console.log('human is:', human)

  let humanTraitsValues = []

  useEffect(() => {
    for (let i in human?.traits) {
      humanTraitsValues.push(Math.floor(Math.random() * 9) + 1)
    }
  }, [])

  const data = {
    labels: human?.traits,
    datasets: [
      {
        label: `${human?.name}\'s Key Qualities`,
        data: humanTraitsValues,
        backgroundColor: 'rgba(119, 172, 162, 0.2)',
        borderColor: 'rgb(119, 172, 162)',
        borderWidth: 2
      }
    ]
  }

  const options = {
    scale: {
      min: 0,
      max: 10,
      stepSize: 1
    },
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 14
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    human?.traits && <Radar data={data} options={options} />
  )
}

export default HumanChart