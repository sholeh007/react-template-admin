import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
} from "@chakra-ui/react"

export default function NestedList({ children, icon, text }) {
  return (
    <Accordion
      w="85%"
      sx={{
        "*,*::before,&::after": {
          borderStyle: "none",
        },
      }}
      color="text-color-base"
      allowToggle
    >
      <AccordionItem>
        <h2>
          <AccordionButton
            _hover={{ bg: "bg-color-second" }}
            justifyContent="space-between"
            rounded="lg"
            px={2}
          >
            <Box display="flex" alignItems="center">
              <Icon as={icon} boxSize={5} pr={1} /> {text}
            </Box>
            <AccordionIcon justifySelf="flex-end" />
          </AccordionButton>
        </h2>
        <AccordionPanel
          bg="whiteAlpha.900"
          rounded="lg"
          display="flex"
          flexDirection="column"
        >
          {children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
