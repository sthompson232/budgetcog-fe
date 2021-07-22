import React, { useState, useEffect } from 'react'
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
import { axiosGet, axiosPost } from '../../utils/axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseForm = ({ expense }) => {
    const color = useSelector(state => {return state.user.color})
    const [name, setName] = useState(expense.name)
    const [category, setCategory] = useState(expense.icon.name)
    const [categories, setCategories] = useState([])
    const [date, setDate] = useState(Date.parse(expense.date))
    const [cost, setCost] = useState(expense.cost)
    const [submitting, setSubmitting] = useState(false)

    const format = (val) => `£` + val
    const parse = (val) => val.replace(/^£/, "")

    const submitForm = () => {
        setSubmitting(true)
        axiosPost('expense/', {
            "id": expense.id,
            "name": name,
            "date": date,
            "cost": cost,
            "category": category
        })
        .then((res) => (setSubmitting(!(res.status === 200))))
    }

    useEffect(() => {
        axiosGet('get-categories/').then(res => setCategories(res.data))
    }, [])

    return (
        <Box>
            <FormLabel>Expense Name</FormLabel>
            <Input value={name} type="name" onChange={e => setName(e.target.value)} />
            {date ?
            <Box py={3}>
                <FormLabel>Date of expense</FormLabel>
                <DatePicker 
                    dateFormat="dd/MM/yyyy"
                    selected={date} 
                    onChange={(date) => setDate(Date.parse(date))} 
                />
            </Box>
            : ''}
            <FormLabel mt={2}>Expense cost</FormLabel>
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
                {categories &&
                <Select value={category} onChange={e => setCategory(e.target.value)} placeholder="Select a category">
                    {categories.map(category => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                </Select>
                }
            </Box>
            <Button 
                onClick={() => submitForm()}
                isLoading={submitting}
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
