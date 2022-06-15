import { HStack, Link, Text, VStack } from "@chakra-ui/react";

import styles from "./Registration.module.scss";

import types from "./Registration.json";

const RegisterBase = () => {
  return (
    <div className={styles.container}>
      <VStack>
        <Text className={styles.mainText}>Registration is now open until never.</Text>
        <HStack spacing="30px">
          {types.types.map((type) => (
            <Link
              style={{ textDecoration: "none" }}
              className={styles.button}
              target={"_blank"}
              key={null}
              href={type.link}
            >
              {type.name}
            </Link>
          ))}
        </HStack>
      </VStack>
    </div>
  );
};

export default RegisterBase;
