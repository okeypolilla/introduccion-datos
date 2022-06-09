function iniciar()
{
alert("pepe");
var num=document.getElementById("numero").value;
var x=document.getElementById("m1");
var j=document.getElementById("m2");
var y=document.getElementById("numero");
var p=document.getElementById("m3");
var figura=" ";
var vuelta=0;
x.style.display="none";
j.style.display="none";
y.style.display="none";
p.style.display="block";


for (let j=1; j<=num; j++)
{
    figura=figura+"O";
    document.write('<p style="text-align:center">'+figura+'<br>'+'</p>') ;
}

}