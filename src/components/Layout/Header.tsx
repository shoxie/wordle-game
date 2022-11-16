import { Box, Container, HStack, Text, Button } from "@chakra-ui/react";
import { useSetting } from "@/context";
import { InfoIcon } from "@chakra-ui/icons";
import { useRef, useEffect } from "react";
import SettingModal from "../Modal/SettingModal";
import { useColorMode } from "@chakra-ui/react";
import GuideModal from "../Modal/GuideModal";
import { useAtom } from "jotai";
import { headerHeightAtom } from "@/app/atoms";

export default function Header() {
  const headerContainer = useRef<HTMLDivElement>(null)
  const [, setHeaderHeight] = useAtom(headerHeightAtom)

  useEffect(() => {
    if (!headerContainer.current) return
    setHeaderHeight(headerContainer.current.clientHeight)
  }, [headerContainer])

  return (
    <Box borderBottom="2px" borderColor={"white"} py={5} px={10} ref={headerContainer}>
      <HStack justify="space-between">
        <GuideModal />
        <Box>
          <Text fontSize="2xl" fontWeight="bold">Wordie</Text>
        </Box>
        <HStack>
          <SettingModal />
        </HStack>
      </HStack>
    </Box>
  );
}
