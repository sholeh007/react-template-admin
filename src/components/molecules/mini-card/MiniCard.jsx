import { Card, CardBody, Icon, Text } from "@chakra-ui/react"

export default function MiniCard({ icon, title, count }) {
  return (
    <Card
      direction="row"
      shadow="md"
      alignItems="center"
      px={4}
      color="text-color-base"
      bg="whiteAlpha.900"
    >
      <Icon as={icon} boxSize={10} />
      <CardBody>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="2xl">{count}</Text>
      </CardBody>
    </Card>
  )
}
