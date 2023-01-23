"use client";
import EditInvoice from "@/components/EditInvoice";
import GoBack from "@/components/GoBack";
import DeleteModal from "@/components/Modals/DeleteModal";
import { StatusChip } from "@/components/StatusChip";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import db from "../../../../data.json";
const InvoiceDetails = ({ params }: any) => {
  const { id } = params;
  const [isOpen, setIsOpen] = useState(false);
  const [isEditInvoice, setShowEditInvoice] = useState(false);
  const invoice = db.filter((el) => el.id === id)[0];
  const cardBgColor = useColorModeValue("#ffffff", "#1E2139");
  const boldTextColor = useColorModeValue("#0C0E16", "#ffffff");
  const handleDeleteModal = () => {
    setIsOpen(false);
  };
  const showEditForm = () => {
    setShowEditInvoice(true);
  };
  const statusColor = useColorModeValue("#858BB2", "#DFE3FA");
  const lightTextColor = useColorModeValue(
    "lightMode.textColor",
    "darkMode.lightText"
  );

  const tableBgColor = useColorModeValue("#F9FAFE", "#252945");
  const amountBgColor = useColorModeValue("#373B53", "#0C0E16");
  return (
    <Box pt={["64px"]} pb={["54px"]}>
      {isEditInvoice && (
        <EditInvoice
          invoice={invoice}
          setShowCreateInvoice={setShowEditInvoice}
          id={id}
        />
      )}
      <DeleteModal id={id} isOpen={isOpen} onClose={handleDeleteModal} />
      <GoBack />
      <Flex flexDirection={["column"]} mt={["32px"]} gap={["24px"]}>
        <Flex
          align={["center"]}
          borderRadius={"8px"}
          bgColor={cardBgColor}
          h={["88px"]}
          justify={["space-between"]}
          px={["32px"]}
        >
          <Flex align={["center"]} gap={["16px"]}>
            <Text color={statusColor}>Status</Text>
            <StatusChip status={invoice.status.toLowerCase()} />
          </Flex>
          <Flex gap={["8px"]} align={["center"]}>
            <Button variant={"secondary"} onClick={showEditForm}>
              Edit
            </Button>
            <Button variant="delete" onClick={() => setIsOpen(true)}>
              Delete
            </Button>
            <Button>Mark as Paid</Button>
          </Flex>
        </Flex>
        <Flex bgColor={cardBgColor} p={["48px"]} flexDirection={["column"]}>
          <Flex justify={["space-between"]} mb={["21px"]}>
            <Box>
              <Text
                color={lightTextColor}
                variant={"body1"}
                fontWeight="700"
                mb="8px"
                fontSize={["16px"]}
              >
                <Text
                  color="#7E88C3"
                  fontSize={["16px"]}
                  as="span"
                  fontWeight="700"
                >
                  #
                </Text>
                {id}
              </Text>
              <Text color={statusColor}>{invoice.description}</Text>
            </Box>
            <Box h={["75px"]} display="flex" flexDirection={"column"} gap="5px">
              <Text color={statusColor} textAlign={"right"}>
                {invoice.senderAddress.street}
              </Text>
              <Text color={statusColor} textAlign={"right"}>
                {invoice.senderAddress.city}
              </Text>
              <Text color={statusColor} textAlign={"right"}>
                {invoice.senderAddress.postCode}
              </Text>
              <Text color={statusColor} textAlign={"right"}>
                {invoice.senderAddress.country}
              </Text>
            </Box>
          </Flex>
          <Flex gap={["100px"]}>
            <Box>
              <Text color={statusColor} mb={["12px"]}>
                Invoice Date
              </Text>
              <Text color={boldTextColor} variant="bold">
                {invoice.createdAt}
              </Text>
              <Text color={statusColor} mt={["32px"]} mb={["12px"]}>
                Payment Due
              </Text>
              <Text color={boldTextColor} variant="bold">
                {invoice.paymentDue}
              </Text>
            </Box>
            <Box>
              <Text color={statusColor} mb={["12px"]}>
                Bill To
              </Text>
              <Text color={boldTextColor} variant="bold" mb={["8px"]}>
                {invoice.clientName}
              </Text>
              <Box
                h={["75px"]}
                display="flex"
                flexDirection={"column"}
                gap="5px"
              >
                <Text color={statusColor} textAlign={"left"}>
                  {invoice.clientAddress.street}
                </Text>
                <Text color={statusColor} textAlign={"left"}>
                  {invoice.clientAddress.city}
                </Text>
                <Text color={statusColor} textAlign={"left"}>
                  {invoice.clientAddress.postCode}
                </Text>
                <Text color={statusColor} textAlign={"left"}>
                  {invoice.clientAddress.country}
                </Text>
              </Box>
            </Box>
            <Box>
              <Text color={statusColor} mb={["12px"]}>
                Sent To
              </Text>
              <Text color={boldTextColor} variant={"bold"}>
                alexgrim@mail.com
              </Text>
            </Box>
          </Flex>
          <Box
            bgColor={tableBgColor}
            mt={["45px"]}
            p={["32px"]}
            borderRadius="8px 8px 0px 0px"
          >
            <Grid templateColumns={["repeat(6,1fr)"]} mb={["32px"]}>
              <GridItem colSpan={[3]}>
                <Text color={statusColor} variant="body2">
                  Item Name
                </Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text color={statusColor} variant="body2" textAlign="center">
                  QTY.
                </Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text variant="body2" color={statusColor} textAlign="right">
                  Price
                </Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text color={statusColor} variant="body2" textAlign="right">
                  Total
                </Text>
              </GridItem>
            </Grid>
            {invoice.items.map((item) => (
              <Grid
                key={item.name}
                mb={["32px"]}
                templateColumns={["repeat(6,1fr)"]}
              >
                <GridItem colSpan={[3]}>
                  <Text
                    color={boldTextColor}
                    variant="body1"
                    fontWeight={"700"}
                  >
                    {item.name}
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text
                    color={statusColor}
                    variant="body1"
                    fontWeight={"700"}
                    textAlign="center"
                  >
                    {item.quantity}
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text
                    color={statusColor}
                    variant="body1"
                    fontWeight={"700"}
                    textAlign="right"
                  >
                    £{item.price}
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text
                    color={boldTextColor}
                    variant="body1"
                    fontWeight={"700"}
                    textAlign="right"
                  >
                    £{item.total}
                  </Text>
                </GridItem>
              </Grid>
            ))}
          </Box>
          <Flex
            bgColor={amountBgColor}
            justify={["space-between"]}
            align="center"
            px={["32px"]}
            py={["24px"]}
            borderRadius="0 0 8px 8px"
          >
            <Text variant="body1" color="white">
              Amount Due
            </Text>
            <Text
              fontSize={"24px"}
              fontWeight="700"
              lineHeight={"32px"}
              color="#fff"
            >
              £{invoice.total}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default InvoiceDetails;
