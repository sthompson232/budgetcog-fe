import { useState, useEffect } from 'react'
import {
    Box,
    HStack,
    useRadio,
    useRadioGroup,
    Heading
} from '@chakra-ui/react'
import { axiosGet, axiosPost } from '../../utils/axios'
import { useDispatch } from 'react-redux'
import { setColor } from '../../redux/actions/user'


function ColorCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
    const dispatch = useDispatch()
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    useEffect(() => {
        if (input.checked) {
          axiosPost('color-selector/', {"payload": input.value})
          dispatch(setColor(input.value))
        }
    }, [input.checked, input.value, dispatch])
  
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
          bg={`${input.value}.500`}
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
  

function ColorSelector() {

  const [initialColor, setInitialColor] = useState('')

  useEffect(() => {
    axiosGet('color-selector').then(res => setInitialColor(res.data))
  })

  const options = ["cyan", "red", "blue", "green", "purple", "orange", "pink"]
  
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    defaultValue: initialColor,
  })

  const group = getRootProps()

  return (
    <Box my={6}>
      <Heading className="headings" size={'lg'} fontWeight={700} mb={4}>Choose your colour theme</Heading>
      <HStack {...group} flexWrap='wrap' justifyContent='start'>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <Box key={value} pl={radio.value === 'cyan' ? 2 : 0} pb={2}>
              <ColorCard {...radio}>
                {value}
              </ColorCard>
            </Box>
          )
        })}
      </HStack>
    </Box>
  )
}

export default ColorSelector