"use client";

import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Icon,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Formik } from "formik";
import * as Yup from "yup";
import { ICreateInvoice, IFormList } from "@/utils/types";

const CreateInvoice = ({ setShowCreateInvoice }: ICreateInvoice) => {
  const btnBgColor = useColorModeValue("#F9FAFE", "#252945");
  const btnColor = useColorModeValue("#7E88C3", "#DFE3FA");
  const boldTextColor = useColorModeValue("#0C0E16", "#ffffff");
  const formBgColor = useColorModeValue("#ffffff", "#141625");
  const statusColor = useColorModeValue("#858BB2", "#DFE3FA");
  const placeHolderColor = useColorModeValue("#0C0E1640", "#ffffff");
  const draftColor = useColorModeValue("#888EB0", "#DFE3FA");
  const borderColor = useColorModeValue(
    "1px solid #DFE3FA",
    "1px solid #252945"
  );
  const errorBorder = "1px solid #EC5757";

  const [formArray, setFormArray] = useState<IFormList[]>([]);
  const boxRef: any = useRef(null);
  const handleHideCreateForm = (e: SyntheticEvent) => {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setShowCreateInvoice(false);
      }
    }, 0);
  };
  const initialValues = {
    billFromStreetAddress: "",
    billFromCity: "",
    billFromPostCode: "",
    billFromCountry: "",
    billToStreetAddress: "",
    billToCity: "",
    billToPostCode: "",
    billToCountry: "",
    clientName: "",
    clientEmail: "",
    invoiceDate: "",
    paymentTerms: "",
    projectDescription: "",
  };
  const validationSchema = Yup.object().shape({
    clientName: Yup.string().required("can't be empty"),
    clientEmail: Yup.string().email().required("can't be empty"),
    invoiceDate: Yup.string().required("can't be empty"),
    paymentTerms: Yup.string().required("can't be empty"),
    projectDescription: Yup.string().required("can't be empty"),
    billFromStreetAddress: Yup.string().required("can't be empty"),
    billFromCity: Yup.string().required("can't be empty"),
    billFromPostCode: Yup.string().required("can't be empty"),
    billFromCountry: Yup.string().required("can't be empty"),
    billToStreetAddress: Yup.string().required("can't be empty"),
    billToCity: Yup.string().required("can't be empty"),
    billToPostCode: Yup.string().required("can't be empty"),
    billToCountry: Yup.string().required("can't be empty"),
  });
  const handleCreateNewInvoice = () => {};
  const addToFormList = () => {
    setFormArray((prev) => [
      ...prev,
      { name: "", quantity: "", price: 0, total: 0 },
    ]);
  };
  const removeFromList = (idx: number) => {
    const newFormList = formArray.filter((_, index) => idx !== index);
    setFormArray(newFormList);
  };
  const handleFormArrayChange = (
    e: ChangeEvent<HTMLInputElement>,
    item: IFormList,
    index: number
  ) => {
    const currentInputName = e.target.name;
    const newFormArray = formArray
      .map((el, idx) => {
        if (idx === index) {
          return {
            ...el,
            [currentInputName]: e.target.value,
          };
        } else {
          return el;
        }
      })
      .map((el) => ({ ...el, total: +el.price * +el.quantity }));

    setFormArray(newFormArray);
  };
  console.log(formArray);
  useEffect(() => {
    boxRef.current?.focus();
  }, []);
  return (
    <Box
      w={["100vw"]}
      h={["100vh"]}
      position="fixed"
      left="103px"
      top="0px"
      bgColor="#00000030"
    >
      <Box
        w={["720px"]}
        px={["56px"]}
        overflowY="scroll"
        h="100vh"
        bgColor={formBgColor}
        borderRadius="0 20px 20px 0"
        tabIndex={1}
        onBlur={handleHideCreateForm}
        ref={boxRef}
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
            validationSchema={validationSchema}
          >
            {({
              handleSubmit,
              values,
              errors,
              touched,
              dirty,
              isValid,
              handleBlur,
              handleChange,
            }) => (
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
                      <Flex justify={"space-between"}>
                        <FormLabel
                          color={
                            touched.billFromStreetAddress &&
                            errors.billFromStreetAddress
                              ? "error"
                              : statusColor
                          }
                        >
                          Street Address
                        </FormLabel>
                        {touched.billFromStreetAddress &&
                          errors.billFromStreetAddress && (
                            <Text color="error">
                              {errors.billFromStreetAddress}
                            </Text>
                          )}
                      </Flex>
                      <Input
                        border={
                          touched.billFromStreetAddress &&
                          errors.billFromStreetAddress
                            ? errorBorder
                            : borderColor
                        }
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        w={["100%"]}
                        name="billFromStreetAddress"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.billFromStreetAddress}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <Flex justify={"space-between"}>
                        <FormLabel
                          color={
                            touched.billFromCity && errors.billFromCity
                              ? "error"
                              : statusColor
                          }
                        >
                          City
                        </FormLabel>
                        {touched.billFromCity && errors.billFromCity && (
                          <Text color="error">{errors.billFromCity}</Text>
                        )}
                      </Flex>
                      <Input
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        border={
                          touched.billFromCity && errors.billFromCity
                            ? errorBorder
                            : borderColor
                        }
                        w={["100%"]}
                        name="billFromCity"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.billFromCity}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <Flex justify={"space-between"}>
                        <FormLabel
                          color={
                            touched.billFromPostCode && errors.billFromPostCode
                              ? "error"
                              : statusColor
                          }
                        >
                          Post Code
                        </FormLabel>
                        {touched.billFromPostCode &&
                          errors.billFromPostCode && (
                            <Text color="error">{errors.billFromPostCode}</Text>
                          )}
                      </Flex>
                      <Input
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        border={
                          touched.billFromPostCode && errors.billFromPostCode
                            ? errorBorder
                            : borderColor
                        }
                        w={["100%"]}
                        name="billFromPostCode"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.billFromPostCode}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <Flex justify={"space-between"}>
                        <FormLabel
                          color={
                            touched.billFromCountry && errors.billFromCountry
                              ? "error"
                              : statusColor
                          }
                        >
                          Country
                        </FormLabel>
                        {touched.billFromCountry && errors.billFromCountry && (
                          <Text color="error">{errors.billFromCountry}</Text>
                        )}
                      </Flex>
                      <Input
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        border={
                          touched.billFromCountry && errors.billFromCountry
                            ? errorBorder
                            : borderColor
                        }
                        w={["100%"]}
                        name="billFromCountry"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.billFromCountry}
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
                  <Flex justify={"space-between"}>
                    <FormLabel
                      color={
                        touched.clientName && errors.clientName
                          ? "error"
                          : statusColor
                      }
                    >
                      {`Client's Name`}
                    </FormLabel>
                    {touched.clientName && errors.clientName && (
                      <Text color="error">{errors.clientName}</Text>
                    )}
                  </Flex>
                  <Input
                    color={boldTextColor}
                    _placeholder={{
                      color: placeHolderColor,
                    }}
                    border={
                      touched.clientName && errors.clientName
                        ? errorBorder
                        : borderColor
                    }
                    w={["100%"]}
                    name="clientName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.clientName}
                  />
                </FormControl>
                <FormControl mb={["24px"]}>
                  <Flex justify={"space-between"}>
                    <FormLabel
                      color={
                        touched.clientEmail && errors.clientEmail
                          ? "error"
                          : statusColor
                      }
                    >
                      {`Client's Email`}
                    </FormLabel>
                    {touched.clientEmail && errors.clientEmail && (
                      <Text color="error">{errors.clientEmail}</Text>
                    )}
                  </Flex>
                  <Input
                    color={boldTextColor}
                    _placeholder={{
                      color: placeHolderColor,
                    }}
                    border={
                      touched.clientEmail && errors.clientEmail
                        ? errorBorder
                        : borderColor
                    }
                    placeholder="e.g. email@example.com"
                    w={["100%"]}
                    name="clientEmail"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.clientEmail}
                  />
                </FormControl>
                <FormControl mb={["24px"]}>
                  <Flex justify={"space-between"}>
                    <FormLabel
                      color={
                        touched.billToStreetAddress &&
                        errors.billToStreetAddress
                          ? "error"
                          : statusColor
                      }
                    >
                      Street Address
                    </FormLabel>
                    {touched.billToStreetAddress &&
                      errors.billToStreetAddress && (
                        <Text color="error">{errors.billToStreetAddress}</Text>
                      )}
                  </Flex>
                  <Input
                    color={boldTextColor}
                    _placeholder={{
                      color: placeHolderColor,
                    }}
                    border={
                      touched.billToStreetAddress && errors.billToStreetAddress
                        ? errorBorder
                        : borderColor
                    }
                    w={["100%"]}
                    name="billToStreetAddress"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.billToStreetAddress}
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
                      <Flex justify={"space-between"}>
                        <FormLabel
                          color={
                            touched.billToCity && errors.billToCity
                              ? "error"
                              : statusColor
                          }
                        >
                          City
                        </FormLabel>
                        {touched.billToCity && errors.billToCity && (
                          <Text color="error">{errors.billToCity}</Text>
                        )}
                      </Flex>
                      <Input
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        border={
                          touched.billToCity && errors.billToCity
                            ? errorBorder
                            : borderColor
                        }
                        w={["100%"]}
                        name="billToCity"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.billToCity}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <Flex justify={"space-between"}>
                        <FormLabel
                          color={
                            touched.billToPostCode && errors.billToPostCode
                              ? "error"
                              : statusColor
                          }
                        >
                          Post Code
                        </FormLabel>
                        {touched.billToPostCode && errors.billToPostCode && (
                          <Text color="error">{errors.billToPostCode}</Text>
                        )}
                      </Flex>
                      <Input
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        border={
                          touched.billToPostCode && errors.billToPostCode
                            ? errorBorder
                            : borderColor
                        }
                        w={["100%"]}
                        name="billToPostCode"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.billToPostCode}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <Flex justify={"space-between"}>
                        <FormLabel
                          color={
                            touched.billToCountry && errors.billToCountry
                              ? "error"
                              : statusColor
                          }
                        >
                          Country
                        </FormLabel>
                        {touched.billToCountry && errors.billToCountry && (
                          <Text color="error">{errors.billToCountry}</Text>
                        )}
                      </Flex>
                      <Input
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        border={
                          touched.billToCountry && errors.billToCountry
                            ? errorBorder
                            : borderColor
                        }
                        w={["100%"]}
                        name="billToCountry"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.billToCountry}
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
                      <Flex justify={"space-between"}>
                        <FormLabel
                          color={
                            touched.invoiceDate && errors.invoiceDate
                              ? "error"
                              : statusColor
                          }
                        >
                          Invoice Date
                        </FormLabel>
                        {touched.invoiceDate && errors.invoiceDate && (
                          <Text color="error">{errors.invoiceDate}</Text>
                        )}
                      </Flex>
                      <Input
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        border={
                          touched.invoiceDate && errors.invoiceDate
                            ? errorBorder
                            : borderColor
                        }
                        w={["100%"]}
                        name="invoiceDate"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.invoiceDate}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <Flex justify={"space-between"}>
                        <FormLabel
                          color={
                            touched.paymentTerms && errors.paymentTerms
                              ? "error"
                              : statusColor
                          }
                        >
                          Payment Terms
                        </FormLabel>
                        {touched.paymentTerms && errors.paymentTerms && (
                          <Text color="error">{errors.paymentTerms}</Text>
                        )}
                      </Flex>
                      <Input
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        border={
                          touched.paymentTerms && errors.paymentTerms
                            ? errorBorder
                            : borderColor
                        }
                        w={["100%"]}
                        name="paymentTerms"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.paymentTerms}
                      />
                    </FormControl>
                  </GridItem>
                </Grid>
                <FormControl>
                  <Flex justify={"space-between"}>
                    <FormLabel
                      color={
                        touched.projectDescription && errors.projectDescription
                          ? "error"
                          : statusColor
                      }
                    >
                      Payment Terms
                    </FormLabel>
                    {touched.projectDescription &&
                      errors.projectDescription && (
                        <Text color="error">{errors.projectDescription}</Text>
                      )}
                  </Flex>
                  <Input
                    color={boldTextColor}
                    _placeholder={{
                      color: placeHolderColor,
                    }}
                    border={
                      touched.projectDescription && errors.projectDescription
                        ? errorBorder
                        : borderColor
                    }
                    placeholder="e.g. Graphic Design Service"
                    w={["100%"]}
                    name="projectDescription"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.projectDescription}
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
                  <GridItem colSpan={4}>
                    <Text color={statusColor}>Item Name</Text>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Text color={statusColor}>Quantity</Text>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Text color={statusColor}>Price</Text>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Text color={statusColor}>Total</Text>
                  </GridItem>
                </Grid>
                {formArray.map((item, idx) => (
                  <Grid
                    key={idx}
                    templateColumns={["repeat(10,1fr)"]}
                    mb={["16px"]}
                    columnGap={["16px"]}
                  >
                    <GridItem colSpan={4}>
                      <Input
                        w={["100%"]}
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        name="name"
                        value={item.name}
                        onChange={(e) => handleFormArrayChange(e, item, idx)}
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Input
                        p="12px"
                        w={["100%"]}
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        name="quantity"
                        value={item.quantity}
                        onChange={(e) => handleFormArrayChange(e, item, idx)}
                      />
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Input
                        w={["100%"]}
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        value={item.price}
                        name="price"
                        onChange={(e) => handleFormArrayChange(e, item, idx)}
                      />
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Input
                        w={["100%"]}
                        color={boldTextColor}
                        _placeholder={{
                          color: placeHolderColor,
                        }}
                        value={Number(item.quantity) * Number(item.price)}
                        name="total"
                        disabled
                      />
                    </GridItem>
                    <GridItem
                      colSpan={1}
                      alignItems="center"
                      justifyContent={"center"}
                      display={"flex"}
                    >
                      <Icon
                        _hover={{ color: "error" }}
                        cursor="pointer"
                        color="#888EB0"
                        as={FaTrash}
                        onClick={() => removeFromList(idx)}
                      />
                    </GridItem>
                  </Grid>
                ))}
                <Button
                  h={["48px"]}
                  color={btnColor}
                  bgColor={btnBgColor}
                  leftIcon={<FaPlus />}
                  _hover={{
                    bgColor: "#DFE3FA50",
                  }}
                  w="100%"
                  onClick={addToFormList}
                >
                  Add New Item
                </Button>

                <Flex
                  justify={"flex-end"}
                  gap={"8px"}
                  mt={["40px"]}
                  mb={"32px"}
                >
                  <Button bgColor={"#373B53"} _hover={{}} color={draftColor}>
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
