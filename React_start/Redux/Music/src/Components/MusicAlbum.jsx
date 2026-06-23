import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import * as type from "../Redux/Features/MusicSlicer";

const MusicAlbum = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(type.musicRequest());
    axios
      .get("http://localhost:3001/albums")
      .then((res) => {
        console.log(res.data);
        dispatch(type.musicSuccess(res.data))
      })
      .catch((err) => dispatch(type.musicFailure()));
  }, []);

  return (
    <div>
      <h2>MusicAlbum</h2>
    </div>
  );
};

export { MusicAlbum };
