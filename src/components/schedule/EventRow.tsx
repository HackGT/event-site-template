import React, { useRef, useEffect, useState } from "react";
import { Box, Center, chakra, HStack, Icon } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import dateFormat from "dateformat";

import styles from "./Schedule.module.scss";

const formatDateString = (date: string) => dateFormat(date, "h:MM TT");

export const EventRow = (props: any) => {
  return (
    <Box key={props.row.id} className={styles.row}>
      <HStack>
        <Box>
          <TimeIcon fontSize="16px" marginRight="15px" />
          {`${formatDateString(props.row.startDate)} - ${formatDateString(props.row.endDate)}`}
        </Box>
        <Box>{props.row.name}</Box>
      </HStack>
    </Box>
  );
};
