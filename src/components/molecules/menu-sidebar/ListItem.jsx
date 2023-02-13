import { Box, Icon, Link, WrapItem } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function ListItem({ url, icon, text, onClick }) {
  return (
    <Link
      as={NavLink}
      _hover={{ textDecor: "none", bg: "bg-color-second" }}
      _activeLink={{ bg: "bg-color-second" }}
      to={url}
      rounded="lg"
      p={2}
      w="85%"
      onClick={onClick}
    >
      <WrapItem color="text-color-base">
        <Icon as={icon} boxSize={5} />
        <Box as="span" pl={1}></Box>
        {text}
      </WrapItem>
    </Link>
  )
}
