class RoomController < ApplicationController
	def update_room_available
		room = Room.where(:hotel_id =>params['hotel_id'], :room_type =>params['room_type']).limit(1).update(:available =>params['available'])
	end
	def get_updated_available
		updated_capacity = Room.where(:hotel_id =>params['hotel_id'])
		render json: {updated_capacity: updated_capacity}
	end
end
