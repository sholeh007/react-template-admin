import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Header from "../components/organisms/Header"
import MobileSidebar from "../components/organisms/MobileSidebar"
import Sidebar from "../components/organisms/Sidebar"

const templateAreas = {
  base: `
      "header header" 
      "main main"
      "footer footer"
      `,
  md: `
      "side header" 
      "side main"
      "side footer"
      `,
}

export default function Root() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    // layout
    <Box as="div" bgColor="bg-color-base">
      <Grid
        h="100vh"
        templateAreas={templateAreas}
        gridTemplateColumns={`200px 1fr`}
        gridTemplateRows={`80px 1fr 50px`}
      >
        {/* Sidebar */}
        <GridItem area="side" shadow="md" display={{ base: "none", md: "block" }}>
          <Sidebar />
          <MobileSidebar onClose={onClose} isOpen={isOpen} />
        </GridItem>
        {/* Header */}
        <GridItem area="header" shadow="md">
          <Header onOpen={onOpen} />
        </GridItem>
        {/* Main */}
        <GridItem area="main">
          {/* child */}
          <Outlet />
        </GridItem>
        {/* Footer */}
        <GridItem area="footer">Footer</GridItem>
      </Grid>
    </Box>
  )
}
