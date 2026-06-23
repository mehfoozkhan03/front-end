import styled from "styled-components";
import { MusicFilter } from "../Components/MusicFilter";
import { MusicAlbum } from "../Components/MusicAlbum";

const MusicRecord = () => {
  return (
    <Wrapper>
      <WrapperFilter color="green">
        <MusicFilter />
      </WrapperFilter>
      <WrapperMusicAlbum>
        <MusicAlbum />
      </WrapperMusicAlbum>
    </Wrapper>
  );
};

export { MusicRecord };

const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  gap:10px
`;

const WrapperFilter = styled.div`
  border:${({ color }) => `2px solid ${color}`};
  width: 30%;
  height: 100%;
`;

const WrapperMusicAlbum = styled.div`
border:1px solid black;
width:70%,
height:100%;
`;
