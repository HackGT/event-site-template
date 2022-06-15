import { Center, Text, VStack } from "@chakra-ui/react";
import QA from "./QA";
import styles from "./Faq.module.scss";

import qas from "./FAQ.json";

const Faq = () => {
  return (
    <div className={styles.container}>
      <Center>
        <Text className={styles.title}>Frequently Asked Questions</Text>
      </Center>
      <VStack spacing={"20px"}>
        {qas.qas.map((entry) => (
          <QA key={entry.question} question={entry.question} answer={entry.answer} />
        ))}
      </VStack>
    </div>
  );
};

export default Faq;
