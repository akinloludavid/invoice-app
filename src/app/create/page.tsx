"use client";

import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { Formik } from "formik";

const CreateInvoice = () => {
  const btnBgColor = useColorModeValue("#F9FAFE", "#252945");
  const btnColor = useColorModeValue("#7E88C3", "#DFE3FA");
  const boldTextColor = useColorModeValue("#0C0E16", "#ffffff");
  const formBgColor = useColorModeValue("#ffffff", "#141625");
  const statusColor = useColorModeValue("#858BB2", "#DFE3FA");
  const placeHolderColor = useColorModeValue("#0C0E1640", "#ffffff");
  const draftColor = useColorModeValue("#888EB0", "#DFE3FA");
  const lightTextColor = useColorModeValue(
    "lightMode.textColor",
    "darkMode.lightText"
  );
  const initialValues = {};
  const handleCreateNewInvoice = () => {};
  return (
    <Box
      w={["100vw"]}
      h={["100vh"]}
      position="fixed"
      left="103px"
      bgColor="#00000050"
    >
      <Box
        w={["720px"]}
        px={["56px"]}
        overflowY="scroll"
        h="100vh"
        bgColor={formBgColor}
        borderRadius="0 20px 20px 0"
      >
        <Heading
          fontSize={["24px"]}
          fontWeight="700"
          lineHeight={"32px"}
          color={boldTextColor}
          mb={["48px"]}
          mt={["56px"]}
          as="h2"
        >
          New Invoice
        </Heading>
        <Box maxW="100%">
          <Formik
            initialValues={initialValues}
            onSubmit={handleCreateNewInvoice}
          >
            {({ handleSubmit, values, errors, touched, dirty, isValid }) => (
              <form onSubmit={handleSubmit}>
                <Heading variant={"h4"} as="h4" color="#7C5DFA" mb="24px">
                  Bill From
                </Heading>
                <Grid
                  templateColumns={"repeat(3,1fr)"}
                  mb={["48px"]}
                  gap={["24px"]}
                  w={["100%"]}
                >
                  <GridItem colSpan={3}>
                    <FormControl>
                      <FormLabel color={statusColor}>Street Address</FormLabel>
                      <Input
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        w={["100%"]}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel color={statusColor}>City</FormLabel>
                      <Input
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        w={["100%"]}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel color={statusColor}>Post Code</FormLabel>
                      <Input
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        w={["100%"]}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel color={statusColor}>Country</FormLabel>
                      <Input
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        w={["100%"]}
                      />
                    </FormControl>
                  </GridItem>
                </Grid>

                <Heading
                  variant={"h4"}
                  as="h4"
                  color="#7C5DFA"
                  mt={["48px"]}
                  mb="24px"
                >
                  Bill To
                </Heading>
                <FormControl mb={["24px"]}>
                  <FormLabel color={statusColor}>Client’s Name</FormLabel>
                  <Input
                    _placeholder={{
                      color: placeHolderColor,
                    }}
                    w={["100%"]}
                  />
                </FormControl>
                <FormControl mb={["24px"]}>
                  <FormLabel color={statusColor}>Client’s Email</FormLabel>
                  <Input
                    _placeholder={{
                      color: placeHolderColor,
                    }}
                    placeholder="e.g. email@example.com"
                    w={["100%"]}
                  />
                </FormControl>
                <FormControl mb={["24px"]}>
                  <FormLabel color={statusColor}>Street Address</FormLabel>
                  <Input
                    _placeholder={{
                      color: placeHolderColor,
                    }}
                    w={["100%"]}
                  />
                </FormControl>
                <Grid
                  templateColumns={"repeat(3,1fr)"}
                  mb={["48px"]}
                  gap={["24px"]}
                  w={["100%"]}
                >
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel color={statusColor}>City</FormLabel>
                      <Input
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        w={["100%"]}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel color={statusColor}>Post Code</FormLabel>
                      <Input
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        w={["100%"]}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel color={statusColor}>Country</FormLabel>
                      <Input
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        w={["100%"]}
                      />
                    </FormControl>
                  </GridItem>
                </Grid>
                <Grid
                  templateColumns={"repeat(2,1fr)"}
                  mb={["24px"]}
                  gap={["24px"]}
                  w={["100%"]}
                >
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel color={statusColor}>Invoice Date</FormLabel>
                      <Input
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        w={["100%"]}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel color={statusColor}>Payment Terms</FormLabel>
                      <Input
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        w={["100%"]}
                      />
                    </FormControl>
                  </GridItem>
                </Grid>
                <FormControl>
                  <FormLabel color={statusColor}>Project Description</FormLabel>
                  <Input
                    _placeholder={{
                      color: placeHolderColor,
                    }}
                    placeholder="e.g. Graphic Design Service"
                    w={["100%"]}
                  />
                </FormControl>
                <Heading
                  fontSize={"18px"}
                  fontWeight="700"
                  mt={["32px"]}
                  mb={["16px"]}
                  color="#777F98"
                >
                  Item List
                </Heading>
                <Grid
                  templateColumns={["repeat(10,1fr)"]}
                  mb={["16px"]}
                  columnGap={["16px"]}
                >
                  <GridItem colSpan={4}>Item Name</GridItem>
                  <GridItem colSpan={1}>Quantity</GridItem>
                  <GridItem colSpan={2}>Price</GridItem>
                  <GridItem colSpan={2}>Total</GridItem>
                </Grid>
                <Button
                  h={["48px"]}
                  color={btnColor}
                  bgColor={btnBgColor}
                  leftIcon={<FaPlus />}
                  _hover={{
                    bgColor: "#DFE3FA",
                  }}
                  w="100%"
                >
                  Add New Item
                </Button>

                <Flex
                  justify={"flex-end"}
                  gap={"8px"}
                  mt={["40px"]}
                  mb={"32px"}
                >
                  <Button bgColor={"#373B53"} color={draftColor}>
                    Save as Draft
                  </Button>
                  <Button>Save & Send</Button>
                </Flex>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateInvoice;
