import React, { useCallback } from "react";
import _ from "lodash";

function Search(props) {
  const search = (name) => {
    //console.log(e);
    props.search(name);
  };

  const debounse = useCallback(
    _.debounce((name) => search(name), 500),
    []
  );

  const onChange = (e) => debounse(e.target.value);

  return (
    <form>
      <input
        className="search"
        type="text"
        placeholder="Search Country..."
        onChange={onChange}
      />
    </form>
  );
}

export default Search;
