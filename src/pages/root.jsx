import { Box, Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
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
  return (
    // layout
    <Box as="div" bgColor="bg-color-base">
      <Grid
        h="100vh"
        templateAreas={templateAreas}
        gridTemplateColumns={`200px 1fr`}
        gridTemplateRows={`70px 1fr 50px`}
        gap={4}
      >
        <GridItem area="side" shadow="md" display={{ base: "none", md: "block" }}>
          <Sidebar />
        </GridItem>
        <GridItem area="header">Header</GridItem>
        <GridItem area="main">
          {/* child */}
          <Outlet />
        </GridItem>
        <GridItem area="footer">Footer</GridItem>
      </Grid>
    </Box>
  )
}
