var ImgBox = document.querySelector(".imb-box");
var ImgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("originalImg");
var line= document.getElementById("line");

originalImg.style.width = ImgBox.offsetWidth + "px";

var leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function (e) {
    // e.pageX;
    var boxWidth = (e.pageX - leftSpace) + "px";
    ImgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}
