import { Flex, Icon, Link, Text } from "@chakra-ui/react"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <Flex h="100%" justify="center" align="center">
      <Text>
        Made with <Icon as={Heart} fill="red.400" color="red.400" boxSize={3} /> by{" "}
        <Link as="a" href="https://github.com/sholeh007" isExternal>
          sholeh007
        </Link>
      </Text>
    </Flex>
  )
}
