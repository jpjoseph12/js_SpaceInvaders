var invadersArr = [[6],[6],[6]];

const canvas = document.getElementById('jsInvaders');
const invader = "<img scr='./img/invader.png' />";
invadersArr.forEach(function(element,index, array) {
    canvas.innerHTML = invader;
});