import { Flex, Icon } from "@chakra-ui/react"
import { LogOut, SidebarOpen, User } from "lucide-react"
import imgProfile from "../../assets/img/profile.jpg"
import MenuAvatar from "../molecules/menu-avatar/MenuAvatar"
import MenuAvatarItem from "../molecules/menu-avatar/MenuAvatarItem"

export default function Header({ onOpen }) {
  return (
    <Flex
      justify={{ base: "space-between", md: "flex-end" }}
      alignItems="center"
      h="100%"
      px={6}
      py={4}
    >
      {/* mobile-button-sidebar */}
      <Icon
        as={SidebarOpen}
        boxSize={5}
        cursor="pointer"
        color="text-color-base"
        arial-label="sidebar"
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
      />
      {/* avatar-menu */}
      <MenuAvatar src={imgProfile}>
        <MenuAvatarItem url="/profile" icon={User} text="Profile" />
        <MenuAvatarItem url="/logout" icon={LogOut} text="Logout" />
      </MenuAvatar>
    </Flex>
  )
}
