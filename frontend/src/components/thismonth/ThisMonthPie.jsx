import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { Pie } from 'react-chartjs-2'
import { decimal_round } from '../../utils/sums'
import { getIconColor, getIconHexColor } from '../../utils/icons'


const ThisMonthPie = ({ expenses, recurring }) => {
    const [expenseName, setExpenseName] = useState([])
    const [expenseCost, setExpenseCost] = useState([])
    const [expenseColor, setExpenseColor] = useState([])

    useEffect(() => {
        let expenseNames = []
        let expenseCosts = []
        let expenseColors = []

        if (expenses) {
            let combined
            if (recurring) {
                combined = expenses.concat(recurring)
            } else {
                combined = expenses
            }
            for (const expense of combined) {
                if (!expenseNames.includes(expense.icon.name)) {
                    expenseNames.push(expense.icon.name)
                    expenseColors.push(getIconHexColor(getIconColor(expense.icon.name)))
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
            setExpenseColor(expenseColors)
        }
    }, [expenses, recurring])

    const data = {
        labels: expenseName,
        datasets: [
          {
            label: '£',
            data: expenseCost,
            backgroundColor: expenseColor
          },
        ],
      };

    return (
        <>
        {expenses &&
        <Box p={4} bg='white' borderRadius={12} boxShadow='md' >
            <Box className="chart-container">
                <Pie data={data} />  
            </Box>
        </Box>
        }
        </>
    )
}

export default ThisMonthPie
