import { defineStyleConfig } from "@chakra-ui/react";

const CashfloBtnTheme = defineStyleConfig({
  baseStyle: {
    background: "#2953A3",
    backgroundColor: "#2953A3",
    padding:"16px"
  },
});

const CashfloInputTheme = defineStyleConfig({
    variants: {
        primary: {
          field: {
            border: '1px solid',
            borderColor: '#E0E0E0',
            padding: '12px 16px 12px 16px',
            borderRadius: '8px',
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
});

const components = {
  Button: CashfloBtnTheme,
  Input: CashfloInputTheme,
};

export default components;
