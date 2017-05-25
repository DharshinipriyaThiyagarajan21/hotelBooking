class AddCheckinToBooking < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :check_out, :timestamp
  end
end
