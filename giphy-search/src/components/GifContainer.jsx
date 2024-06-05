function GifContainer({ gifs }) {
  return (
    <ul className="gif-container">
      {gifs.map((gif) => (
        <li key={gif.id} className="gif-single">
          <img src={gif.url} alt="Gif" />
        </li>
      ))}
    </ul>
  );
}

export default GifContainer;
