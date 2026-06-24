import { memo, useState } from "react";
import { useSelector } from "react-redux";

const MusicFilter = () => {
  const { musicRecord } = useSelector((store) => store.music);
  // console.log("filter", musicRecord);

  const [key] = useState(() => {
    return (
      musicRecord &&
      musicRecord
        ?.map((el) => {
          let value = Object.values(el.genre).join("");
          return value;
        })
        .reduce((acc, curr) => {
          acc[curr] = (acc[curr] || 0) + 1;
          console.log("acc", acc);
          return acc;
        }, {})
    );
  });

  console.log("key", key);
  return (
    <div>
      <h2>MusicFilter</h2>
    </div>
  );
};

export { MusicFilter };
