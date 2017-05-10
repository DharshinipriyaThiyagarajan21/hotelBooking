class AddCheckInToBooking < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :check_in, :date
  end
end
