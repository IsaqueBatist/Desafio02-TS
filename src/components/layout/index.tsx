import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { Box } from "@chakra-ui/react";

export const Layout = ({children}:any) => {
  return (
    <Box minHeight='100vh' backgroundColor='#9413dc'>
      <Header />
      {children}
    </Box>
  )
}