import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2'


const PastMonthsBar = ({ months, color }) => {
    const [month, setMonth] = useState([])
    const [spent, setSpent] = useState([])

    useEffect(() => {
        let monthName = []
        let monthSpent = []

        if (months) {
            for (const month of months) {
                monthName.push(month.name)
                monthSpent.push(month.expense_total)
            }
        }
        setMonth(monthName)
        setSpent(monthSpent)
    }, [months])

    const data = {
        labels: month.slice(-1 * 5),
        datasets: [
          {
            label: '£ Spent',
            data: spent.slice(-1 * 5),
            backgroundColor: [color]
          },
        ],
      };
      
      const options = {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    return (
        <Box p={4} bg='white' borderRadius={12} boxShadow='md'>
            <Bar data={data} options={options} height={null} width={null} />
        </Box>
    )
}

export default PastMonthsBar
