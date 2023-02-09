import { Box, Text } from "@chakra-ui/react"
import { Gauge, GraduationCap } from "lucide-react"
import List from "../molecules/menu-sidebar/List"
import ListItem from "../molecules/menu-sidebar/ListItem"

export default function Sidebar() {
  return (
    <Box as="div" p="6" maxH="80vh" overflowY="auto">
      {/* Logo */}
      <Text fontSize="4xl" textColor="text-color-base" fontWeight="bold">
        School
      </Text>
      {/* Menu List */}
      <List title="Main Menu">
        <ListItem url="/" icon={Gauge} text="Dashboard" />
        <ListItem url="/student" icon={GraduationCap} text="Students" />
      </List>
    </Box>
  )
}
