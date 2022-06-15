import { Text } from "@chakra-ui/react";
import styles from "./Faq.module.scss";

interface QuestionProps {
  question: string;
  onClick: any;
}

const Question = (qp: QuestionProps) => {
  return (
    <Text onClick={qp.onClick} className={`${styles.question} ${styles.both}`}>
      {qp.question}
    </Text>
  );
};

export default Question;
