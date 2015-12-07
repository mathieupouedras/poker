'use strict';  

var Ws = angular.module('Ws',[]);  
Ws.service('Ws', [function ($scope) { 
 
 
 var wsUri = 'ws://localhost:8001';
var ws = new WebSocket(wsUri);



  ws.onOpen = function () {
   
    
  };

  ws.onmessage = function(message) {
        listener(message.data);
  };

  function listener(data) {
      var messageObj = data;
      console.log("Received data from websocket: ", messageObj);
      $scope.message = messageObj;
      
   }



  this.doSend = function (message) {   
    ws.send(message);
  }
}]);

 