// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

var canvas = document.getElementById('A2Canvas');
var ctx = canvas.getContext('2d');  



ctx.rotate((Math.PI / 180) * 25); 
ctx.translate(-200, -90); 

ctx.fillStyle = 'lightgreen';
ctx.fillRect(250, 80, 100, 100);
ctx.fillStyle = 'red';