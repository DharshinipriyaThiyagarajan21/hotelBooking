class AddRoomTypeToBooking < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :room_type, :string
  end
end
