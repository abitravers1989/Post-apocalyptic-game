var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "skyblue";
ctx.strokeStyle = "black";
var canvasOffset = $("#canvas").offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var isDown = false;
var startX;
var startY;

var circle = {
    x: 100,
    y: 290,
    r: 10
};
var rect = {
    x: 100,
    y: 100,
    w: 40,
    h: 100
};

draw();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
}

// return true if the rectangle and circle are colliding
function RectCircleColliding(circle, rect) {
    var distX = Math.abs(circle.x - rect.x - rect.w / 2);
    var distY = Math.abs(circle.y - rect.y - rect.h / 2);

    if (distX > (rect.w / 2 + circle.r)) {
        return false;
    }
    if (distY > (rect.h / 2 + circle.r)) {
        return false;
    }

    if (distX <= (rect.w / 2)) {
        return true;
    }
    if (distY <= (rect.h / 2)) {
        return true;
    }

    var dx = distX - rect.w / 2;
    var dy = distY - rect.h / 2;
    return (dx * dx + dy * dy <= (circle.r * circle.r));
}

function handleMouseDown(e) {
    e.preventDefault();
    startX = parseInt(e.clientX - offsetX);
    startY = parseInt(e.clientY - offsetY);

    // Put your mousedown stuff here
    var dx = startX - circle.x;
    var dy = startY - circle.y;
    isDown = (dx * dx + dy * dy < circle.r * circle.r);
}

function handleMouseUp(e) {
    e.preventDefault();
    isDown = false;
}

function handleMouseOut(e) {
    e.preventDefault();
    isDown = false;
}

function handleMouseMove(e) {
    e.preventDefault();

    // Put your mousemove stuff here
    if (!isDown) {
        return;
    }
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    var dx = mouseX - startX;
    var dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;
    circle.x += dx;
    circle.y += dy;

    if (RectCircleColliding(circle, rect)) {
        ctx.fillStyle = "red";
    } else {
        ctx.fillStyle = "skyblue";
    }

    draw();
}

$("#canvas").mousedown(function (e) {
    handleMouseDown(e);
});
$("#canvas").mousemove(function (e) {
    handleMouseMove(e);
});
$("#canvas").mouseup(function (e) {
    handleMouseUp(e);
});
$("#canvas").mouseout(function (e) {
    handleMouseOut(e);
});
