import { AlbumResponse, Photo } from "../models/photo";
import axios, { AxiosResponse, AxiosError } from "axios";

const apiPath: string = "https://api.imgur.com/3/album";
const albumId: string = "LttCcUn";

export const GetAllPhotos = async (): Promise<Photo[]> => {
  const albumResponse: AxiosResponse<AlbumResponse> = await axios
    .get<AlbumResponse>(`${apiPath}/${albumId}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
      }
    })
    .catch((error: AxiosError) => {
      throw error;
    });

  return albumResponse.data.data.images;
};