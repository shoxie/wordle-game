import type { User } from "@/types";
import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getRanking } from "@/lib/api";
import { useQuery } from "react-query";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/atoms";
import { BsBarChartLineFill } from "react-icons/bs";

export default function RankingModal() {
  const [isOpen, setIsOpen] = useState(true);
  const { data } = useQuery<User[]>(["ranking"], () => getRanking());
  const [localUser] = useAtom(userAtom);
  return (
    <>
      <Button
        fontSize="1.2em"
        _hover={{
          fontSize: "1.5em",
        }}
        variant={"unstyled"}
        onClick={() => setIsOpen(true)}
        transition="ease-in-out"
        transitionProperty="all"
        transitionDuration="200ms"
      >
        <BsBarChartLineFill cursor="pointer" />
      </Button>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent pb={5}>
          <ModalHeader textAlign={"center"}>Ranking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              {data &&
                data.map((user, index) => (
                  <HStack
                    key={user.id}
                    justify="space-between"
                    w="full"
                    borderBottom={"1px"}
                  >
                    <Text>
                      {user.name.length !== 0 ? user.name : user.id}{" "}
                      {user.id === localUser?.id ? "(You)" : null}
                    </Text>
                    <Text>{user.solved}</Text>
                  </HStack>
                ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
