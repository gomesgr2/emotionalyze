import nlu from "../nlu";
import spotify from "../spotify";

const adapter = () => {
  const spotifyApi = spotify();

  return {
    getEmotions: async (text: string) => {
      const analyzeParams = {
        text,
        features: {
          sentiment: {
            document: true,
          },
          keywords : {
            sentiment : true
          }
        },
      };
      const textAnalysis = await nlu.analyze(analyzeParams);
      return textAnalysis?.result;
    },
    getPlaylist: async (query: string) => {
      const result = await spotifyApi.authorizate();
      return await spotifyApi.searchPlaylist(result?.access_token, query);
    },
  };
};

export default adapter;
