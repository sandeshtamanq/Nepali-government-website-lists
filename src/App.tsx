import { useState } from "react";
import Card from "./components/Card";
import FilterBar from "./components/FilterBar";
import GovermentWebsites from "./db/db.json";
function App() {
  const [filter, setFilter] = useState<string>("All");
  return (
    <div className="text-gray-400">
      <h1 className="text-center  text-5xl my-5 font-bold">List of Government Websites Of Nepal</h1>
      <FilterBar filter={filter} setFilter={setFilter} GovermentWebsites={GovermentWebsites} />
      <div className="grid z-[-1] lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4">
        {GovermentWebsites.filter((data) => {
          if (filter !== "All") return data.name === filter;
          return data;
        }).map((website, index) => {
          const imageUrl = website.url.split(".")[0].split("/")[2];
          return <Card key={index} {...website} imageUrl={imageUrl} />;
        })}
      </div>
    </div>
  );
}

export default App;
