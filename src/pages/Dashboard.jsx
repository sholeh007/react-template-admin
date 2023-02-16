import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import BarChart from "../components/atoms/BarChart"
import CalendarChart from "../components/atoms/CalendarChart"
import PieChart from "../components/atoms/PieChart"
import CardChart from "../components/molecules/card-chart/CardChart"
import MiniCard from "../components/molecules/mini-card/MiniCard"
import { data } from "../data/bar-chart"
import { absences } from "../data/calendar-chart"
import { listMiniCards } from "../data/list-mini-card"
import { genders } from "../data/pie-chart"

export default function Dashboard() {
  const total = data.reduce((prev, acc) => prev + acc.count, 0)

  return (
    <Box p={6}>
      <Heading size="lg" mb={4}>
        Dashboard
      </Heading>
      {/* mini card */}
      <SimpleGrid
        spacing={3}
        mb="8"
        templateColumns="repeat(auto-fill,minmax(250px,1fr))"
      >
        {listMiniCards.map((list) => (
          <MiniCard
            key={list.id}
            icon={list.icon}
            title={list.title}
            count={list.count}
          />
        ))}
      </SimpleGrid>
      {/* Chart */}
      <SimpleGrid
        columns={{ base: 1, lg: 2, xl: 3 }}
        rowGap={4}
        columnGap={{ base: 0, xl: 4 }}
      >
        {/* Bar Chart */}
        <CardChart coloumn="span 1" order={{ base: 3, xl: 1 }} title="Students by Class">
          <Box h="90%">
            <BarChart data={data} />
          </Box>
          <Text align="center" mt="-2" fontSize="sm" fontWeight="bold">
            Total : {total}
          </Text>
        </CardChart>
        {/* Pie Chart */}
        <CardChart
          coloumn="span 2"
          order={{ base: 1, xl: 2 }}
          title="Students by Genders"
        >
          <Box h="90%">
            <PieChart data={genders} total={total} />
          </Box>
        </CardChart>
        {/* Calendar Chart */}
        <CardChart coloumn="span 2" order={{ base: 2, xl: 3 }} title="teacher attendance">
          <Box h="90%">
            <CalendarChart data={absences} />
          </Box>
        </CardChart>
      </SimpleGrid>
    </Box>
  )
}
