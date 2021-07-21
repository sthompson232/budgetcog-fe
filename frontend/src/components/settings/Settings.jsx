import React from 'react'
import { 
    Box,
    Heading,
} from '@chakra-ui/react'
import ColorSelector from './ColorSelector'
import BackgroundSelector from './BackgroundSelector'
import BudgetForm from '../shared/BudgetForm'
import GoalForm from '../shared/GoalForm'


const Settings = () => {
    return (
        <Box p={4} bg='white' borderRadius={12}>
            <Heading className="headings" size={'xl'} fontWeight={800} mb={2}>Settings</Heading>
            <hr />
            <BudgetForm />
            <GoalForm />
            <ColorSelector />
            <BackgroundSelector />
        </Box>
    )
}

export default Settings
