import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '{human.name}\'s Key Qualities',
      data: [100, 10, 50, 23, 53, 123],
      backgroundColor: 'rgba(208, 169, 245, 0.2)',
      borderColor: 'rgb(208, 169, 245)',
      borderWidth: 2,
    }
  ]
}

const Chart = () =>{
  return <Radar data={data} />
}

export default Chart