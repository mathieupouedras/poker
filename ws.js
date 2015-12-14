'use strict';  


app.service('socket', ['$q',function ($q) { 
 
 
 var wsUri = 'ws://localhost:8001';

var ws = new WebSocket(wsUri);



  this.callback =function () {
    var defer = $q.defer();
     ws.onmessage = function(message) {
        defer.resolve(message.data);
    };    
    return defer.promise;  
      
   };


  this.doSend = function (message) {   
    ws.send(message);
  };
}]);

 