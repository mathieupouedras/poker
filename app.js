var app = angular.module('pokerReplayer', ['Board']);

app.controller('ReplayerController', function(BoardData) {
     var canvas = new fabric.Canvas('board');

    var flop = BoardData.getFlop();
    this.drawFlop = function() {
        drawImage('images/' + flop[0], 0.1, {left: 2, top: 2});
        drawImage('images/' + flop[1], 0.1, {left: 60, top: 2});
        drawImage('images/' + flop[2], 0.1, {left: 120, top: 2});
    };

    this.drawTurn = function() {
        drawImage('images/' + BoardData.getTurn(), 0.1, {left: 180, top: 2});
    };

    this.drawRiver = function() {
        drawImage('images/' + BoardData.getRiver(), 0.1, {left: 240, top: 2});
    }


    var drawImage = function(url, scale, position) {
        fabric.Image.fromURL(url, function(image) {
            image.scale(scale);
            canvas.add(image.set(position));
        });
    }
});