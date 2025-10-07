export interface RoomAmenity {
  room_amenity_id: number;
  room_amenity_name: string;
}

export interface Room {
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
