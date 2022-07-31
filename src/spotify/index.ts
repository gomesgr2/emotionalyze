import axios from "axios";
// const SpotifyWebApi = require('spotify-web-api-node');
require("dotenv").config();

// // credentials are optional
// const spotifyApi = new SpotifyWebApi({
//   clientId: process.env.SPOTIFY_CLIENT_ID,
//   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
// });

// export default spotifyApi;

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const spotify = () => {
  return {
    authorizate: async () => {
      const url = "https://accounts.spotify.com/api";

      const result = await axios.post(
        `${url}/token`,
        "grant_type=client_credentials",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              new Buffer(clientId + ":" + clientSecret).toString("base64"),
          },
        }
      );
      return result?.data;
    },
    searchPlaylist: async (token: string, query: string) => {
      const url = "https://api.spotify.com";

      const result = await axios.get(
        `${url}/v1/search?type=playlist&q=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return result?.data;
    },
  };
};

export default spotify;
