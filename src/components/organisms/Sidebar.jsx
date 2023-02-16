import { Box } from "@chakra-ui/react"
import { lists } from "../../data/list-sidebar"
import Logo from "../atoms/Logo"
import List from "../molecules/menu-sidebar/List"
import ListItem from "../molecules/menu-sidebar/ListItem"

export default function Sidebar() {
  return (
    <Box as="div" py={6} px={4}>
      {/* Logo */}
      <Logo title="School" />
      {/* Menu List */}
      <List title="Main Menu">
        {lists.map((list) => (
          <ListItem key={list.id} url={list.url} icon={list.icon} text={list.text} />
        ))}
      </List>
    </Box>
  )
}
