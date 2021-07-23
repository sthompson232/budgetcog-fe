import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { getMonthAndYear } from "../../utils/date"


const AddExpenseButton = ({ recurring }) => {
    const { month, year } = getMonthAndYear()

    return (
        <>
        {recurring ?
        <Link to="/recurring-expenses">
            <Button>Manage</Button>
        </Link> 
        :
        <Link to={`/add-expense/${month}/${year}`}>
            <Button>Add an expense</Button>
        </Link> 
        }
        </>
    )
}

export default AddExpenseButton
