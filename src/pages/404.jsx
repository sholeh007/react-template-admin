import { Box, Heading, Icon, Image, Link, Text } from "@chakra-ui/react"
import { ArrowLeft } from "lucide-react"
import { Link as BackLink, useRouteError } from "react-router-dom"
import erroImg from "../assets/404.svg"

export default function NotFound() {
  const error = useRouteError()

  return (
    <Box
      h="100vh"
      flexDir="column"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={4}
    >
      <Heading>Oops!</Heading>
      <Text fontStyle="italic">{error.statusText || error.message}</Text>
      <Image boxSize={{ base: 200, md: 400 }} src={erroImg} alt="error" />
      <Link as={BackLink} to="/" display="flex" alignItems="center">
        <Icon as={ArrowLeft} /> Back to home
      </Link>
    </Box>
  )
}
