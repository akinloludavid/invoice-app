import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { StatusChip } from "../StatusChip";

const InvoiceListComp = (props: any) => {
  const { id, paymentDue: date, clientName, total, status } = props;
  const router = useRouter();

  const lightTextColor = useColorModeValue(
    "lightMode.textColor",
    "darkMode.lightText"
  );
  const boldTextColor = useColorModeValue("#0C0E16", "#ffffff");
  const listBgColor = useColorModeValue("lightMode.white", "darkMode.darkBlue");

  return (
    <Grid
      w={["100%"]}
      borderRadius={"8px"}
      h={["72px"]}
      py={["16px"]}
      px={["32px"]}
      alignItems="center"
      bgColor={listBgColor}
      cursor="pointer"
      boxShadow="0px 10px 10px -10px rgba(72, 84, 159, 0.100397)"
      templateColumns={["repeat(10,1fr)"]}
      onClick={() => router.push(`/invoice/${id}`)}
    >
      <GridItem colSpan={2}>
        <Text color={lightTextColor} variant={"body1"} fontWeight="700">
          <Text color="#7E88C3" as="span" fontSize={"12px"} fontWeight="700">
            #
          </Text>
          {id}
        </Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Text variant={"body1"} color={useColorModeValue("#888EB0", "#DFE3FA")}>
          {date}
        </Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Text variant={"body1"} color={useColorModeValue("#858BB2", "#FFFFFF")}>
          {clientName}
        </Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Text
          fontSize="16px"
          fontWeight={["700"]}
          variant={"body1"}
          color={boldTextColor}
        >
          £{total}
        </Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Flex justify={"space-between"} my="auto" align="center">
          <StatusChip status={status} />
          <Icon color="#7C5DFA" as={BiChevronRight} strokeWidth="2" />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default InvoiceListComp;
