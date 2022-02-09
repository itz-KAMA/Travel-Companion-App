import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import GoogleMapReact from "google-map-react";
import React from "react";
import useStyles from "./styles";

function Map() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCu-xEUxGhsKMZE-7Zya46V2lNVl50OrbQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={""}
        options={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
