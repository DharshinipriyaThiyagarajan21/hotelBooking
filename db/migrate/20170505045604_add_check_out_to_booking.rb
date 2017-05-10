class AddCheckOutToBooking < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :check_out, :date
  end
end
