import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Box,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useSetting } from "@/context";
import { useEffect, useState } from "react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Switch } from "@chakra-ui/react";

export default function SettingModal() {
  const { isHard, setEasyMode, setHardMode } = useSetting();
  const { toggleColorMode, colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  function handleGameModeChange() {
    isHard ? setEasyMode() : setHardMode();
  }
  
  return (
    <>
      <SettingsIcon
        onClick={() => setIsOpen(true)}
        cursor="pointer"
        boxSize="1.2em"
        _hover={{
          boxSize: "1.5em",
        }}
        transition="ease-in-out"
        transitionProperty="all"
        transitionDuration="200ms"
      />
      <Modal isCentered isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent pb={5}>
          <ModalHeader textAlign={"center"}>Configuration</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box borderBottom={"1px"} py={3}>
              <FormControl
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <FormLabel htmlFor="dark-mode-switch" mb="0">
                  Dark mode
                </FormLabel>
                <Switch
                  isChecked={colorMode === "dark" ? true : false}
                  id="dark-mode-switch"
                  onChange={toggleColorMode}
                  size={"md"}
                />
              </FormControl>
              <Text fontSize="xs">
                Any revealed hints must be used in subsequent guesses
              </Text>
            </Box>
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottom={"1px"}
              py={3}
            >
              <FormLabel htmlFor="hard-mode-switch" mb="0">
                Hard mode
              </FormLabel>
              <Switch
                isChecked={isHard}
                id="hard-mode-switch"
                onChange={handleGameModeChange}
                size={"md"}
              />
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
