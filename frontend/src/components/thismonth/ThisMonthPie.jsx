import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { Pie } from 'react-chartjs-2'
import { decimal_round } from '../../utils/sums'


const ThisMonthPie = ({ expenses, recurring }) => {
    const [expenseName, setExpenseName] = useState([])
    const [expenseCost, setExpenseCost] = useState([])

    useEffect(() => {
        let expenseNames = []
        let expenseCosts = []
        if (expenses && recurring) {
            let combined = expenses.concat(recurring)
            for (const expense of combined) {
                if (!expenseNames.includes(expense.icon.name)) {
                    expenseNames.push(expense.icon.name)
                } 
            }
            for (const expense of combined) {
                for (let i = 0; i < expenseNames.length; i++) {
                    if (expense.icon.name === expenseNames[i]) {
                        if (expenseCosts[i]) {
                            expenseCosts[i] += parseFloat(expense.cost)
                            expenseCosts[i] = decimal_round(expenseCosts[i])
                        } else {
                            expenseCosts[i] = parseFloat(expense.cost)
                            expenseCosts[i] = decimal_round(expenseCosts[i])
                        }
                    }
                }
            }
            setExpenseName(expenseNames)
            setExpenseCost(expenseCosts)
        }
    }, [expenses, recurring])

    const data = {
        labels: expenseName,
        datasets: [
          {
            label: '# of Votes',
            data: expenseCost,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ]
          },
        ],
      };

    return (
        <>
        {expenses && recurring ?
        <Box p={4} bg='white' borderRadius={12} boxShadow='md' mb={6}>
            <Pie data={data} />
        </Box>
        : ''
        }
        </>
    )
}

export default ThisMonthPie
