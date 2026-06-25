import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import * as type from "../Redux/Features/MusicSlicer";
import { useSearchParams } from "react-router-dom";

const MusicAlbum = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { musicRecord } = useSelector((store) => store.music);

  useEffect(() => {
    const genre = searchParams.getAll("genre");

    const queryParams = {
      params: {
        genre: genre,
      },
    };

    dispatch(type.musicRequest());
    axios
      .get("http://localhost:3001/albums", queryParams)
      .then((res) => {
        dispatch(type.musicSuccess(res.data));
      })
      .catch((err) => dispatch(type.musicFailure()));
  }, [searchParams]);

  /* 
  artist
  genre
  id
  img
  name
  no_of_songs
  songs
  */
  return (
    <>
      {musicRecord &&
        musicRecord?.map((el) => {
          return (
            <div
              key={el.id}
              style={{ border: "2px solid green", padding: "5px" }}
            >
              <img src={el.img} alt={el.name} />
              <h3>artist: {el.artist}</h3>
              <h3>genre: {el.genre}</h3>
              <h3>name: {el.name}</h3>
              <h3>songs: {el.no_of_songs}</h3>
            </div>
          );
        })}
    </>
  );
};

export { MusicAlbum };
