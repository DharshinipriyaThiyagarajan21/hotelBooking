class CreateRoomInventories < ActiveRecord::Migration[5.0]
  def change
    create_table :room_inventories do |t|
      t.integer :hotel_id
      t.string :room_type
      t.date :check_in
      t.date :check_out
      t.integer :available
      t.integer :booked
      t.integer :total_available

      t.timestamps
    end
  end
end
