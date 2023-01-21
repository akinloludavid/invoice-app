"use client";
import Image from "next/image";
import fonts from "@next/font/google";
import { HiPlusCircle } from "react-icons/hi";
import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import db from "../../data.json";
import InvoiceListComp from "@/components/InvoiceList";
export default function Home() {
  const boldTextColor = useColorModeValue("#0C0E16", "#ffffff");
  const lightTextColor = useColorModeValue(
    "lightMode.textColor",
    "darkMode.lightText"
  );
  return (
    <Box pt={["72px"]}>
      <Flex justify={"space-between"} align="center" mb={["65px"]}>
        <Box>
          <Heading color={boldTextColor} variant="h1" as="h1" mb="8px">
            Invoices
          </Heading>
          <Text color={lightTextColor}>
            There are total {db.length} invoices
          </Text>
        </Box>
        <Flex>
          <Select outline={"none"} border="none" placeholder="Filter By Status">
            <option></option>
          </Select>
          <Button
            leftIcon={<HiPlusCircle size="32px" />}
            w={["190px"]}
            fontSize={["12px"]}
            fontWeight={["700"]}
            letterSpacing="-0.25"
          >
            New Invoice
          </Button>
        </Flex>
      </Flex>
      <Box>
        {db.map((el) => (
          <Box key={el.id} mb="16px">
            <InvoiceListComp {...el} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
