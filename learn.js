var colors = genraterandomcolor(6);
var squares = document.querySelectorAll('.square');
var colorpick = pickcolor();
var colordisplay = document.getElementById('colordisplay');
colordisplay.textContent = colorpick;
var messagedisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var nums;
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');




easy.addEventListener('click', function () {
    nums = 3;
    colors = genraterandomcolor(nums);
    colorpick = pickcolor();
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = 'none';
        }
    }
});

hard.addEventListener('click', function () {
    nums = 6;
    colors = genraterandomcolor(nums);
    colorpick = pickcolor();
    colordisplay.textContent = colorpick;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = 'block'
    }

});

reset.addEventListener('click', function () {
    colors = genraterandomcolor(6);
    colorpick = pickcolor();
    colordisplay.textContent = colorpick;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    messagedisplay.textContent = '';
    h1.style.background = '#232323';
})

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener('click', function () {
        var clicked = this.style.background;
        reset.textContent = 'rezet';

        if (clicked === colorpick) {
            messagedisplay.textContent = 'CORRECT';
            changecolor(clicked);
            h1.style.background = clicked;
            reset.textContent = 'play again';

        } else {
            messagedisplay.textContent = 'try again';
            this.style.background = '#232323';
        }

    })
};
// to make make picked color display in all the square
function changecolor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
};

// function to pick random borderBottomColor: 

function pickcolor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genraterandomcolor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomcolor());

    }
    return arr;
}

function randomcolor() {
    //  create rgb random
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return 'rgb' + '(' + r + ', ' + g + ', ' + b + ')'
}

