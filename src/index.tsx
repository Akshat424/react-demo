import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import { ChakraProvider } from "@chakra-ui/react";
import { LayoutContainerStyled as Layout } from "./layout/layout.styles";
import { customisedChakraTheme } from "./style/theme";
import SelectProduct from "./pages/selectProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "select-product",
    element:  <SelectProduct />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true} theme={customisedChakraTheme}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
