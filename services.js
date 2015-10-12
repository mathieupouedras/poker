var Board = angular.module('Board', [])
Board.factory('BoardData', [function () {

    var BoardData = {};

    BoardData.getFlop = function () {
        flop = ['2_of_clubs.png', '5_of_hearts.png', '9_of_clubs.png'];
        return flop;
    };

    BoardData.getTurn = function () {
        return 'jack_of_diamonds.png';
    };

    BoardData.getRiver = function () {
        return 'king_of_clubs2.png';
    };

    return BoardData;

}]);

