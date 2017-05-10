app.controller('bookingController',["$scope","$http", "$filter", "Booking" ,function($scope, $filter, $http ,$window,Booking){
	$scope.roomtypes = roomtype;
	$scope.rooms = [];
	$scope.addRooms = [];
	$scope.checkout;
	$scope.hotel = hotel;
	$scope.hotelId;
	$scope.hotelId = hotel.id;
	$scope.showCapacity = false;
	$scope.available;
	$scope.availRoomtype;
	$scope.roomCapacity = [];
	
	$scope.fillCheckout = function() {
		var checkin = new Date($scope.booking.checkin);
		$scope.booking.checkout = checkin;
		$scope.booking.checkout.setDate($scope.booking.checkout.getDate()+1);
	}

	$scope.saveBooking = function() {
		console.log($scope.booking);
		booking = new Booking($scope.booking);
		booking.save().then(function(response){
			console.log("success");
		})
		// var data = {
		// 	hotel_id: $scope.hotelId,
		// 	checkin: $scope.checkin,
		// 	checkout: $scope.checkout,
		// 	room_type: $scope.roomtype,
		// 	rooms_needed: $scope.roomCount			
		// };
		
		// var config = {
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// };

		// $http.post('/booking/add_booking', data, config).then(function(response) {
		// 	$scope.updateRoomInventory();
		// 	$scope.redirectToInvoice();
		// });
		// $scope.roomCount = "";
		// $scope.checkin = "";
		// $scope.checkout = "";
		// $scope.roomtype = "";
		// $scope.showCapacity = false;
	}

	$scope.checkAvailability = function() {
		$scope.showCapacity = true;
		//$scope.getAvailableFromRoomInventory();
	}

	// $scope.updateRoomInventory = function() {
	// 	for (var i = 0; i < $scope.roomtypes.length; i++) {
	// 		if ($scope.roomtype == $scope.roomtypes[i].room_type ) {
	// 			$scope.available = $scope.roomtypes[i].available;
	// 		}
	// 	}
		
	// 	$scope.totalAvailable = $scope.available - $scope.roomCount;
	// 	var data = {
	// 		hotel_id: $scope.hotelId,
	// 		checkin: $scope.checkin,
	// 		checkout: $scope.checkout,
	// 		room_type: $scope.roomtype,
	// 	 	available: $scope.available,
	// 		booked: $scope.roomCount,
	// 		total_available: $scope.totalAvailable		
	// 	};
		
	// 	var config = {
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	};

	// 	$http.post('/room_inventory/update_room_inventory', data, config).then(function(response) {
	// 		console.log("success");
	// 	});
	// 	$scope.roomCount = "";
	// 	$scope.checkin = "";
	// 	$scope.checkout = "";
	// 	$scope.roomtype = "";
	// 	$scope.showCapacity = false;
	// }

	// $scope.availablecheck = function() {
	// 	$http.get('/room_inventory/get_room_inventory').then(function(response) {
	// 		$scope.getAvailable = response.data.get_available;
	// 		var num,j;
	// 		for(j = 0; j < $scope.getAvailable.length; j++) {
	// 			if ($scope.hotelId == $scope.getAvailable[j].hotel_id && $scope.roomtype == $scope.getAvailable[j].room_type) {
	// 				num = j;
	// 			}
	// 		}
	// 		$scope.inventory_checkin = $scope.getAvailable[num].check_in;
	// 		$scope.dates = $scope.inventory_checkin.split("-");
	// 		$scope.checkin_date = parseInt($scope.dates[2]);
	// 		if ($scope.checkin.getDate() > $scope.checkin_date){
	// 			$scope.inventory_available = $scope.getAvailable[num].total_available + 1;
	// 			console.log($scope.inventory_available);
	// 		}
	// 		else {
	// 			$scope.inventory_available = $scope.getAvailable[num].total_available - 1;
	// 			console.log("else"+$scope.inventory_available)
	// 		}
			
	// 	});

	// }

	// $scope.getAvailableFromRoomInventory = function() {
	// 	$http.get('/room_inventory/get_room_inventory').then(function(response) {
	// 		$scope.getAvailable = response.data.get_available;
	// 		var num,j;
	// 		for(j = 0; j < $scope.getAvailable.length; j++) {
	// 			if ($scope.hotelId == $scope.getAvailable[j].hotel_id && $scope.roomtype == $scope.getAvailable[j].room_type) {
	// 				num = j;
	// 			}
	// 		}

	// 		$scope.remainingAvailable = $scope.getAvailable[num].total_available;
	// 		console.log($scope.remainingAvailable);
	// 		$scope.availRoomtype = $scope.getAvailable[num].room_type;
	// 		var data = {
	// 			available: $scope.remainingAvailable,
	// 			hotel_id: $scope.hotelId,
	// 			room_type: $scope.availRoomtype
	// 		}

	// 		$scope.updateRoomTable(data);
	// 	});
	// }

	// $scope.updateRoomTable = function(data) {
	// 	console.log(data);
	// 	var config = {
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	};

	// 	$http.post('/room/update_room_available',data,config).then(function(response) {
	// 		console.log("updated successfully")
	// 	});
	// }

	// $scope.updateRoomCapacity = function() {
	// 	console.log("inside the update room capacity")
	// 	var params = {
	// 			hotel_id: $scope.hotelId
	// 		}
	// 	var config = {
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	};
	// 	console.log(params);
	// 	$http.get('/room/get_updated_available',params,config).then(function(response) {
	// 		$scope.updatedAvailable = response.data.updated_capacity;
	// 	});	
	// 	var k,n;
	// 	console.log($scope.updatedAvailable);
	// 	// for( k = 0; k < $scope.roomtypes.length; k++) {
	// 	// 	if($scope.hotelId == $scope.updatedAvailable[k].hotel_id && $scope.roomtype == $scope.updatedAvailable[k].room_type) {
	// 	// 		n = k;
	// 	// 	}
	// 	// }
	// 	// console.log(n);
	// 	// $scope.selectedAvailable = $scope.updatedAvailable[n].available;
		
	// 	// for(var m = 1; m <= $scope.selectedAvailable; m++) {
	// 	// 	$scope.roomCapacity.push(m);
	// 	// }
	// 	// $scope.selectedAvailable="";
	// }

	// $scope.redirectToInvoice = function() {
	// 	$window.location.href = '/booking/index';
	// }
	// // $scope.addRoom = function() {
	// // 	$scope.rooms.push({"roomtype" : "" , "roomCount" : ""});
	// // }

}]);

