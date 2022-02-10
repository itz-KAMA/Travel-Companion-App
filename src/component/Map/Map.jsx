import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import GoogleMapReact from "google-map-react";
import React from "react";
import useStyles from "./styles";
import mapStyles from "./mapStyles";

function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
  weatherData,
}) {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width: 600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        options={{
          disableDefaultUi: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.google.tn/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F48%2Fd7%2F28%2F48d7280a30c2ea409c2fe596fb471f19.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F392939136221244652%2F&tbnid=PPDo-VXgSE3IpM&vet=12ahUKEwits46b-_T1AhWMxosKHVtwB1IQMygEegUIARCvAQ..i&docid=EZiCi94uvh_yIM&w=800&h=600&q=restaurant%20not%20found&ved=2ahUKEwits46b-_T1AhWMxosKHVtwB1IQMygEegUIARCvAQ"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img
              src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
