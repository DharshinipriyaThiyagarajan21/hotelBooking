app.controller('hotelController',['$scope', '$http', '$window', 'Hotel',function($scope, $http ,$window,Hotel){
	$scope.redirectToBooking = function(event) {
		 $window.location.href = '/bookings/new?hotel_id='+event.target.id;
	}

	$scope.initHotel = function() {
		Hotel.query(function(hotels) {
			$scope.hotels = hotels;
		})
		
	}
}]);

