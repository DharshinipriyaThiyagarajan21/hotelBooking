class BookingsController < ApplicationController
	
	def new
		@hotel = Hotel.find(params['hotel_id'])
		@rooms = @hotel.rooms
	end

	def create
		checkin = Time.zone.parse(params['checkin']).localtime
		checkout = Time.zone.parse(params['checkout']).localtime
		@booking = Booking.create(:hotel_id =>params['hotel'], :user_id =>current_user.id, :check_in =>checkin, :check_out =>checkout, :rooms_needed =>params['roomCount'], :room_type =>params['roomtype'])
		@booking.save
	end

	def index
		@bookings = Booking.all
	end
end
