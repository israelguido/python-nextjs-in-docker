'use client'

import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, Button, useDisclosure } from '@chakra-ui/react'

interface DrawerMenuProps {
  isOpen: boolean
  onClose: () => void
}

const DrawerMenu = ({ isOpen, onClose }: DrawerMenuProps) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
        <DrawerBody>
          {/* Lista de posts vai aqui */}
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Fechar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerMenu
