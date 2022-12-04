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
  Input,
} from "@chakra-ui/react";
import { useSetting } from "@/context";
import { useEffect, useState } from "react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Switch } from "@chakra-ui/react";
import useDebounce from "@/lib/useDebounce";
import { useMutation } from "react-query";
import axios from "axios";
import { useUser } from "@/lib/useUser";

export default function SettingModal() {
  const { isHard, setEasyMode, setHardMode } = useSetting();
  const { toggleColorMode, colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser();
  const [name, setName] = useState(user.name);
  const debounceName = useDebounce(name, 600);

  const mutation = useMutation(() => {
    return axios.post(`/api/user/${user.id}`, { name: debounceName });
  });

  function handleGameModeChange() {
    isHard ? setEasyMode() : setHardMode();
  }

  useEffect(() => {
    if (!user) return;
    setName(user.name);
  }, []);

  useEffect(() => {
    if (!user) return;
    if (!debounceName) return;
    mutation.mutate();
    const existUser = localStorage.getItem("userData");
    if (!existUser) return;
    localStorage.setItem(
      "userData",
      JSON.stringify({ ...JSON.parse(existUser), name: debounceName })
    );
  }, [debounceName]);

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
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottom={"1px"}
              py={3}
            >
              <FormLabel htmlFor="hard-mode-switch" mb="0" w="full">
                Your name
              </FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
