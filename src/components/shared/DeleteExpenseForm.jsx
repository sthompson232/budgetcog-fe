import React, { useState } from 'react'
import {
    Box,
    Button,
    Heading
} from '@chakra-ui/react'
import { axiosPost } from '../../utils/axios'

const DeleteExpenseForm = ({ expense, updateData }) => {
    const [submitting, setSubmitting] = useState()

    const submitForm = () => {
        setSubmitting(true)
        axiosPost('delete-expense/', {
            "id": expense.id,
        })
        .then(() => updateData())
        .then(() => setSubmitting(false))
    }

    return (
        <Box>
            <Heading size={'lg'} mt={4} fontWeight={900}>Delete your expense</Heading>
            <Button 
                onClick={() => submitForm()} 
                isLoading={submitting}
                size='sm'
                bg='red.500'
                color='white'
                mt={3}
            >Delete</Button>
        </Box>
    )
}

export default DeleteExpenseForm
