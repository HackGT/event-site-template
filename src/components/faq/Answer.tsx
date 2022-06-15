import { Text } from "@chakra-ui/react";
import styles from "./Faq.module.scss";

interface AnswerProps {
  answer: string;
}

const Answer = (ap: AnswerProps) => {
  return <Text className={`${styles.answer} ${styles.both}`}>{ap.answer}</Text>;
};

export default Answer;
