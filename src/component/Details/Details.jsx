import React from "react";

function Details({ place }) {
  console.log(place);
  return (
    <div>
      <h1>{place.name}</h1>
    </div>
  );
}

export default Details;
