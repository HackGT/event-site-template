import { Divider, HStack, StackDivider, Text } from "@chakra-ui/react";

interface EventProps {
  key: any;
  name: string;
  startTime: string;
  endTime: string;
}

const EventRow = (ep: EventProps) => {
  return (
    <HStack>
      <Text>{ep.name} -- </Text>
      <HStack divider={<StackDivider borderColor="black" />}>
        <Text>{ep.startTime}</Text>
        <Text>{ep.endTime}</Text>
      </HStack>
    </HStack>
  );
};

export default EventRow;
