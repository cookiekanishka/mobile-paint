var mouseEvent = "empty";
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var last_position_of_x, last_position_of_y;
canvas.addEventListener("touchdown", my_touchmove);

function my_touchdown(e)
{
color=document.getElementById("color").value;
width_of_line= document.getElementById("width").value;

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_position_of_touch_x= e.touchesX[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y= e.touchesY[0].clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") 
    {

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + current_position_of_mtouch_x + "y = " + current_position_of_touch_y);
        ctx.moveTo(current_position_of_touch_x, current_position_of_touch_y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = width_of_line;
        ctx.LineTo(current_position_of_touch_x, current_position_of_touch_y, 0, 2 * Math.PI);
        ctx.stroke();

    }
    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}