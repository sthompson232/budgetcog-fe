import React from 'react'
import {
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerBody, 
  DrawerHeader,
  Drawer, 
  useDisclosure,
  Box
} from '@chakra-ui/react'
import SidebarContent from './SidebarContent';

const Sidebar = ({ variant }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return variant === 'drawer' ? (
    <div>
      <Button variantColor="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <Button variantColor="blue" onClick={onClose}>
            Open
          </Button>
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  ) : (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="250px"
      top={0}
      h="100%"
      bg="#dfdfdf"
    >
      <SidebarContent onClick={onClose} />
    </Box>
  )
}

export default Sidebar
