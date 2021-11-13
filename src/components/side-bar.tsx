import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';
import { EVENTS_TYPES } from '../models/events';

type SideBarProps = {
  getCurrentMenu?: (menu: MenuProps) => void;
};

type MenuProps = {
  key: string;
  name: string;
};

export function SideBar({ getCurrentMenu }: SideBarProps) {
  const [currentMenu, setCurrentMenu] = useState<MenuProps>(EVENTS_TYPES[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    getCurrentMenu && getCurrentMenu(currentMenu);
  }, [currentMenu, getCurrentMenu]);

  const handleChangeCurrentMenu = (menu: MenuProps) => setCurrentMenu(menu);

  return (
    <>
      <Box padding={4} display="flex" justifyContent="space-between">
        <Button ref={btnRef.current} colorScheme="teal" onClick={onOpen}>
          Open Menu
        </Button>
        <Text color="teal">Smarkets events</Text>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef?.current}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Choose your event</DrawerHeader>

          <DrawerBody>
            <Stack as="ul" spacing={4} direction="column" align="left">
              {EVENTS_TYPES.map((event) => (
                <Button
                  key={v4()}
                  isFullWidth={true}
                  as="li"
                  colorScheme="teal"
                  size="xs"
                  justifyContent="flex-start"
                  padding={4}
                  color={`${currentMenu.key === event.key ? '#fff' : 'black'}`}
                  background={`${
                    currentMenu.key === event.key ? 'teal' : 'transparent'
                  }`}
                  _hover={{
                    color: '#fff',
                    background: 'teal',
                    cursos: 'pointer'
                  }}
                  onClick={() => handleChangeCurrentMenu(event)}
                >
                  {event.name}
                </Button>
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter justifyContent="center">
            <Text color="teal">Smarkets all rights reserved</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
