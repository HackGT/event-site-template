import { Collapse, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";
import styles from "./Faq.module.scss";

interface QAProps {
  key: string;
  question: string;
  answer: string;
}

const QA = (qap: QAProps) => {
  const [questionClicked, setQuestionClicked] = useState(false);

  return (
    <div className={styles.qa_shape}>
      <Question
        onClick={() => {
          setQuestionClicked(!questionClicked);
        }}
        question={qap.question}
      />
      <Collapse in={questionClicked} animateOpacity>
        <Answer answer={qap.answer} />
      </Collapse>
    </div>
  );
};

export default QA;
