import React from "react";
import {
  Card,
  Image,
  View,
  Flex,
  useTheme,
  Heading,
  Text,
  Button,
} from "@aws-amplify/ui-react";

const MyCard = () => {
  const { tokens } = useTheme();

  return (
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
    >
      <Card>
        <Flex direction={"row"} alignItems={"flex-start"}>
          <Image src={"road.jpeg"} alt={"road view"} width={"33%"} />
          <Flex
            direction={"column"}
            alignItems={"flex-start"}
            gap={tokens.space.xs}
          >
            <Heading level={5}>
              New Zealand White Water Outdoor Adventure
            </Heading>
            <Text as={"span"}>
              Join us on this beautiful outdoor adventure through the glittering
              rivers through the snowy peaks on New Zealand
            </Text>
            <Button variation={"primary"}>Book it</Button>
          </Flex>
        </Flex>
      </Card>
    </View>
  );
};

export default MyCard;
