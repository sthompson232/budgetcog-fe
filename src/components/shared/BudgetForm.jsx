import React, { useState, useEffect } from 'react'
import { 
    Heading,
    Box,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { axiosPost } from '../../utils/axios'
import { updateBudget } from '../../redux/actions/user'

const BudgetForm = () => {
    const dispatch = useDispatch()
    const budget = useSelector(state => {return state.user.budget})
    const [value, setValue] = useState(budget)

    const format = (val) => `£` + val
    const parse = (val) => val.replace(/^£/, "")

    useEffect(() => {
        axiosPost('budget/', value)
        dispatch(updateBudget(value))
    }, [value, dispatch])

    return (
        <Box my={6}>
            <Heading className="headings" size={'lg'} fontWeight={700} mb={4}>Set your monthly budget</Heading>
            <NumberInput
                maxWidth='400px'
                onChange={(valueString) => setValue(parse(valueString))}
                value={format(value)}
                max={50000}
                precision={2}
                step={1}
            >
            <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </Box>
    )
}

export default BudgetForm
