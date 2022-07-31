import { Request, Response } from "express";
import emotionService from "./service";

export const translator = () => {
  const service = emotionService();
  return {
    getEmotions: async (req: Request, res: Response) => {
      try {
        const result = await service.getEmotions(req?.body?.message);
        res.status(200).json({ result });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          message: 'Something went wrong',
        });
      }
    },
  };
};
