class RemoveCheckInFromBooking < ActiveRecord::Migration[5.0]
  def change
    remove_column :bookings, :check_in, :integer
  end
end
