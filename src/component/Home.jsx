import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_SONGS } from "./qraphql";

function Home() {
  const { loading, error, data } = useQuery(GET_ALL_SONGS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error: {error.message}</p>;
  }
  console.log("data", data);

  const songs = data.allSongs;

  const getSongSource = (songName) => `http://localhost:8000/${songName}`;

  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {songs.map((song) => (
          <div>
            <li key={song.id}>
              {song.title} - {song.album.title}
            </li>

            <audio controls>
              <source src={getSongSource(song.audioFile)} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
