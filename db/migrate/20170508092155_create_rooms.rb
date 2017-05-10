class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.string :room_type
      t.integer :available
      t.integer :price

      t.timestamps
    end
  end
end
