import { Box, Center, Text } from "@chakra-ui/react";

enum Statuses {
  "absent",
  "present",
  "correct",
  "guessing",
}

type CharStatus = keyof typeof Statuses;

type Props = {
  value: string;
  onLetterClick?: (letter: string) => void;
  status: CharStatus;
  type: "keyboard" | "cell";
};

export default function Key({ value, status, onLetterClick, type }: Props) {
  function handleOnLetterClick() {
    if (onLetterClick) onLetterClick(value);
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
      w={
        type === "keyboard"
          ? {
              base: 6,
              sm: 10,
              lg: 16,
            }
          : 14
      }
      h={
        type === "keyboard"
          ? {
              base: 6,
              sm: 10,
              lg: 16,
            }
          : 14
      }
      rounded="sm"
      transition="all"
      transitionDuration="500ms"
    >
      <Center h="full">
        <Text
          fontWeight={"bold"}
          fontSize={{
            base: "xs",
            lg: "xl",
          }}
        >
          {value}
        </Text>
      </Center>
    </Box>
  );
}
