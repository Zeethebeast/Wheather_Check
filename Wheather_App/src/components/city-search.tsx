import { useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Button } from "./ui/button";
import { Loader2, Search } from "lucide-react";
import { useLocationSearch } from "@/hooks/use-weather";
import { useNavigate } from "react-router-dom";

const CitySearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data: locations, isLoading } = useLocationSearch(query);

  const handleSelect = (cityData: string) => {
    const [lat, lon, name, country] = cityData.split("|");

    // Add to search history
    setOpen(false);

    navigate(`/city/${name}??lat=${lat}&lon=${lon}`);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
      >
        <Search className="mr-2 h-4 w-4" />
        Search Cities...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          className="text-blue-700 font-bold text-lg p-6 rounded-lg shadow-md border border-blue-700 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
          placeholder="Type a command or search..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {query.length > 2 && !isLoading && (
            <CommandEmpty>No City found.</CommandEmpty>
          )}
          <CommandGroup
            heading="Favorites"
            className="text-blue-700 font-bold text-lg p-6 rounded-lg shadow-md border border-blue-700 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
          >
            <CommandItem className="text-blue-700 font-bold text-lg p-6 rounded-lg shadow-md border border-blue-700 hover:bg-blue-50 hover:shadow-lg transition-all duration-300">
              Calendar
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />
          <CommandGroup
            heading="Recent Searches"
            className="text-blue-700 font-bold text-lg p-6 rounded-lg shadow-md border border-blue-700 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
          >
            <CommandItem className="text-blue-700 font-bold text-lg p-6 rounded-lg shadow-md border border-blue-700 hover:bg-blue-50 hover:shadow-lg transition-all duration-300">
              Calendar
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />

          {locations && locations.length > 0 && (
            <CommandGroup
              heading="Suggestions"
              className="text-blue-700 font-bold text-lg p-6 rounded-lg shadow-md border border-blue-700 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
            >
              {isLoading && (
                <div className="flex items-center justify-center p-4">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              )}
              {locations.map((location) => {
                return (
                  <CommandItem
                    key={`${location.lat}-${location.lon}`}
                    value={`${location.lat}|${location.lon}|${location.name}|${location.country}`}
                    onSelect={handleSelect}
                    className="text-blue-700 font-bold text-lg p-6 rounded-lg shadow-md border border-blue-700 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    <span>{location.name}</span>
                    {location.state && (
                      <span className="text-sm text-muted-foreground">
                        , {location.state}
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">
                      , {location.country}
                    </span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CitySearch;
