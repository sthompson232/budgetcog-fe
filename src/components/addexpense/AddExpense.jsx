import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { 
    Heading,
    Box,
    FormLabel,
    FormControl,
    FormErrorMessage,
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
import { getMonthName } from '../../utils/date'


const AddExpense = () => {
    let history = useHistory()
    const current_date = useParams()
    const color = useSelector(state => {return state.user.color})
    const [name, setName] = useState('')
    const [category, setCategory] = useState()
    const [categories, setCategories] = useState([])
    const [date, setDate] = useState(new Date(current_date.year, current_date.month - 1, 1).getTime())
    const [cost, setCost] = useState(0)
    const [submitting, setSubmitting] = useState(false)
    const [completed, setCompleted] = useState(false)

    const format = (val) => `£` + val
    const parse = (val) => val.replace(/^£/, "")

    const submitForm = () => {
        if (name && cost && category) {
            setSubmitting(true)
            axiosPost('new-expense/', {
                "month": current_date.month,
                "year": current_date.year,
                "name": name,
                "date": date,
                "cost": cost,
                "category": category
            })
            .then(() => setSubmitting(false))
            .then(() => {
                setName('');
                setDate(Date.now());
                setCost(0);
                setCompleted(false);
            })
            .then(() => history.push(`/month/${current_date.month}/${current_date.year}`))
        } else {
            setCompleted(true)
        }
    }

    useEffect(() => {
        axiosGet('get-categories/').then(res => setCategories(res.data))
    }, [])

    return (
        <Box p={4} bg='white' borderRadius={12}>
            <Heading size={'2xl'} className="headings stats" fontWeight={800} py={2} mb={3} color={`${color}.500`} >{getMonthName(current_date.month - 1)} {current_date.year}</Heading>
            <hr />
            <Box py={4}>
                <Heading className="headings" size={'xl'} fontWeight={800} my={3}>Add an Expense</Heading>
                <FormControl isRequired isInvalid={completed ? (name ? false : true) : false}>
                    <FormLabel mt={2}>Expense Name</FormLabel>
                    <Input maxWidth={500} value={name} type="name" onChange={e => setName(e.target.value)} />
                    <FormErrorMessage>Field Required</FormErrorMessage>
                </FormControl>
                <Box py={3}>
                    <FormLabel>Date of expense</FormLabel>
                    <DatePicker 
                        selected={date}
                        dateFormat="dd/MM/yyyy"
                        onChange={(date) => setDate(Date.parse(date))} 
                    />
                </Box>
                <FormControl isRequired isInvalid={completed ? (cost ? false : true) : false}>
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
                    <FormErrorMessage>Field Required</FormErrorMessage>
                </FormControl>
                <Box mt={3}>
                    <FormControl isRequired isInvalid={completed ? (category ? false : true) : false}>
                        <FormLabel>Expense Category</FormLabel>
                        {categories &&
                        <Select maxWidth={500} value={category} onChange={e => setCategory(e.target.value)} placeholder="Select a category">
                            {categories.map(category => (
                                <option key={category.id} value={category.name}>{category.name}</option>
                            ))}
                        </Select>
                        }
                        <FormErrorMessage>Field Required</FormErrorMessage>
                    </FormControl>
                </Box>
                <Button 
                    onClick={() => submitForm()}
                    isLoading={submitting}
                    w='100%' 
                    colorScheme={color} 
                    color='white' 
                    mt={5}
                    type="submit"
                >Add Expense</Button>
            </Box>
        </Box>
    )
}

export default AddExpense
