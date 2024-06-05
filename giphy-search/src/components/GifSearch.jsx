import React, { useState } from "react"

function GifSearch({ handleQuery }) {
  const [inputValue, setInputValue] = useState("")

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     handleQuery(inputValue);
  // };
  const handleChange = (e) => {
    setInputValue(e.target.value)
    handleQuery(inputValue) // Pass the current input value to the parent component
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchInput">Enter a Search Term </label>
      <input
        type="text"
        className="form-control"
        id="searchInput"
        value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}
        onChange={handleChange}
        placeholder="start typing!"
      />
      <button
        type="submit"
        className="btn btn-success"
      >
        Search
      </button>
    </form>
  )
}

export default GifSearch
