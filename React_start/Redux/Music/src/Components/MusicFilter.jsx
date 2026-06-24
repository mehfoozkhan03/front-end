import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

const MusicFilter = () => {
  const { musicRecord } = useSelector((store) => store.music);
  // console.log("filter", musicRecord);

  const key = useMemo(() => {
    if (!musicRecord) return {};

    return musicRecord?.reduce((acc, curr) => {
      let genre = Object.values(curr.genre).join("");
      acc[genre] = (acc[genre] || 0) + 1;
      return acc;
    }, {});
  }, [musicRecord]);

  console.log("key", key);

  return (
    <div>
      <h2>MusicFilter</h2>
      {Object.keys(key).map((el) => (
        <div key={el} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <input type="checkbox" />
          <h3>{el}</h3>
        </div>
      ))}
    </div>
  );
};

export { MusicFilter };
