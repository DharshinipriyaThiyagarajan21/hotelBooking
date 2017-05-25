class RemoveCheckinFromBooking < ActiveRecord::Migration[5.0]
  def change
    remove_column :bookings, :check_out, :date
  end
end
