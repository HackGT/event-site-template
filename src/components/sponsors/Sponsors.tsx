import { Center, Grid, HStack, Text, VStack, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import Logo from "./Logo";

import sponsors from "./sponsors.json";

import styles from "./Sponsors.module.scss";

const Sponsors = () => {
  const [tiers] = useState([1, 2, 3, 4]);

  return (
    <Center className={styles.container}>
      <VStack>
        <Text className={styles.title}>Sponsors</Text>
        {tiers.map((tier) => (
          <div key={null}>
            <Wrap justify="center">
              {sponsors.sponsors
                .filter((e) => e.tier == tier)
                .map((sponsor) => (
                  <Logo
                    key={null}
                    url={sponsor.logo_url}
                    website={sponsor.website_url}
                    name={sponsor.name}
                    tier={sponsor.tier}
                    numTiers={tiers.length + 1}
                  />
                ))}
            </Wrap>
          </div>
        ))}
      </VStack>
    </Center>
  );
};

export default Sponsors;
