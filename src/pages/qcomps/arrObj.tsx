import { useState } from "react";
import { ItemListProps } from "../../types/arrObj";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  // Make separate copies so each state list has its own objects
  const [myList, setMyList] = useState(
    initialList.map((item) => ({ ...item }))
  );
  const [yourList, setYourList] = useState(
    initialList.map((item) => ({ ...item }))
  );

  function handleToggleMyList(artworkId: number, nextSeen: boolean) {
    // Return a new array with updated objects
    const updatedList = myList.map((item) =>
      item.id === artworkId ? { ...item, seen: nextSeen } : item
    );
    setMyList(updatedList);
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    const updatedList = yourList.map((item) =>
      item.id === artworkId ? { ...item, seen: nextSeen } : item
    );
    setYourList(updatedList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>

      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />

      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
