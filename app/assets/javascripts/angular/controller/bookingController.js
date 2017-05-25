app.controller('bookingController',["$scope", "$filter","$http", "$window","Booking","RoomInventory", "Room" ,function($scope, $filter, $http ,$window,Booking,RoomInventory,Room){
	 $scope.roomtypes = roomtype;
	$scope.rooms = [];
	$scope.addRooms = [];
	$scope.checkout;
	$scope.hotel = hotel;
	$scope.hotelId;
	$scope.hotelId = hotel.id;
	$scope.showCapacity = false;
	$scope.showCapacityMsg = false;
	$scope.showCapacityLess = false;
	$scope.available;
	$scope.availRoomtype;
	$scope.capacity;
	$scope.save = true;

	

	//To fill checkout date when checkin date is selected
	$scope.fillCheckout = function() {
		var checkin = new Date($scope.booking.checkin);
		$scope.booking.checkout = checkin;
		$scope.booking.checkout.setDate($scope.booking.checkout.getDate()+1);
	}

	// Checking availability for no. of rooms available
	$scope.checkAvailability = function() {
		$scope.updateRoomCapacity();
		$scope.save = true;
	}

	$scope.capacityMsg = function() {
		$scope.showCapacityLess = false;
		$scope.showCapacityMsg = false;
	}
	// Get no. of available rooms from room or room inventory
	$scope.updateRoomCapacity = function() {
		var count = 0;
		$scope.bookingBasedOnHotel = 0;
		Booking.get(function(bookings){
				for(var b = 0; b < bookings.length; b++) {
					if(bookings[b].hotel_id == $scope.hotelId && bookings[b].room_type == $scope.booking.roomtype) {
						count =count+1;
						$scope.bookingBasedOnHotel = count;
					}
						$scope.bookingBasedOnHotel = count;
				}
				if($scope.bookingBasedOnHotel == 0) {
					$scope.updateRoomCapacityFromRoom();
				}
				else {
					$scope.updateRoomCapacityFromRoomInventory();
				}
		})
		//$scope.availablecheck();
	}

	// Get no. of available rooms from room
	$scope.updateRoomCapacityFromRoom = function() {
		Room.getAvailable(function(available) {
			$scope.roomCapacity = [];
			$scope.capacity = 0;
		var i, a;
			for(i = 0; i < available.length; i++) {
				if($scope.hotelId == available[i].hotel_id && $scope.booking.roomtype == available[i].room_type){
					$scope.capacity = available[i].available; 
				}
			}
			 console.log("available from room ="+$scope.capacity)
			// for(var m = 1; m <= $scope.capacity; m++) {
			// 	$scope.roomCapacity.push(m);
			// }
			if($scope.capacity < $scope.booking.roomCount) {
				$scope.showCapacityLess = true;
			}	
			else
			{
				$scope.save = false;
			}
		})
	}

	$scope.updateRoomCapacityFromRoomInventory = function() {
		RoomInventory.get(function(available) {
			$scope.roomCapacity = [];
			var i, a;
			$scope.capacity = 0;
			for(i = 0; i < available.length; i++) {
				if($scope.hotelId == available[i].hotel_id && $scope.booking.roomtype == available[i].room_type){
					$scope.capacity = available[i].total_available; 
				}
			}
			console.log("available from room inventory="+$scope.capacity)
			// if($scope.capacity == 0) {
			// 	$scope.showCapacityMsg = true;
			// 	$scope.save = true;
			// 	$scope.showCapacity = false;
			// }
			// else
			// {
			// 	for(var m = 1; m <= $scope.capacity; m++) {
			// 		$scope.roomCapacity.push(m);
			// 	}
			
			if($scope.capacity == 0) {
				$scope.showCapacityMsg = true;
				$scope.save = true;
				$scope.showCapacityLess = false;
			}
			else if($scope.capacity < $scope.booking.roomCount) {
				$scope.showCapacityLess = true;
			}	
			else
			{
				$scope.save = false;
			}
			
		})
	}

	$scope.saveBooking = function() {
		$scope.booking.hotel = $scope.hotelId;
		console.log($scope.booking.checkin);
		console.log($scope.booking.checkout);
		Booking.save($scope.booking, function() {
			$scope.updateRoomInventory();
		})
	}

	$scope.redirectToInvoice = function() {
		$window.location.href = '/bookings/index';
	}

	$scope.updateRoomInventory = function() {
		$scope.totalAvailable = $scope.capacity - $scope.booking.roomCount;
		var data = {
			hotel_id: $scope.hotelId,
			checkin: $scope.booking.checkin,
			checkout: $scope.booking.checkout,
			room_type: $scope.booking.roomtype,
			available: $scope.capacity,
			booked: $scope.booking.roomCount,
			total_available: $scope.totalAvailable
		};
		
		RoomInventory.save(data, function() {
			console.log("updated")
			$scope.redirectToInvoice();
		})
		$scope.booking.roomCount = "";
		$scope.booking.checkin = "";
		$scope.booking.checkout = "";
		$scope.booking.roomtype = "";
		$scope.showCapacity = false;
	}

	// $scope.availablecheck = function() {
	// 	RoomInventory.get(function(data) {
	// 		console.log(data[data.length-1]);

	// 		$scope.dates = data[data.length-1].check_in.split("-");
	// 		$scope.checkin_date = parseInt($scope.dates[2]);
	// 		$scope.checkin_day = parseInt($scope.dates[1]);
	// 		$scope.roomid = data[data.length-1].id;
	// 		if($scope.booking.checkin.getDate() == $scope.checkin_date) {
	// 			var total = data[data.length-1].booked + data[data.length-1].total_booked;
	// 			console.log("booked total"+total)
	// 			var params = {
	// 				total_booked: total
	// 			}
	// 			RoomInventory.update({id: $scope.roomid},params,function() {
	// 				console.log("room inventory updated if");
	// 			})	
	// 		}
	// 		else if($scope.booking.checkin.getDate() > $scope.checkin_date) {
	// 			var total = data[data.length-1].booked + data[data.length-1].total_available;
	// 			console.log("available total" +total)

	// 			var params = {
	// 				total_available: total
	// 			}
	// 			RoomInventory.update({id: $scope.roomid},params,function() {
	// 				console.log("room inventory updated else if");
	// 			})	
	// 		}
	// 	})
	// }

	
	$scope.availablecheck = function() {
		RoomInventory.get(function(available) {
			$scope.inventory_checkin = [];
			$scope.bookedList = [];
			$scope.totalBooked = 0;
			$scope.newBooked = 0;
			for(var j = 0; j < available.length; j++) {
				if(available[j].hotel_id == $scope.hotelId && available[j].room_type == $scope.booking.roomtype) {
					$scope.totalBooked = $scope.totalBooked + available[j].booked;
					$scope.dates = available[j].check_in.split("-");
					$scope.checkin_date = parseInt($scope.dates[2]);
					$scope.checkin_day = parseInt($scope.dates[1]);		
					$scope.inventory_checkin.push({"date" : $scope.checkin_date,"month" : $scope.checkin_day});
					$scope.roomId = available[available.length-1].id;
					$scope.currentAvailable = available[available.length-1].total_available;
				}
			}
			//console.log("first: "+$scope.totalBooked);
			//console.log("currentAvailable=" + $scope.currentAvailable)
			$scope.availability = $scope.currentAvailable + $scope.totalBooked;
			$scope.bookedCount = 0;
			for(var i = 0; i < $scope.inventory_checkin.length; i++) {
				if($scope.inventory_checkin[i].month < ($scope.booking.checkin.getMonth()+1)) {
					
					var data = {
						hotel_id: $scope.hotelId,
						room_type: $scope.booking.roomtype,
						booked: $scope.newBooked,
						total_available: $scope.totalBooked
					}

			

					RoomInventory.update({id: $scope.roomId},data,function(data) {
						console.log("updated successfully")
					}) 
				}
				else if($scope.inventory_checkin[i].date < $scope.booking.checkin.getDate() && $scope.inventory_checkin[i].month <= ($scope.booking.checkin.getMonth()+1) &&available[i].hotel_id == $scope.hotelId && available[i].room_type == $scope.booking.roomtype) {
						if (available[i].hotel_id == $scope.hotelId && available[i].room_type == $scope.booking.roomtype) {
							$scope.bookedCount = $scope.bookedCount + available[i].booked;
						}
						console.log($scope.bookedCount);
						console.log($scope.currentAvailable);
							//console.log("currentAvailable="+$scope.currentAvailable);
						$scope.avail = $scope.currentAvailable + $scope.bookedCount;
						console.log("final"+$scope.avail)
						console.log($scope.newBooked)
						var data = {
							hotel_id: $scope.hotelId,
							room_type: $scope.booking.roomtype,
							booked: $scope.newBooked,
							total_available: $scope.avail
						}

						RoomInventory.update({id: $scope.roomId},data,function() {
							console.log("available updated");
						}) 				
				}
			}
			console.log("second: "+$scope.bookedCount);
		});
	}


}]);

