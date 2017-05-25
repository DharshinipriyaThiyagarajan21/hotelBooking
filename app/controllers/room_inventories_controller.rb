class RoomInventoriesController < ApplicationController
	def create
		checkin = Time.zone.parse(params['checkin']).localtime
		checkout = Time.zone.parse(params['checkout']).localtime
		@room_inventory = RoomInventory.create(:hotel_id =>params['hotel_id'], :check_in =>checkin, :check_out =>checkout, :booked =>params['booked'], :room_type =>params['room_type'], :available =>params['available'], :total_available =>params['total_available'],:total_booked =>params['total_booked'])
		@room_inventory.save
	end

	def index
		@get_available = RoomInventory.all
	end	

	# def update
	# 	@room = RoomInventory.find(params[:id])
	# 	if(params.first[0] == 'total_booked')
	# 		@roomupdate = @room.update_attributes(:total_booked =>params['total_booked'])
	# 	else
	# 		@roomupdate = @room.update_attributes(:total_available =>params['total_available'])
	# 	end
	# 	render :json =>@roomupdate
	# end

	def update
		@room = RoomInventory.find(params[:id])
		@roomupdate = @room.update_attributes(:total_available =>params['total_available'],:booked =>params['booked'])
		render :json =>@roomupdate
	end

	def show
		get_last = RoomInventory.last
		hotel_detail = Hotel.find(get_last.hotel_id);
		room = Room.where(:hotel_id => get_last.hotel_id,:room_type => get_last.room_type).first
		user = current_user
		render json: {get_last: get_last, hotel_detail: hotel_detail,user: user,room: room}
	end
end
