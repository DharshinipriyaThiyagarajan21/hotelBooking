class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :hotel_id
      t.integer :user_id
      t.integer :check_in
      t.integer :total_price

      t.timestamps
    end
  end
end
