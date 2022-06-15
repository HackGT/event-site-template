import { Center, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import EventRow from "./EventRow";

import styles from "./Schedule.module.scss";

import events from "./ScheduleEvents.json";

const ScheduleTable = () => {
  const [eventDays] = useState(["Friday", "Saturday", "Sunday"]);

  const genDayTable = (day: string) => {
    // filter the events by the given day and map them.
    return events.events
      .filter((e) => e.day == day)
      .map((event: any) => (
        <EventRow
          key={event}
          name={event.name}
          startTime={event.startTime}
          endTime={event.endTime}
        />
      ));
  };

  return (
    <div className={styles.schedule}>
      {eventDays.map((day) => (
        <div key={day}>
          <Center>
            <Text className={styles.dayHeader}>{day}</Text>
          </Center>
          <Center>
            <VStack>{genDayTable(day)}</VStack>
          </Center>
        </div>
      ))}
    </div>
  );
};

export default ScheduleTable;
