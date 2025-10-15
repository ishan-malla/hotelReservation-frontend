export interface RoomAmenity {
  room_amenity_id: number;
  room_amenity_name: string;
}

export interface Room {
  room_no: number;
  room_type: string;
  price_per_night: number;
  room_images: string[] | null;
  r_amenities: RoomAmenity[];
}

export interface GetRoomResponse {
  pageNumber: number;
  limit: number;
  totalRoom: number;
  room: Room[];
}

export interface contactUsRequest {
  c_name: string;
  c_email: string;
  message: string;
}

export interface FAQResponse {
  faq_id: number;
  faq_questions: string;
  faq_answers: string;
}

export interface HotelAmenities {
  hotel_amenity_id: number;
  hotel_amenity_name: string;
  hotel_amenity_description: string;
  hotel_amenity_image: string;
}

export interface TestimonyResponse {
  comment: string;
  rating: number;
  customer_name: string;
}
