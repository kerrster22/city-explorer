import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  async function getLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${searchQuery}&format=json`;

    const res = await axios.get(API);
    console.log(res);
    setLocation(res.data[0]);
  }
  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }
  return (
    <div className="App">
      <div className="input">
        <input
          name="searchQuery"
          onChange={handleSearch}
          placeholder="Search for a City"
        ></input>
        <button onClick={getLocation}>explore</button>
      </div>
      {location.display_name && (
        <p>
          {location.display_name} is at lat and lon: {location.lat} /
          {location.lon}
        </p>
      )}
    </div>
  );
}

export default App;
