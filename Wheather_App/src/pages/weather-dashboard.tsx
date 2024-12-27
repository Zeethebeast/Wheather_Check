import { Button } from "@/components/ui/button";

const WeatherDashboard = () => {
  return <div>
    {/* favorite cities*/}
    <div>
      <h1> My location</h1>
      <Button>
        <RefreshCW />
      </Button>
    </div>
    {/* current and hourly wheather */}
  </div>;
};

export default WeatherDashboard;
