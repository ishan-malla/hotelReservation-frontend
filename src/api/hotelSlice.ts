import type {
  FAQResponse,
  GetRoomResponse,
  contactUsRequest,
  HotelAmenities,
  TestimonyResponse,
} from "@/types/types";
import { apiSlice } from "./apiSlice";

export const hotelApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query<GetRoomResponse, void>({
      query: () => "/api/rooms",
    }),

    getHotelAmenities: builder.query<HotelAmenities[], void>({
      query: () => "/api/hotelAmenities",
    }),

    getFaqList: builder.query<FAQResponse[], void>({
      query: () => "/api/faq",
    }),

    AddContactUs: builder.mutation<void, contactUsRequest>({
      query: (contactUs) => ({
        url: "/api/contactUs",
        method: "POST",
        body: contactUs,
      }),
    }),
    getTestimonial: builder.query<TestimonyResponse[], void>({
      query: () => "/api/testimony",
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetHotelAmenitiesQuery,
  useGetFaqListQuery,
  useAddContactUsMutation,
  useGetTestimonialQuery,
} = hotelApi;
