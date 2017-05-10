app.factory('Hotel', function($resource) {
 var hotel = $resource('/hotel',{},{
    'query': {method: 'GET', isArray: true}
 });
  return hotel;
});




