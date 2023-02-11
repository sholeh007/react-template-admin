import { Avatar, Menu, MenuButton, MenuList } from "@chakra-ui/react"

export default function ManuAvatar({ src, children }) {
  return (
    <Menu autoSelect={false} isLazy>
      <MenuButton as={Avatar} src={src} cursor="pointer"></MenuButton>
      <MenuList shadow="md" minW="36" color="text-color-base" mt="-2">
        {children}
      </MenuList>
    </Menu>
  )
}
