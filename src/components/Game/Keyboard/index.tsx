import { Box, Button, HStack, VStack, Center } from "@chakra-ui/react";
import Key from "../Key";
import type { Row } from "@/types";
import { useMemo } from "react";
import { FiDelete } from "react-icons/fi";

const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];

const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];

const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

type Props = {
  onLetterClick: (letter: string) => void;
  onSubmit: () => void;
  onDelete: () => void;
  rows: Row[];
};

export default function Keyboard({
  onLetterClick,
  onSubmit,
  rows,
  onDelete,
}: Props) {
  const cells = useMemo(() => rows.flat(), [rows]);

  const checkStatus = (key: string) => {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].value === key && cells[i].status === "absent")
        return "absent";
    }
    return "guessing";
  };

  return (
    <VStack spacing={2}>
      <HStack alignItems={"center"} justify={"center"} spacing={2}>
        {firstRow.map((key, idx) => (
          <Key
            key={key}
            value={key}
            onLetterClick={(letter) => onLetterClick(letter)}
            status={checkStatus(key)}
            type="keyboard"
          />
        ))}
      </HStack>
      <HStack alignItems={"center"} justify={"center"} spacing={2}>
        {secondRow.map((key, idx) => (
          <Key
            key={key}
            value={key}
            onLetterClick={(letter) => onLetterClick(letter)}
            status={checkStatus(key)}
            type="keyboard"
          />
        ))}
      </HStack>
      <HStack alignItems={"center"} justify={"center"} spacing={2}>
        {thirdRow.map((key, idx) => (
          <Key
            key={key}
            value={key}
            onLetterClick={(letter) => onLetterClick(letter)}
            status={checkStatus(key)}
            type="keyboard"
          />
        ))}
        <Button
          border="2px"
          borderColor={"white"}
          display={{
            base: "none",
            lg: "block",
          }}
          w={{
            base: 6,
            sm: 10,
            lg: 16,
          }}
          h={{
            base: 6,
            sm: 10,
            lg: 16,
          }}
          variant="unstyled"
          onClick={onSubmit}
        >
          Enter
        </Button>
        <Button
          border="2px"
          borderColor={"white"}
          display={{
            base: "none",
            lg: "block",
          }}
          w={{
            base: 6,
            sm: 10,
            lg: 16,
          }}
          h={{
            base: 6,
            sm: 10,
            lg: 16,
          }}
          variant="unstyled"
          onClick={onDelete}
        >
          <Center h="full">
            <FiDelete />
          </Center>
        </Button>
      </HStack>
      <HStack
        display={{
          lg: "none",
        }}
      >
        <Button
          border="2px"
          borderColor={"white"}
          w={{
            base: 6,
            sm: 10,
            lg: 16,
          }}
          h={{
            base: 6,
            sm: 10,
            lg: 16,
          }}
          variant="unstyled"
          onClick={onSubmit}
        >
          Enter
        </Button>
        <Button
          border="2px"
          borderColor={"white"}
          w={{
            base: 6,
            sm: 10,
            lg: 16,
          }}
          h={{
            base: 6,
            sm: 10,
            lg: 16,
          }}
          variant="unstyled"
          onClick={onDelete}
        >
          <Center h="full">
            <FiDelete />
          </Center>
        </Button>
      </HStack>
    </VStack>
  );
}
