wp1 = document.getElementsByClassName('wp1')[0];
var waypoint = new Waypoint({
  element: wp1,
  handler: function(direction) {
   	wp1.className +=" animated bounceInDown";
  },
  offset: '75%'
})