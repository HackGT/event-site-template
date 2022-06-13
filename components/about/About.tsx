import { Text, VStack } from "@chakra-ui/react";
import styles from "./About.module.scss"
const About = () => {
  return (
    <div className={styles.container}>
      <VStack>
      <Text className={styles.mainText}>About</Text>
      <Text className={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna 
         aliqua. Mauris cursus mattis molestie a iaculis at erat. 
         Semper viverra nam libero justo laoreet sit amet cursus sit. 
         Viverra tellus in hac habitasse platea dictumst vestibulum 
         rhoncus. Posuere lorem ipsum dolor sit amet consectetur.
        Sed blandit libero volutpat sed.</Text>

      <Text className={styles.mainText}>What is HackGT?</Text>
      <Text className={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna 
         aliqua. Mauris cursus mattis molestie a iaculis at erat. 
         Semper viverra nam libero justo laoreet sit amet cursus sit. 
         Viverra tellus in hac habitasse platea dictumst vestibulum 
         rhoncus. Posuere lorem ipsum dolor sit amet consectetur.
        Sed blandit libero volutpat sed.</Text>
      </VStack>
    </div>
  );
};

export default About;
