import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const AddExpenseButton = ({ recurring, month, year }) => {

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
