import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { useData } from "./useData";
import { Genre } from "./useGenre";
export interface Game {
  id: number;
  name: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", {
    params: {
      genres: selectedGenre?.id,
    },

  },
  [selectedGenre?.id]
  
 
  );
