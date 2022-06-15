import { Center, Text } from "@chakra-ui/react";

import styles from "./Registration.module.scss";

const NotYet = () => {
  return (
    <Center className={styles.container}>
      <Text className={styles.mainText}>Registration will open soon!</Text>
    </Center>
  );
};

export default NotYet;
