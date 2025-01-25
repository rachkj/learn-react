// src/pages/qcomps/gallery_props.tsx
import React from "react";

function Profile(props: {
  name: string;
  image: string;
  alt: string;
  profession: string;
  awards: string;
  discovered: string;
}) {
  return (
    <section className="profile">
      <h2>{props.name}</h2>
      <img
        className="avatar"
        src={props.image}
        alt={props.alt}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {props.profession}
        </li>
        <li>
          <b>Awards: </b>
          {props.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {props.discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        image="https://i.imgur.com/szV5sdGs.jpg"
        alt="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        image="https://i.imgur.com/YfeOqp2s.jpg"
        alt="Katsuko Saruhashi"
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
