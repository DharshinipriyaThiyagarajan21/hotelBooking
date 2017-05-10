class RemoveBookingIdFromBookingInventory < ActiveRecord::Migration[5.0]
  def change
    remove_column :booking_inventories, :booking_id, :integer
  end
end
