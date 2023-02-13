import { Box, Divider, Text, Wrap } from "@chakra-ui/react"
import SimpleBar from "simplebar-react"

export default function List({ title, children }) {
  return (
    <>
      {/* Title List */}
      <Box py={4}>
        <Text size="2xl">{title}</Text>
        <Divider borderColor="text-color-base" width="28" />
      </Box>
      {/* List */}
      <SimpleBar style={{ maxHeight: "70vh", overflowX: "hidden" }}>
        <Wrap direction="column" spacingY={3}>
          {children}
        </Wrap>
      </SimpleBar>
    </>
  )
}
