import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react"

export default function Login() {
  return (
    <SimpleGrid h="100vh" bg="bg-color-base" justifyContent="center" alignItems="center">
      <Card
        shadow="md"
        w={{ base: "90vw", md: "60vw", lg: "40vw" }}
        p={{ base: 2, md: 4 }}
        color="text-color-base"
      >
        <CardHeader>
          <Heading size="lg" textAlign="center">
            Login
          </Heading>
        </CardHeader>
        <CardBody>
          <form>
            <FormControl mb="4">
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="email..." />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="password..." />
            </FormControl>
            <Box textAlign="center">
              <Button
                type="submit"
                bg="purple.500"
                color="whiteAlpha.900"
                _hover={{ bg: "purple.400", color: "whiteAlpha.800" }}
              >
                Login
              </Button>
            </Box>
          </form>
        </CardBody>
      </Card>
    </SimpleGrid>
  )
}
