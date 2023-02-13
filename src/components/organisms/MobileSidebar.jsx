import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react"
import { Gauge, GraduationCap } from "lucide-react"
import Logo from "../atoms/Logo"
import List from "../molecules/menu-sidebar/List"
import ListItem from "../molecules/menu-sidebar/ListItem"

export default function MobileSidebar({ onClose, isOpen }) {
  return (
    <Drawer autoFocus={false} placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg="bg-color-base">
        <DrawerCloseButton />
        <Box as="div" py={6} px={4}>
          {/* Logo */}
          <Logo title="School" />
          {/* Menu List */}
          <List title="Main Menu">
            <ListItem url="/" icon={Gauge} text="Dashboard" onClick={onClose} />
            <ListItem
              url="/student"
              icon={GraduationCap}
              text="Students"
              onClick={onClose}
            />
          </List>
        </Box>
      </DrawerContent>
    </Drawer>
  )
}
