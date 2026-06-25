import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const MusicFilter = () => {
  const { musicRecord, genreFilter } = useSelector((store) => store.music);
 
  console.log("genreFilter",genreFilter)

  const [searchParams, setSearchParams] = useSearchParams();

  const [filterValue, setFilterValue] = useState(
    searchParams.getAll("genre") || [],
  );

  // const key = useMemo(() => {
  //   if (!musicRecord) return {};

  //   return musicRecord?.reduce((acc, curr) => {
  //     let genre = Object.values(curr.genre).join("");
  //     acc[genre] = (acc[genre] || 0) + 1;
  //     return acc;
  //   }, {});
  // }, [musicRecord]);

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


  /* 
  http://localhost:5173/home?genre=k-pop
  */

  useEffect(() => {
    const Params = {};

    filterValue && (Params.genre = filterValue);
    setSearchParams(Params);
  }, [filterValue, searchParams]);

  

  return (
    <div>
      <h2>MusicFilter</h2>
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
              defaultChecked={filterValue.includes(el)}
            />
            <h3>{el}</h3>
          </div>
        ))}
    </div>
  );
};

export { MusicFilter };
