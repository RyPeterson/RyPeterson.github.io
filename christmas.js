var Christmas = (function() {
    var RANDOM_COLOR_LETTERS = '0123456789ABCDEF';
    var DELTA_X = 100;
    var DELTA_Y = 300;
    var TRUNK_DIVISOR = 4;
    var TRUNK_SCALE = 0.8;
    var LIGHT_UPDATES_MILLIS = 3000;
    var TREE_TRUNK = '#3e3208' /*brown*/;
    var TREE_LEAVES = '#2f8511' /*green*/;

    function _drawTree(startX, startY, trunkWidth, level) {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');

        if(level < 12) {
            var deltaX = DELTA_X / (level + 1);
            var deltaY = DELTA_Y / (level + 1);
            var topRightX = startX + Math.random() * deltaX;
            var topRightY = startY - Math.random() * deltaY;
  
            var topLeftX = startX - Math.random() * deltaX;
            var topLeftY = startY - Math.random() * deltaY;

            var color = level < 6 ? TREE_TRUNK : TREE_LEAVES;
            var decorateTree = level > 10;

            _rightBranch(startX, startY, topRightX, topRightY, trunkWidth, color, decorateTree);
            _leftBranch(startX, startY, topLeftX, topLeftY, trunkWidth, color, decorateTree);

            _drawTree(topRightX, topRightY, trunkWidth * TRUNK_SCALE, level + 1);
            _drawTree(topLeftX, topLeftY, trunkWidth * TRUNK_SCALE, level + 1);
        }

        function _leftBranch(x, y, topX, topY, trunkWidth, color, decorate) {
            _branch(x - trunkWidth / TRUNK_DIVISOR, y, trunkWidth, topX, topY, decorate);
        }

        function _rightBranch(x, y, topX, topY, trunkWidth, color, decorate) {
            _branch(x + trunkWidth / TRUNK_DIVISOR, y, trunkWidth, topX, topY, decorate);
        }

        function _branch(x, y, trunkWidth,  topX, topY, decorate) {
            context.beginPath();
            context.moveTo(x, y);
            context.quadraticCurveTo(x, y - trunkWidth, topX, topY);
            context.lineWidth = trunkWidth;
            context.lineCap = 'round';
            context.strokeStyle = color;
            context.stroke();

            if(decorate) {
                _createDecoration(x, y);
                //Update the colors on a timer. Not the epitome of efficiency.
                setInterval(function() {_createDecoration(x, y)}, LIGHT_UPDATES_MILLIS);
            }
        }

        function _createDecoration(x, y) {
            context.beginPath();
            var decorationSize = 2
            context.arc(x, y, decorationSize, 0, 2*Math.PI);
            context.fillStyle = _getRandomColor();
            context.fill();
        }

        function _getRandomColor() {
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += RANDOM_COLOR_LETTERS[Math.floor(Math.random() * 16)];
            }
            return color;
        }
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