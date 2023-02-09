import { Box, Divider, Text, Wrap } from "@chakra-ui/react"

export default function List({ title, children }) {
  return (
    <>
      {/* Title List */}
      <Box py={4}>
        <Text size="2xl">{title}</Text>
        <Divider borderColor="text-color-base" width="28" />
      </Box>
      {/* List */}
      <Wrap direction="column" spacingY={3}>
        {children}
      </Wrap>
    </>
  )
}
