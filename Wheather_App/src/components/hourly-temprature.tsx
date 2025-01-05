// import { ForecastData } from "@/api/types";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
// import { format } from "date-fns";

// interface HourlyTemperatureProps {
//   data: ForecastData;
// }

// const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {
//   const chartData = (data?.list?.slice(0, 8) || []).map((item) => ({
//     time: format(new Date(item.dt * 1000), "ha"),
//     temp: Math.round(item.main.temp),
//     feels_like: Math.round(item.main.feels_like),
//   }));

//   return (
//     <Card className="flex-1">
//       <CardHeader>
//         <CardTitle> Today's Temperature</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="h-[200px] w-full">
//           <ResponsiveContainer width={"100%"} height={"100%"}>
//             <LineChart data={chartData}>
//               <XAxis
//                 dataKey="time"
//                 stroke="#888888"
//                 fontSize={12}
//                 tickLine={false}
//                 axisLine={false}
//               />
//               <YAxis
//                 stroke="#888888"
//                 fontSize={12}
//                 tickLine={false}
//                 axisLine={false}
//                 tickFormatter={(value) => `${value}°`}
//               />
//               {/* tooltip */}

//               <Line
//                 type="monotone"
//                 dataKey="temp"
//                 stroke="#2563eb"
//                 strokeWidth={2}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default HourlyTemperature;

// import { ForecastData } from "@/api/types";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
// import { format } from "date-fns";

// interface HourlyTemperatureProps {
//   data: ForecastData;
// }

// const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {
//   // Ensure chartData always has at least one item
//   const chartData = (data?.list?.slice(0, 8) || []).map((item) => ({
//     time: format(new Date(item.dt * 1000), "ha"),
//     temp: Math.round(item.main.temp),
//     feels_like: Math.round(item.main.feels_like),
//   })) || [{ time: "12AM", temp: 0 }];

//   console.log(data);

//   console.log(chartData);

//   return (
//     <Card className="flex-1">
//       <CardHeader>
//         <CardTitle>Today's Temperature</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="h-[200px] w-full">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={chartData}>
//               <XAxis
//                 dataKey="time"
//                 stroke="#888888"
//                 fontSize={12}
//                 tickLine={false}
//                 axisLine={false}
//                 interval={0} // Force all ticks to show
//               />
//               <YAxis
//                 stroke="#888888"
//                 fontSize={12}
//                 tickLine={false}
//                 axisLine={false}
//                 tickFormatter={(value) => `${value}°`}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="temp"
//                 stroke="#2563eb"
//                 strokeWidth={2}
//                 dot={true}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default HourlyTemperature;

import { ForecastData } from "@/api/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { format } from "date-fns";

interface HourlyTemperatureProps {
  data: ForecastData;
}

const HourlyTemperature = ({ data }: HourlyTemperatureProps) => {
  const fallbackData = [
    { time: "12AM", temp: 15, feels_like: 14 },
    { time: "1AM", temp: 16, feels_like: 15 },
    { time: "2AM", temp: 17, feels_like: 16 },
  ];

  const chartData = (data?.list?.slice(0, 8) || fallbackData).map((item) => ({
    time: item.dt ? format(new Date(item.dt * 1000), "ha") : item.time,
    temp: item.main ? Math.round(item.main.temp) : item.temp,
    feels_like: item.main ? Math.round(item.main.feels_like) : item.feels_like,
  }));

  console.log(chartData);

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Today's Temperature</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis
                dataKey="time"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                interval={0}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}°`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const tempValue = payload[0]?.value;
                    const feelsLikeValue = payload[1]?.value; // Separate access for both lines

                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Temperature
                            </span>
                            <span className="font-bold">{tempValue}°</span>
                          </div>
                          {feelsLikeValue !== undefined && (
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Feels Like
                              </span>
                              <span className="font-bold">
                                {feelsLikeValue}°
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              {/* Temperature Line */}
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
              />
              {/* Feels Like Line */}
              <Line
                type="monotone"
                dataKey="feels_like"
                stroke="#f97316"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyTemperature;
