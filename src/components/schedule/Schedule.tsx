import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";
import { Box, Center, chakra, Text, VStack } from "@chakra-ui/react";

import { fetchAllEvents, fetchUpcomingEvents } from "../../services/cmsService";
import { EventRow } from "./EventRow";

import styles from "./Schedule.module.scss";

type Props = {
  tableLength: number;
  homepage: boolean;
  virtual: boolean;
};

const Schedule: React.FC<Props> = (props: Props) => {
  const [events, setEvents] = useState<any[]>([]);

  const getDayFromDate = (date: string) => dateFormat(date, "dddd, mmm dS");

  useEffect(() => {
    const getEvents = async () => {
      let data;
      let startIndex = 0;
      const elements = [];
      if (props.homepage) {
        data = await fetchUpcomingEvents(props.virtual);
      } else {
        data = await fetchAllEvents(props.virtual);
      }
      const sortedData = data.allEvents.sort((a: any, b: any) => {
        const dateA = a.startDate;
        const dateB = b.startDate;
        return dateA >= dateB ? 1 : -1;
      });
      for (let i = 0; i < sortedData.length - 1; i++) {
        if (
          getDayFromDate(sortedData[i].startDate) !== getDayFromDate(sortedData[i + 1].startDate)
        ) {
          elements.push(sortedData.slice(startIndex, i + 1));
          startIndex = i + 1;
        }
      }
      elements.push(sortedData.slice(startIndex, data.length));
      setEvents([...elements]);
    };
    getEvents();
  }, []);

  return (
    <Center className={styles.container}>
      <VStack align="stretch" spacing={"20px"}>
        <Text className={styles.title}>Schedule</Text>
        {events.map((chunk: any, index: any, arr: any) => (
          <Box className={styles.daySection} key={chunk[0].startDate}>
            <Box className={styles.header}>{`${getDayFromDate(chunk[index].startDate)}`}</Box>
            {events[index].map((row: any) => (
              <EventRow key={null} row={row} />
            ))}
          </Box>
        ))}
      </VStack>
    </Center>
  );
};

export default Schedule;
