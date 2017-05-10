class RoomInventoryController < ApplicationController
	def update_room_inventory
		@room_inventory = RoomInventory.create(:hotel_id =>params['hotel_id'], :check_in =>params['checkin'], :check_out =>params['checkout'], :booked =>params['booked'], :room_type =>params['room_type'], :available =>params['available'], :total_available =>params['total_available'])
		@room_inventory.save
	end

	def get_room_inventory
		get_available = RoomInventory.all
		render json: {get_available: get_available}
	end	
end
