import { useState, useEffect } from 'react'
import {
    Box,
    HStack,
    useRadio,
    useRadioGroup
} from '@chakra-ui/react'


function ColorCard(props) {
    const [checked, setChecked] = useState('')
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    useEffect(() => {
        if (input.checked) {setChecked(input.value)}
    }, [input.checked, input.value])
  
    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          color="white"
          bg={`${input.value}.400`}
          _checked={{
            borderColor: "white",
            boxShadow: "outline"
          }}
          px={10}
          py={6}
        >
        </Box>
      </Box>
    )
  }
  
  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
  function ColorSelector() {

    const options = ["cyan", "red", "blue", "green", "purple", "orange"]
  
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "color",
      defaultValue: "red",
      onChange: console.log,
    })
  
    const group = getRootProps()
  
    return (
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <ColorCard key={value} {...radio}>
              {value}
            </ColorCard>
          )
        })}
      </HStack>
    )
  }

export default ColorSelector