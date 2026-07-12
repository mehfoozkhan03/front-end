import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { getMusic } from "../Redux/Features/MusicSlicer";

const MusicAlbum = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const { musicRecord } = useSelector((store) => store.music);
  console.log("musicRecord", musicRecord);

  useEffect(() => {
    const genre = searchParams.getAll("genre");
    const order = searchParams.get("order");

    const params = {};

    if (genre.length) {
      params.genre = genre;
    }

    if (order) {
      params._sort = "year";
      params._order = order;
    }

    dispatch(getMusic(params));
  }, [dispatch, searchParams]);

  return (
    <>
      {musicRecord?.map((el) => (
        <div
          key={el.id}
          style={{
            border: "2px solid green",
            padding: "10px",
            margin: "10px",
          }}
        >
          <img src={el.img} alt={el.name} width="150" />
          <h3>{el.artist}</h3>
          <h3>{el.genre}</h3>
          <h3>{el.name}</h3>
          <h3>{el.year}</h3>
          <h3>{el.no_of_songs}</h3>
        </div>
      ))}
    </>
  );
};

export { MusicAlbum };
