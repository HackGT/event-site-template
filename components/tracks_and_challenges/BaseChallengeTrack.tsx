import { Text, HStack, Center, VStack } from "@chakra-ui/react";
import BaseComponent from "./ChallengeTrackComponent";

import styles from "./TracksChallenges.module.scss";

import tracks from "./tracks.json";
import challenges from "./challenges.json";

const ChallengeTrackBase = () => {
  return (
    <Center className={styles.container}>
      <VStack>
        <Text className={styles.header}>Tracks and Challenges</Text>
        <Text className={styles.header}>Tracks</Text>
        <HStack spacing="10vw">
          {tracks.tracks.map((track) => (
            <BaseComponent
              key={track.name}
              name={track.name}
              description={track.description}
              prize={null}
            />
          ))}
        </HStack>
        <Text className={styles.header}>Challenges</Text>
        <HStack spacing="10vw">
          {challenges.challenges.map((challenge) => (
            <BaseComponent
              key={challenge.name}
              name={challenge.name}
              description={challenge.description}
              prize={challenge.prize}
            />
          ))}
        </HStack>
      </VStack>
    </Center>
  );
};

export default ChallengeTrackBase;
