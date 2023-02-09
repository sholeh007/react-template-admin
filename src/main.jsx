import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const theme = extendTheme({
  fonts: {
    body: "Nunito,sans-serif",
  },
  colors: {
    "bg-color-base": "#F8EDE3",
    "bg-color-second": "#DFD3C3",
    "text-color-base": "#85586F",
    "text-color-second": "#D0B8A8",
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
