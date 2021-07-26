import React, { useEffect, useState } from 'react'
import { 
  Spinner,
  Center 
} from '@chakra-ui/react'
import { Bar } from 'react-chartjs-2'
import { getIconHexColor } from '../../utils/icons'


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
        setMonth(monthName.reverse())
        setSpent(monthSpent.reverse())
    }, [months])

    const data = {
        labels: month.slice(-1 * 5),
        datasets: [
          {
            label: '£ Spent',
            data: spent.slice(-1 * 5),
            backgroundColor: [getIconHexColor(color)]
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
      <Center p={4} bg='white' borderRadius={12} boxShadow='md'>
        {months ?
          <Bar data={data} options={options} height={null} width={null} />
        :
          <Spinner size="xl" color={`${color}.500`} thickness="3px" />
        }
      </Center>
    )
}

export default PastMonthsBar
