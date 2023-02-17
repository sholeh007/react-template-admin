import { Box, Link } from "@chakra-ui/react"
import { Folder } from "lucide-react"
import { Link as ReachLink } from "react-router-dom"
import { lists } from "../../data/list-sidebar"
import Logo from "../atoms/Logo"
import List from "../molecules/menu-sidebar/List"
import ListItem from "../molecules/menu-sidebar/ListItem"
import NestedList from "../molecules/nested-list/NestedList"

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
        <NestedList text="Pages" icon={Folder}>
          <Link
            as={ReachLink}
            to="/login"
            rounded="lg"
            p={2}
            _hover={{ textDecor: "none", bg: "bg-color-second" }}
          >
            Login
          </Link>
          <Link
            as={ReachLink}
            to="/404"
            rounded="lg"
            p={2}
            _hover={{ textDecor: "none", bg: "bg-color-second" }}
          >
            404
          </Link>
        </NestedList>
      </List>
    </Box>
  )
}
