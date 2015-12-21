'use strict';

(function() {
    var Board = angular.module('Board', []);
    Board.factory('BoardData', [function () {

        var BoardData = {};

        BoardData.getFlop = function getFlop() {
            var flop = ['2_of_clubs.png', '5_of_hearts.png', '9_of_clubs.png'];
            return flop;
        };

        BoardData.getTurn = function getTurn() {
            return 'jack_of_diamonds.png';
        };

        BoardData.getRiver = function getRiver() {
            return 'king_of_clubs2.png';
        };

        BoardData.getCards = function getCards(player) {
            if (player === 'Héro') {
                return ['2_of_clubs.png', '5_of_hearts.png'];
            }
            else {
                return ['back.png', 'back.png'];
            }

        };

        return BoardData;

    }]);
}());

