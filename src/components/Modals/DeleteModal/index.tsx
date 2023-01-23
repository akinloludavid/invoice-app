import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Box,
  Text,
  Flex,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
const DeleteModal = ({ isOpen, onClose, id }: any) => {
  const boldTextColor = useColorModeValue("#0C0E16", "#ffffff");
  const draftColor = useColorModeValue("#888EB0", "#DFE3FA");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent top="20%" h="250px">
        <Box
          h="250px"
          borderRadius={"8px"}
          p={["48px"]}
          boxShadow="0px 10px 10px -10px rgba(72, 84, 159, 0.100397)"
        >
          <ModalHeader
            color={boldTextColor}
            fontSize={"24px"}
            fontWeight="700"
            mb={["13px"]}
            textAlign="left"
          >
            Confirm Deletion
          </ModalHeader>
          <Text
            mb={["16px"]}
            fontSize="12px"
            fontWeight={"500"}
            color={draftColor}
          >
            Are you sure you want to delete invoice #{id}? This action cannot be
            undone.
          </Text>
          <Flex justify={"flex-end"} gap="8px">
            <Button variant={"secondary"} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="delete">Delete</Button>
          </Flex>
        </Box>
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
