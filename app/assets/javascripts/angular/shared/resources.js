app.factory('Hotel', function($resource) {
 return $resource('/hotels/:id.json',{}, {
    query: {
      method: 'GET', 
      isArray: true,
      responseType: 'json'
    }
 });
});


app.factory('Booking', function($resource) {
  return $resource('/bookings/:id.json',{}, {
    save: {
      method: 'POST'
    },
    get: {
      method: 'GET',
      isArray: true,
      responseType: 'json'
    }
  });
});


app.factory('RoomInventory', function($resource) {
  return $resource('/room_inventories/:id.json',{}, {
    save: {
      method: 'POST'
    },
    get: {
      method: 'GET',
      isArray: true,
      responseType: 'json'
    },
    update: {
      method: 'PUT',
      isArray: false
    }
  });
});

app.factory('Room', function($resource) {
  return $resource('/rooms/:id.json',{}, {
    getAvailable: {
      method: 'GET',
      isArray: true,
      responseType: 'json'
    }
  });
});






