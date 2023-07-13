import { useQuery } from "@tanstack/react-query";
import { IPostData } from "../types/post";

export const usePostsQuery = (options = {}) =>
  useQuery(
    ["posts"],
    async () => {
      const data: IPostData[] = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      ).then((response) => response.json());

      return data;
    },
    options,
  );
