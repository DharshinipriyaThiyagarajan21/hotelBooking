app.controller('hotelController',['$scope', '$http', '$window', 'Hotel',function($scope, $http ,$window,Hotel){
	$scope.hotels = new Hotel();

	$scope.redirectToBooking = function(event) {
		 $window.location.href = '/booking/new?hotel_id='+event.target.id;
	}

	$scope.initHotel = function() {
		$scope.hotels = Hotel.query();
		console.log($scope.hotels);
	}
}]);

