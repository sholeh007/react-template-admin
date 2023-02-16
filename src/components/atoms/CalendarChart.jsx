import { ResponsiveTimeRange } from "@nivo/calendar"

export default function CalendarChart({ data }) {
  return (
    <ResponsiveTimeRange
      data={data}
      from="2023-01-01"
      to="2023-02-28"
      emptyColor=" #eeeeee"
      margin={{ top: 40, right: 20, bottom: 60, left: 20 }}
      yearSpacing={55}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      minValue="auto"
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 10,
          itemsSpacing: 4,
          itemDirection: "right-to-left",
          translateX: -20,
          translateY: -40,
          symbolSize: 10,
        },
      ]}
    />
  )
}
