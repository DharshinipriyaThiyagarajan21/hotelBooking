class BookingController < ApplicationController
	def create
	end	

	def new
		@hotel = Hotel.find(params['hotel_id'])
		@rooms = @hotel.rooms
	end

	def add_booking
		@booking = Booking.create(:hotel_id =>params['hotel_id'], :user_id =>current_user.id, :check_in =>params['checkin'], :check_out =>params['checkout'], :rooms_needed =>params['rooms_needed'], :room_type =>params['room_type'])
		@booking.save
	end

end
