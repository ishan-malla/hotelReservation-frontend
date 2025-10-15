import RoomDetailsCard from "@/components/RoomDisplayCard";

const RoomDisplayPage = () => {
  return (
    <div>
      <RoomDetailsCard
        room_no="101"
        roomName="Deluxe Suite"
        roomType="Luxury"
        price={4500}
        image="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/affordable-home-decor-ideas-2023-hero.jpg"
        description="Spacious suite with king bed, private balcony, and scenic garden view."
        capacity={2}
        amenities={["Free Wi-Fi", "Air Conditioning", "TV", "Room Service"]}
      />
    </div>
  );
};
export default RoomDisplayPage;
