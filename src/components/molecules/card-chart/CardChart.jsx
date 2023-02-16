import { Box, Heading } from "@chakra-ui/react"

export default function CardChart({ title, coloumn, order, children }) {
  return (
    <Box
      gridColumn={coloumn}
      order={order}
      h="96"
      bg="whiteAlpha.900"
      rounded="md"
      p={4}
      shadow="md"
    >
      <Heading size="md">{title}</Heading>
      {children}
    </Box>
  )
}
