var app = angular.module('pokerReplayer', []);

app.controller('ReplayerController', function() {
     var canvas = new fabric.Canvas('board');

    this.drawFlop = function() {
        drawImage('images/2_of_clubs.png', 0.1, {left: 2, top: 2});
        drawImage('images/5_of_hearts.png', 0.1, {left: 60, top: 2});
        drawImage('images/9_of_clubs.png', 0.1, {left: 120, top: 2});
    };

    this.drawTurn = function() {
        drawImage('images/jack_of_diamonds.png', 0.1, {left: 180, top: 2});
    };

    this.drawRiver = function() {
        drawImage('images/king_of_clubs2.png', 0.1, {left: 240, top: 2});
    }


    var drawImage = function(url, scale, position) {
        fabric.Image.fromURL(url, function(image) {
            image.scale(scale);
            canvas.add(image.set(position));
        });
    }
});