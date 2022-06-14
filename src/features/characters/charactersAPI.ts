import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Character {
  name: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  birth_year: string;
  url: string;
  starships: string[];
}
interface CharactersApiResponse {
  results: Character[];
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swapi.dev/api",
  }),
  endpoints(builder) {
    return {
      fetchCharacters: builder.query<Character[], number | void>({
        query(page = 1) {
          return `/people?page=${page}`;
        },
        transformResponse: (response: CharactersApiResponse): Character[] =>
          response.results,
      }),
      fetchCharacter: builder.query<Character, number>({
        query(id: number) {
          return `/people/${id}`;
        },
      }),
      fetchStarshipFromUrl: builder.query<any, string>({
        query(url: string) {
          return url;
        },
      }),
    };
  },
});

export const {
  useFetchCharactersQuery,
  useFetchCharacterQuery,
  useFetchStarshipFromUrlQuery,
} = apiSlice;
