import type {
  FAQResponse,
  GetRoomResponse,
  contactUsRequest,
  hotelAmenities,
} from "@/types/types";
import { apiSlice } from "./apiSlice";

export const hotelApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query<GetRoomResponse, void>({
      query: () => "/api/rooms",
    }),

    getHotelAmenities: builder.query<hotelAmenities[], void>({
      query: () => "/api/hotelAmenities",
    }),

    getFaqList: builder.query<FAQResponse, void>({
      query: () => "/api/faq",
    }),

    contactUs: builder.mutation<void, contactUsRequest>({
      query: (contactUs) => ({
        url: "/api/contactUs",
        method: "POST",
        body: contactUs,
      }),
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetHotelAmenitiesQuery,
  useGetFaqListQuery,
  useContactUsMutation,
} = hotelApi;
