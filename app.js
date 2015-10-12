var app = angular.module('pokerReplayer', ['Board']);

app.controller('ReplayerController', function(BoardData) {
    var canvas = new fabric.Canvas('board');

    canvas.add(
        new fabric.Rect({
            width: 600, height: 400,
            left: 0, top: 0,
            angle:0,
            fill:'green'
        }));

    var flop = BoardData.getFlop();
    this.drawFlop = function() {
        drawImage('images/' + flop[0], 0.1, {left: 0+ 100, top: 150});
        drawImage('images/' + flop[1], 0.1, {left: 60+ 100, top: 150});
        drawImage('images/' + flop[2], 0.1, {left: 120+ 100, top: 150});
    };

    this.drawTurn = function() {
        drawImage('images/' + BoardData.getTurn(), 0.1, {left: 180 + 100, top: 150});
    };

    this.drawRiver = function() {
        drawImage('images/' + BoardData.getRiver(), 0.1, {left: 240 + 100, top: 150});
    };

    var drawImage = function(url, scale, position) {
        fabric.Image.fromURL(url, function(image) {
            image.scale(scale);
            canvas.add(image.set(position));
        });
    }

    var drawPlayer = function(name, position) {
        var player = new fabric.Text(name, position);
        canvas.add(player);

        hand = BoardData.getCards(name);
        cardPosition = {};
        cardPosition.left = position.left + 80;
        cardPosition.top = position.top;

        console.log(cardPosition);
        drawImage('images/' + hand[0], 0.1, cardPosition);

        cardPosition2 = {};
        cardPosition2.left = cardPosition.left + 60;
        cardPosition2.top = cardPosition.top;
        drawImage('images/' + hand[1], 0.1, cardPosition2);
    };

    drawPlayer('François', {left: 0, top: 0,  fontSize: 20});
    drawPlayer('Héro', {left: 400, top: 0,  fontSize: 20});
    drawPlayer('Marco', {left: 400, top: 300,  fontSize: 20});
    drawPlayer('Benj', {left: 0, top: 300,  fontSize: 20});

});