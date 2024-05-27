import { defineStyleConfig } from "@chakra-ui/react";

const CashfloBtnTheme = defineStyleConfig({
  baseStyle: {
    background: "#2953A3",
    backgroundColor: "#2953A3",
  },
});

const CashfloInputTheme = {};

const components = {
  Button: CashfloBtnTheme,
  Input: CashfloInputTheme,
};

export default components;
