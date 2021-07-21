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
import { updateGoal } from '../../redux/actions/user'

const GoalForm = () => {
    const dispatch = useDispatch()
    const goal = useSelector(state => {return state.user.goal})
    const [value, setValue] = useState(goal)

    const format = (val) => `£` + val
    const parse = (val) => val.replace(/^£/, "")

    useEffect(() => {
        axiosPost('goal/', value)
        dispatch(updateGoal(value))
    }, [value, dispatch])

    return (
        <Box my={6}>
            <Heading className="headings" size={'lg'} fontWeight={700} mb={4}>Set your goal</Heading>
            <NumberInput
                maxWidth='400px'
                onChange={(valueString) => setValue(parse(valueString))}
                value={format(value)}
                max={1000000}
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

export default GoalForm