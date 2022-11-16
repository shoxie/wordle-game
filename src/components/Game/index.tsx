import { Box, HStack, VStack } from "@chakra-ui/react";
import Key from "./Key";

const plays = [
  [
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
  ],
  [
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
  ],
  [
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
  ],
  [
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
  ],
  [
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
  ],
  [
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
    {
      value: "",
      status: "guessing",
    },
  ],
];

export default function GamePanel() {
  return (
    <Box h="full">
      <VStack h="full" justify={"center"}>
        {plays.map((play, index) => (
          <HStack key={index}>
            {play.map((guess, idx) => (
              <Key
                key={idx}
                value={guess.value}
                status={guess.status as any}
                onLetterClick={(letter) => console.log(letter)}
              />
            ))}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}
