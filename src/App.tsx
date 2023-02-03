import Card from "./components/Card";
import GovermentWebsites from "./db/db.json";
function App() {
  return (
    <>
      <h1 className="text-center text-gray-400 text-5xl my-5 font-bold">List of Government Websites</h1>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4">
        {GovermentWebsites.map((website, index) => {
          const imageUrl = website.url.split(".")[0].split("/")[2];
          return <Card key={index} {...website} imageUrl={imageUrl} />;
        })}
      </div>
    </>
  );
}

export default App;
