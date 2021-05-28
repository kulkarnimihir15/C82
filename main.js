var mouse_event="empty";
var last_position_of_x,last_position_of_y;
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_ofline=2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_event="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if (mouse_event=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_ofline;
    console.log("Last position of x and y coordinates=");
    console.log("X="+last_position_of_x+"Y="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("Current position of x and y coordinates=");
    console.log("X="+current_position_of_mouse_x+"Y="+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}