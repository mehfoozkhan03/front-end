/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import * as type from "../Redux/Features/MusicSlicer";
import axios from "axios";

const MusicFilter = () => {
  const dispatch = useDispatch();
  const { genreFilter } = useSelector((store) => store.music);

  console.log("genreFilter", genreFilter);

  const [searchParams, setSearchParams] = useSearchParams();

  const [filterValue, setFilterValue] = useState(
    searchParams.getAll("genre") || [],
  );

  const [orderBy, setOrderBy] = useState(searchParams.get("order") || "");

  const handleFilter = (e) => {
    const { name } = e.target;

    const newArr = [...filterValue];

    if (newArr.includes(name)) {
      newArr.splice(newArr.indexOf(name), 1);
    } else {
      newArr.push(name);
    }
    setFilterValue(newArr);
  };

  const handleOrderBy = (e) => {
    setOrderBy(e.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/albums").then((res) => {
      dispatch(type.setGenreFilter(res.data));
    });

    const Params = {};

    filterValue && (Params.genre = filterValue);

    orderBy && (Params.order = orderBy);

    setSearchParams(Params);
  }, [filterValue, orderBy, searchParams]);

  return (
    <div>
      <h2>Filter By</h2>
      <h4 style={{ padding: "0.3rem" }}>filter genre</h4>
      {genreFilter &&
        Object.keys(genreFilter).map((el) => (
          <div
            key={el}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "80%",
              margin: "auto",
            }}
          >
            <input
              type="checkbox"
              onChange={handleFilter}
              name={el}
              checked={filterValue.includes(el)}
            />
            <h3>{el}</h3>
          </div>
        ))}
      <div onChange={handleOrderBy}>
        <h2>Order By</h2>
        <div>
          <label htmlFor="">asc</label>
          <input name="order" type="radio" value="asc" />
        </div>
        <div>
          <label htmlFor="">desc</label>
          <input name="order" type="radio" value="desc" />
        </div>
      </div>
    </div>
  );
};

export { MusicFilter };
