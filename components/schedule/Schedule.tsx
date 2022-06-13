import { Center, Text } from "@chakra-ui/react";
import { useState } from "react";

import ComingSoon from "./ComingSoon";
import ScheduleTable from "./ScheduleTable";

import styles from "./Schedule.module.scss";

const Schedule = () => {
  const [comingSoon] = useState(false);

  return (
    <div className={styles.component}>
      <Center>
        <Text className={styles.title}>Schedule</Text>
      </Center>
      <Center>{comingSoon ? <ComingSoon /> : <ScheduleTable />}</Center>
    </div>
  );
};

export default Schedule;
