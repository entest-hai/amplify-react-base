import {
  defaultDarkModeOverride,
  Card,
  Text,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  ColorMode,
} from "@aws-amplify/ui-react";
import React from "react";

const MyDark = () => {
  const [colorMode, setColorMode] = React.useState("system" as ColorMode);
  const theme = {
    name: "my-theme",
    overrides: [defaultDarkModeOverride],
  };

  return (
    <ThemeProvider theme={theme} colorMode={colorMode}>
      <Card>
        <ToggleButtonGroup
          value={colorMode}
          isExclusive
          onChange={(value: any) => setColorMode(value)}
        >
          <ToggleButton value="light">Light</ToggleButton>
          <ToggleButton value="dark">Dark</ToggleButton>
          <ToggleButton value="system">System</ToggleButton>
        </ToggleButtonGroup>
        <Text>Current color mode: {colorMode}</Text>
      </Card>
    </ThemeProvider>
  );
};

export default MyDark;
