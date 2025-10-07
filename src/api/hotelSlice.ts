import type { GetRoomResponse } from "@/types/types";
import { apiSlice } from "./apiSlice";

export const hotelApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query<GetRoomResponse, void>({
      query: () => "/api/rooms",
    }),
  }),
});

export const { useGetRoomsQuery } = hotelApi;
