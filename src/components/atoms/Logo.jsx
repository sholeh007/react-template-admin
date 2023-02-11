import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function Logo({ title }) {
  return (
    <Text as={Link} to="/" fontSize="4xl" textColor="text-color-base" fontWeight="bold">
      {title}
    </Text>
  )
}
