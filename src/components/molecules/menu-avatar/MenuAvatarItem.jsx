import { Box, Icon, MenuItem } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function MenuAvatarItem({ icon, url, text }) {
  return (
    <MenuItem as={Link} to={url}>
      <Icon as={icon} />
      <Box as="span" pl={1}>
        {text}
      </Box>
    </MenuItem>
  )
}
