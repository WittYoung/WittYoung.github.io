console.log(document.getElementById("heading_2"))

document.getElementById("heading").addEventListener("click", function(e){
    document.getElementById("heading").style.color = "red";  
})


document.getElementById("heading_2").addEventListener("dblclick", function(e){
    document.getElementById("heading_2").style.color = "blue"
    document.getElementById("heading").innerHTML = "Goodbye <3";
})

console.log(document.getElementById("heading_2").innerHTML);