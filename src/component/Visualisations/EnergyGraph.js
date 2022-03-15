import { RemoveRedEye } from '@mui/icons-material'
import React from 'react'
import { Line } from 'react-chartjs-2'

function EnergyGraph() {
  return (
    <div className="balanceGraph__container">
    <div className="balanceGraph__title">
      <h4>
        <span>Energy Price</span>
        <RemoveRedEye />
      </h4>
      <h3>$ 503.99</h3>
    </div>
    <div className="balanceGraph">
      <Line
        data={{
          labels: [
            "Today",
            "This Week",
            "This Month",
            "This Year",
            "All Time",
          ],
          datasets: [
            {
              label: "Days",
              data: [52, 65, 54, 70, 76],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  </div>
  )
}

export default EnergyGraph