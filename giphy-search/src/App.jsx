import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import GifContainer from "./components/GifContainer";
import GifSearch from "./components/GifSearch";
import { handleFetch } from "./utils";
import API_KEY from "./assets/config";
import "./styles/App.css";
function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("dragon ball z");
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!query) return;
    const doFetch = async () => {
      const encodedQuery = encodeURIComponent(query);
      const [data, error] = await handleFetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodedQuery}&limit=27&rating=g`
      );
      //ik i could do raw data and only 1 map but I kinda like doing this.
      if (data) {
        const gifsData = data.data.map((gif) => ({
          url: gif.images.fixed_height.url,
          id: gif.id,
        }));
        console.log(query, gifsData);
        setGifs(gifsData);
      }
      if (error) {
        setError(error);
      }
    };

    doFetch();
  }, [query]);

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
  };
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch handleQuery={handleQuery} />
        {error && <div> {error} </div>}
        <br />
        <GifContainer gifs={gifs} />
      </div>
    </div>
  );
}

export default App;
