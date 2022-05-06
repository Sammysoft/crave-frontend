import React from "react";
import searchIcon from "./svg/searchIcon.svg";

const Search = () => {
  let StyleObject = {
    searchBarWrapper: {
      width: "100%",
      margin: "auto",
      textAlign: "center",
      padding: "20px",
    },
    searchInput: {
      border: "none",
      borderRadius: "8px",
      padding: "8px",
      width: "50%",
      backgroundImage: `url(${searchIcon})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "95%",
      marginRight: "5px",
      backgroundSize: "3%",
      textIndent: `5px`,
    },
    iconWrapper: {
      margin: "10px",
    },
  };

  return (
    <>
      <div style={StyleObject.searchBarWrapper}>
        <input
          style={StyleObject.searchInput}
          type="text"
          name="search"
          placeholder="Search for words, category, tags etc "
        />
        <span style={StyleObject.iconWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-funnel"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
          </svg>
        </span>
        <span style={StyleObject.iconWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-bar-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

export default Search;
