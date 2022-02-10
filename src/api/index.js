import { Data } from "@react-google-maps/api";
import axios from "axios";



export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "2152513357mshbb424f1984d0e8bp14d92djsnaa6d5bbb2fa9",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
