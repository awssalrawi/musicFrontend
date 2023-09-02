import { gql } from "@apollo/client";
import { SchemaMetaFieldDef } from "graphql";

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
// Check schema.py

// delete
// mutation{
//     deleteItem(itemType: "artist", itemId: "1") {
//    success
//  }
// }
// get by id
// {
//     song(id: "1") {
//       id
//       title
//     }
//   }
// create
// mutation {
//     create_artist(name: "John Doe") {
//       artist {
//         id
//         name
//       }
//     }
//   }
