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
import { useSetting } from "@/context";
import { useEffect, useState } from "react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Switch } from "@chakra-ui/react";
import { GameStates } from "@/types";

export default function GameResultModal({
  gameState,
  resetGame,
}: {
  gameState: keyof typeof GameStates;
  resetGame: () => void;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    setIsOpen(gameState !== "playing");
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timer;
    interval = setInterval(() => {
      var date = new Date();
      var hours = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();

      var leftHour = 23 - hours;
      var leftMinute = 59 - minute;
      var leftSecond = 59 - second;
      setCountdown(
        `${leftHour.toString().padStart(2, "0")}:${leftMinute
          .toString()
          .padStart(2, "0")}:${leftSecond.toString().padStart(2, "0")}`
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent pb={5}>
          <ModalHeader textAlign={"center"}>
            {gameState === "win" ? "Configuration" : "Lmao u lost"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {gameState === "lose" && "Better try again"}
            {gameState === "win" && "Congratulation on your winning !"}
            <HStack justify={"space-between"}>
              <Text>Next word</Text>
              <Text>{countdown}</Text>
            </HStack>
          </ModalBody>
          {gameState !== "win" && (
            <ModalFooter>
              <Button onClick={resetGame}>Reset</Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
