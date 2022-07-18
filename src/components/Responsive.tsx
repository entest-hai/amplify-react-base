import { Flex, View } from "@aws-amplify/ui-react";
import React from "react";

const Responsive = () => {
  return (
    <Flex direction={{ base: "column", large: "row" }}>
      <View
        width={"100%"}
        backgroundColor={{ base: "orange", large: "yellow" }}
        display={{ small: "none", medium: "flex" }}
      >
        Hello
      </View>
      <View
        width={"100%"}
        backgroundColor={{ base: "orange", large: "yellow" }}
      >
        Hai Tran
      </View>
    </Flex>
  );
};

export default Responsive;
