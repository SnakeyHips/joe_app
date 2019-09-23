import { Blog } from "../models/blog";

const apiPath: string = "https://api.imgur.com/3/album/";
const albumId: string = "LttCcUn";

export const GetAllBlogs = async (): Promise<Blog[]> => {
  return API.get(apiName, apiPath, {});
};