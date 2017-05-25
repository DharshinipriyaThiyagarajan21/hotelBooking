class AddTotalBookedToRoomInventory < ActiveRecord::Migration[5.0]
  def change
    add_column :room_inventories, :total_booked, :integer
  end
end
