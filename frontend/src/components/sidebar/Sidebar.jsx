import React from 'react'
import {
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerBody, 
  DrawerHeader,
  Drawer, 
  useDisclosure,
  Box,
  Heading,
  DrawerFooter,
  Flex,
  CloseButton
} from '@chakra-ui/react'
import SidebarContent from './SidebarContent';
import SidebarFooter from './SidebarFooter';

const Sidebar = ({ variant }) => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return variant === 'drawer' ? (
    <div>
      <Button variantColor="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justifyContent="space-between">
              <Heading fontWeight={800}>BudgetCog</Heading>
              <CloseButton variantColor="blue" onClick={onClose} />
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
      <Heading pb={3} fontWeight={800}>BudgetCog</Heading>
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
