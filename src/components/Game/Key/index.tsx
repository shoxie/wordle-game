import { Box, Text } from "@chakra-ui/react";

enum Statuses {
  "absent",
  "present",
  "correct",
  "guessing",
}

type CharStatus = keyof typeof Statuses;

type Props = {
  value: string;
  onLetterClick: (letter: string) => void;
  status: CharStatus;
};

export default function Key({ value, status, onLetterClick }: Props) {
  function handleOnLetterClick() {
    onLetterClick(value);
  }

  return (
    <Box
      bg={
        status === "correct"
          ? "green"
          : status === "present"
          ? "orange"
          : status === "absent"
          ? "gray.700"
          : "transparent"
      }
      border="2px"
      borderColor={
        status === "correct"
          ? "green"
          : status === "present"
          ? "orange"
          : status === "absent"
          ? "transparent"
          : "white"
      }
      onClick={handleOnLetterClick}
      p={5}
      px={6}
      rounded="sm"
    >
      <Text fontWeight={"bold"} fontSize={"xl"}>
        {value}
      </Text>
    </Box>
  );
}
