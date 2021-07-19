import React from 'react'
import {
  Link,
  DrawerOverlay,
  DrawerContent,
  DrawerBody, 
  DrawerHeader,
  Drawer, 
  useDisclosure,
  Box,
  DrawerFooter,
  Flex,
  CloseButton,
  Image
} from '@chakra-ui/react'
import SidebarContent from './SidebarContent'
import SidebarFooter from './SidebarFooter'
import logo from '../../static/images/logo.png'


const Sidebar = ({ variant }) => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });

  return variant === 'drawer' ? (
    <div>
      <Box p={2}>
        <Link  onClick={onOpen}>
          <i className="fas fa-2x fa-bars"></i>
        </Link>
      </Box>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justifyContent="space-between">
              <Image htmlWidth={180} src={logo} pt={1} />
              <CloseButton onClick={onClose} />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Box py={4}>
              <SidebarContent />
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <SidebarFooter />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  ) : (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="320px"
      top={0}
      h="100%"
      bg="gray.50"
    >
      <Image htmlWidth={180} src={logo} pb={3} />
        <hr />
        <Box py={4}>
          <SidebarContent onClick={onClose} />
        </Box>
        <Box position="fixed" bottom={0} pb={4}>
          <SidebarFooter />
        </Box>
    </Box>
  )
}

export default Sidebar
