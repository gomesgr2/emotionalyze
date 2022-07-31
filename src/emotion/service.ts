import spotifyApi from "../spotify";
import adapter from "./adapter";
import { sentiments } from "./sentiments";

const service = () => {
  const adp = adapter();
  return {
    getEmotions: async (message: string) => {
      const result = await adp.getEmotions(message);
      if (result?.keywords && result?.keywords[0]) {
        return await adp.getPlaylist(result?.keywords[0]?.text || '');
      }
    
      return 'not possible to get playlist';
    },
  };
};

export default service;
