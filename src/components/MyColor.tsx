import { Card, Heading, Text } from "@aws-amplify/ui-react";
import React from "react";

const MyColor = () => {
  return (
    <Card variation={"outlined"}>
      <Heading level={6} className={"my-color-heading"}>
        Heading Text
      </Heading>
      <Text className={"my-color-text"}>Some sample text for this card</Text>
      <Heading level={6} color={"teal.80"}>
        Heading Text
      </Heading>
    </Card>
  );
};

export default MyColor;
