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
import { setBackground } from '../../redux/actions/auth'
import pattern1 from '../../static/images/pattern1.jpg'
import pattern2 from '../../static/images/pattern2.jpg'


function BackgroundCard(props) {
    const [image, setImage] = useState()
    const { getInputProps, getCheckboxProps } = useRadio(props)
    const dispatch = useDispatch()
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    useEffect(() => {
        switch(input.value) {
            case 0:
                break
            case 1:
                setImage(pattern1)
                break
            case 2:
                setImage(pattern2)
                break
            default:
                setImage()
        }
    }, [input.value])

    useEffect(() => {
        if (input.checked) {
          axiosPost('background-selector/', {"payload": input.value})
          dispatch(setBackground(input.value))
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
          bg="gray.100"
          backgroundImage={image}
          _checked={{
            borderColor: "white",
            boxShadow: "outline"
          }}
          px={20}
          py={12}
        >
        </Box>
      </Box>
    )
  }
  

function BackgroundSelector() {

  const [initialBackground, setInitialBackground] = useState()

  useEffect(() => {
    axiosGet('background-selector').then(res => setInitialBackground(res.data))
  })

  const options = [0, 1, 2]
  
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Background",
    defaultValue: initialBackground,
  })

  const group = getRootProps()

  return (
    <Box my={6}>
      <Heading className="headings" size={'lg'} fontWeight={700} mb={4}>Choose your background</Heading>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <BackgroundCard key={value} {...radio}>
              {value}
            </BackgroundCard>
          )
        })}
      </HStack>
    </Box>
  )
}

export default BackgroundSelector