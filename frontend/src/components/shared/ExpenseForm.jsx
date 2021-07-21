import React, { useState } from 'react'
import { 
    Box,
    FormLabel,
    Select,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { axiosPost } from '../../utils/axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseForm = ({ expense }) => {
    const color = useSelector(state => {return state.user.color})
    const [name, setName] = useState(expense.name)
    const [category, setCategory] = useState(expense.icon.name)
    const [date, setDate] = useState(Date.parse(expense.date))
    const [cost, setCost] = useState(expense.cost)

    const format = (val) => `£` + val
    const parse = (val) => val.replace(/^£/, "")

    const submitForm = () => {
        axiosPost('expense/', {
            "id": expense.id,
            "name": name,
            "date": date,
            "cost": cost,
            "category": category
        })
    }

    return (
        <Box>
            <FormLabel>Expense Name</FormLabel>
            <Input value={name} type="name" onChange={e => setName(e.target.value)} />
            <Box py={3}>
                <FormLabel>Date of expense</FormLabel>
                <DatePicker 
                    dateFormat="dd/MM/yyyy"
                    selected={date} 
                    onChange={(date) => setDate(date)} 
                />
            </Box>
            <FormLabel>Expense cost</FormLabel>
            <NumberInput
                maxWidth='400px'
                onChange={(value) => setCost(parse(value))}
                value={format(cost)}
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
            <Box mt={3}>
                <FormLabel>Expense Category</FormLabel>
                <Select value={category} onChange={e => setCategory(e.target.value)} placeholder="Select a category">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
            </Box>
            <Button 
                onClick={() => submitForm()}
                w='100%' 
                colorScheme={color} 
                color='white' 
                mt={5}
                type="submit"
            >Update Expense</Button>
        </Box>
    )
}

export default ExpenseForm
