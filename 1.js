function showpic(whichpic){
var source=whichpic.getAttribute("href");
var p=document.getElementById("p");
p.setAttribute("src",source);
var text=whichpic.getAttribute("title");
var d=document.getElementById("d");
d.firstChild.nodeValue=text;
}