import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
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
import { getMonthAndYear } from '../../utils/date'


const AddExpense = () => {
    let history = useHistory()
    const color = useSelector(state => {return state.user.color})
    const [name, setName] = useState('')
    const [category, setCategory] = useState()
    const [categories, setCategories] = useState([])
    const [cost, setCost] = useState(0)
    const [submitting, setSubmitting] = useState(false)
    const { month, year } = getMonthAndYear()
    const [completed, setCompleted] = useState(false)

    const format = (val) => `£` + val
    const parse = (val) => val.replace(/^£/, "")

    const submitForm = () => {
        if (name && cost && category) {
            setSubmitting(true)
            axiosPost('new-recurring-expense/', {
                "name": name,
                "cost": cost,
                "category": category
            })
            .then(() => setSubmitting(false))
            .then(() => {
                setName('');
                setCost(0);
                setCompleted(false);
            })
            .then(() => history.push(`/month/${month}/${year}`))
        } else {
            setCompleted(true)
        }
    }

    useEffect(() => {
        axiosGet('get-categories/').then(res => setCategories(res.data))
    }, [])

    return (
        <Box p={4} bg='white' borderRadius={12}>
            <Heading className="headings" size={'xl'} fontWeight={800} my={3}>Add a recurring expense</Heading>
            <hr />
            <Box py={4}> 
                <FormControl isRequired isInvalid={completed ? (name ? false : true) : false}>
                    <FormLabel mt={2}>Expense Name</FormLabel>
                    <Input maxWidth={500} value={name} type="name" onChange={e => setName(e.target.value)} />
                    <FormErrorMessage>Field Required</FormErrorMessage>
                </FormControl>
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
