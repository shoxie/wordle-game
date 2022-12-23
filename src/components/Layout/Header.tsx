import { headerHeightAtom } from "@/lib/atoms";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import GuideModal from "../Modal/GuideModal";
import RankingModal from "../Modal/Ranking";
import SettingModal from "../Modal/SettingModal";

export default function Header() {
  const headerContainer = useRef<HTMLDivElement>(null);
  const [, setHeaderHeight] = useAtom(headerHeightAtom);

  useEffect(() => {
    if (!headerContainer.current) return;
    setHeaderHeight(headerContainer.current.clientHeight);
  }, [headerContainer]);

  return (
    <Box
      borderBottom="2px"
      borderColor={"white"}
      py={5}
      px={10}
      ref={headerContainer}
    >
      <HStack justify="space-between">
        <Box>
          <GuideModal />
        </Box>
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Wordle
          </Text>
        </Box>
        <HStack>
          <RankingModal />
          <SettingModal />
        </HStack>
      </HStack>
    </Box>
  );
}
