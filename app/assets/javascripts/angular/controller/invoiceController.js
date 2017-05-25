app.controller('invoiceController',["$scope", "$filter","$http", "$window","$resource" ,function($scope, $filter, $http ,$window,$resource){

	$scope.getBookingDetails = function() {
		$scope.total = 0;
		$http.get('/room_inventories/show').then(function(response) {
			$scope.hotelDetail = response.data.hotel_detail;
			$scope.bookingDetail = response.data.get_last;
			$scope.user = response.data.user;
			$scope.room = response.data.room;
			$scope.total = $scope.room.price * $scope.bookingDetail.booked;
			$scope.date = new Date();
			
		})
	}

	$scope.getBookingDetails();

}]);