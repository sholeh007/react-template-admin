import { Box } from "@chakra-ui/react"
import { Gauge, GraduationCap } from "lucide-react"
import Logo from "../atoms/Logo"
import List from "../molecules/menu-sidebar/List"
import ListItem from "../molecules/menu-sidebar/ListItem"

export default function Sidebar() {
  return (
    <Box as="div" p="6" maxH="80vh" overflowY="auto">
      {/* Logo */}
      <Logo title="School" />
      {/* Menu List */}
      <List title="Main Menu">
        <ListItem url="/" icon={Gauge} text="Dashboard" />
        <ListItem url="/student" icon={GraduationCap} text="Students" />
      </List>
    </Box>
  )
}
