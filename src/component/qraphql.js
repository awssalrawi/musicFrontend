import { gql } from "@apollo/client";

export const GET_ALL_SONGS = gql`
  query {
    allSongs {
      id
      title
      audioFile
      album {
        id
        title
      }
    }
  }
`;
