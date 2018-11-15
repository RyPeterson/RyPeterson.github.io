const RANDOM_COLOR_LETTERS = '0123456789ABCDEF';
const TREE_TRUNK = '#3e3208' /*brown*/;
const TREE_LEAVES = '#2f8511' /*green*/;
const LIGHT_UPDATES_MILLIS = 3000;
const MAX_LEVEL = 12;
const SCALE_FACTOR = 0.66;

class RandomColorGenerator {
    constructor() {

    }

    randomColor() {
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += RANDOM_COLOR_LETTERS[Math.floor(Math.random() * RANDOM_COLOR_LETTERS.length)];
        }
        return color;
    }
}

class Tree {
    constructor(deltaX, deltaY, trunkDivisor, trunkScale, context) {
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.trunkDivisor = trunkDivisor;
        this.trunkScale = trunkScale;
        this.context = context;
        this.randomColorGenerator = new RandomColorGenerator();
    }

    drawTree(startX, startY, trunkWidth, level) {
        if(level < MAX_LEVEL) {
            var deltaX = this.deltaX / (level + 1);
            var deltaY = this.deltaY / (level + 1);
            var topRightX = startX + SCALE_FACTOR * deltaX;
            var topRightY = startY - SCALE_FACTOR * deltaY;
  
            var topLeftX = startX - SCALE_FACTOR * deltaX;
            var topLeftY = startY - SCALE_FACTOR * deltaY;

            var color = level < Math.floor(MAX_LEVEL / 2) ? TREE_TRUNK : TREE_LEAVES;
            var decorateTree = level >= 10;

            this._rightBranch(startX, startY, topRightX, topRightY, trunkWidth, color, decorateTree);
            this._leftBranch(startX, startY, topLeftX, topLeftY, trunkWidth, color, decorateTree);

            this.drawTree(topRightX, topRightY, trunkWidth * this.trunkScale, level + 1);
            this.drawTree(topLeftX, topLeftY, trunkWidth * this.trunkScale, level + 1);
        }
    }

    _leftBranch(x, y, topX, topY, trunkWidth, color, decorate) {
        this._branch(x - trunkWidth / this.trunkDivisor, y, trunkWidth, topX, topY, decorate, color);
    }

    _rightBranch(x, y, topX, topY, trunkWidth, color, decorate) {
        this._branch(x + trunkWidth / this.trunkDivisor, y, trunkWidth, topX, topY, decorate, color);
    }

    _branch(x, y, trunkWidth, topX, topY, decorate, color) {
        this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.quadraticCurveTo(x, y - trunkWidth, topX, topY);
        this.context.lineWidth = trunkWidth;
        this.context.lineCap = 'round';
        this.context.strokeStyle = color;
        this.context.stroke();

        if(decorate) {
            var self = this;
            self._createDecoration(x, y);
            //Update the colors on a timer. Not the epitome of efficiency.
            setInterval(function() {self._createDecoration(x, y)}, LIGHT_UPDATES_MILLIS);
        }
    }

    _createDecoration(x, y) {
        this.context.beginPath();
        var decorationSize = 2
        this.context.arc(x, y, decorationSize, 0, 2 * Math.PI);
        this.context.fillStyle = this.randomColorGenerator.randomColor();
        this.context.fill();
    }
}

var Christmas = (function() {
    var DELTA_X = 350;
    var DELTA_Y = 300;
    var TRUNK_DIVISOR = 1024;
    var TRUNK_SCALE = 0.8;

    function _drawTree(startX, startY, trunkWidth, level) {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');

        new Tree(DELTA_X, DELTA_Y, TRUNK_DIVISOR, TRUNK_SCALE, context).drawTree(startX, startY, trunkWidth, level);
    }

    const PHRASES = {

    }

    function _drawGreeting(x, y) {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        context.font = "30px Arial";
        context.fillStyle = "Black"
        context.fillText('Merry Christmas!', x, y);
    }

    return {
        drawTree : _drawTree,
        drawGreeting: _drawGreeting,
    }
}())