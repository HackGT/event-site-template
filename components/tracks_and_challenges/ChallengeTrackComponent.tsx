import { Text } from "@chakra-ui/react";

import styles from "./TracksChallenges.module.scss";

interface Props {
  name: string;
  description: string;
  prize: string | null;
  key: any;
}

const BaseComponent = (p: Props) => {
  return (
    <div>
      <Text className={styles.subheader}>{p.name}</Text>
      <div className={styles.description}>
        <Text>{p.description}</Text>
        {p.prize ? <Text>{p.prize}</Text> : null}
      </div>
    </div>
  );
};

export default BaseComponent;
