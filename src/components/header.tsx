import { useTheme } from "@/context/theme-provider";
import { Moon, Sun, Umbrella } from "lucide-react";
import { Link } from "react-router-dom";
import CitySearch from "./city-search";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src={isDark ? "/logo.png" : "/logo1.png"}
            alt="Weather App"
            className="h-14"
          />
          <h1 className="text-1xl font-extrabold text-center text-gray-800 font-serif flex items-center justify-center space-x-2">
            <span>Weather_App</span>
            <Umbrella className="text-blue-500" size={20} />{" "}
            {/* Umbrella icon */}
          </h1>
        </Link>
        {/* Theme Toggle */}
        <div className="flex gap-4">
          <CitySearch />
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex items-center cursor-pointer transition-transform duration-500
            ${isDark ? "rotate-180" : "rotate-0"}
            `}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
