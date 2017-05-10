class AddRoomsNeededToBooking < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :rooms_needed, :integer
  end
end
