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
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { InfoIcon } from "@chakra-ui/icons";
import Key from "../Game/Key";

export default function GuideModal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <InfoIcon
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
          <ModalHeader textAlign={"center"}>How to play</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box py={3}>
              <Text>
                Guess the word in 6 tries. After each guess, the color of the
                tiles will change to show how close your guess was to the word.
              </Text>
            </Box>
            <Box py={3}>
              <HStack spacing={2} justify="center">
                <Key
                  value={"A"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"correct"}
                  type="cell"
                />
                <Key
                  value={"N"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"guessing"}
                  type="cell"
                />
                <Key
                  value={"G"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"guessing"}
                  type="cell"
                />
                <Key
                  value={"R"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"guessing"}
                  type="cell"
                />
                <Key
                  value={"Y"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"guessing"}
                  type="cell"
                />
              </HStack>
              <Text textAlign={"center"}>The letter A is in the word and in the correct spot.</Text>
            </Box>
            <Box py={3}>
              <HStack spacing={2} justify="center">
                <Key
                  value={"W"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"guessing"}
                  type="cell"
                />
                <Key
                  value={"O"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"guessing"}
                  type="cell"
                />
                <Key
                  value={"R"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"present"}
                  type="cell"
                />
                <Key
                  value={"D"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"guessing"}
                  type="cell"
                />
                <Key
                  value={"S"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"guessing"}
                  type="cell"
                />
              </HStack>
              <Text textAlign={"center"}>The letter R is in the word but in the wrong spot.</Text>
            </Box>
            <Box py={3}>
              <HStack spacing={2} justify="center">
                <Key
                  value={"V"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"guessing"}
                  type="cell"
                />
                <Key
                  value={"A"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"guessing"}
                  type="cell"
                />
                <Key
                  value={"L"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"guessing"}
                  type="cell"
                />
                <Key
                  value={"U"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"guessing"}
                  type="cell"
                />
                <Key
                  value={"E"}
                  onLetterClick={(letter) => console.log(letter)}
                  status={"absent"}
                  type="cell"
                />
              </HStack>
              <Text textAlign={"center"}>The letter E is not in the word in any spot.</Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
