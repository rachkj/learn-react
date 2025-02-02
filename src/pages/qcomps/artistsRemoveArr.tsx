import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function List() {
  const [artists, setArtists] = useState(initialArtists);

  function handleDelete(artistId: number) {
    // Create a new array without mutating the original
    setArtists(artists.filter((artist) => artist.id !== artistId));
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button onClick={() => handleDelete(artist.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
