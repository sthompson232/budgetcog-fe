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
import { setBackground } from '../../redux/actions/user'
import pattern1 from '../../static/images/pattern1-thumbnail.jpg'
import pattern2 from '../../static/images/pattern2-thumbnail.jpg'
import pattern3 from '../../static/images/pattern3-thumbnail.jpg'
import pattern4 from '../../static/images/pattern4-thumbnail.jpg'
import pattern5 from '../../static/images/pattern5-thumbnail.jpg'
import pattern6 from '../../static/images/pattern6-thumbnail.jpg'


function BackgroundCard(props) {
    const [image, setImage] = useState()
    const { getInputProps, getCheckboxProps } = useRadio(props)
    const dispatch = useDispatch()
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    useEffect(() => {
        switch(parseInt(input.value)) {
            case 0:
                break
            case 1:
                setImage(pattern1)
                break
            case 2:
                setImage(pattern2)
                break
            case 3:
                setImage(pattern3)
                break
            case 4:
                setImage(pattern4)
                break
            case 5:
                setImage(pattern5)
                break
            case 6:
                setImage(pattern6)
                break
            default:
                setImage()
        }
    }, [input.value])

    useEffect(() => {
        if (input.checked) {
          axiosPost('background-selector/', {"payload": input.value})
          dispatch(setBackground(parseInt(input.value)))
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

  const [initialBackground, setInitialBackground] = useState('')

  useEffect(() => {
    axiosGet('background-selector').then(res => setInitialBackground(res.data))
  })

  const options = ['0', '1', '2', '3', '4', '5', '6']
  
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "background",
    defaultValue: initialBackground,
  })

  const group = getRootProps()

  return (
    <Box my={6}>
      <Heading className="headings" size={'lg'} fontWeight={700} mb={4}>Choose your background</Heading>
      <HStack {...group} flexWrap='wrap' justifyContent='start'>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <Box key={value} pl={radio.value === '0' ? 2 : 0} pb={2}>
            <BackgroundCard {...radio}>
              {value}
            </BackgroundCard>
            </Box>
          )
        })}
      </HStack>
    </Box>
  )
}

export default BackgroundSelector