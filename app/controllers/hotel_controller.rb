class HotelController < ApplicationController
	before_action :authenticate_user!

	def index
		@hotel = Hotel.all
		# respond_to do |format|
	 #      format.json {
	 #        render :json => @hotel
	 #      }
	 #      format.html {
	 #        @hotel = @hotel.to_json
	 #      }
	 #    end
	end
end
