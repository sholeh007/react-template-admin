import { ResponsiveBar } from "@nivo/bar"

export default function BarChart({ data }) {
  return (
    <ResponsiveBar
      data={data}
      keys={["first year", "second year", "final year"]}
      indexBy="class"
      borderRadius={6}
      margin={{ top: 30, right: 115, bottom: 50, left: 35 }}
      padding={0.3}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          toggleSerie: true,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      enableLabel={false}
    />
  )
}
