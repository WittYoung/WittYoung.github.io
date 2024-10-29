document.getElementById("heading").addEventListener("click", function(e){
    document.getElementById("heading").style.color = "red";  
})


document.getElementById("heading_2").addEventListener("dblclick", function(e){
    document.getElementById("heading").innerHTML = "Goodbye <3";
})

document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
})

document.getElementById('hoverImage').addEventListener('mouseover', function() {
    this.src = 'img/IMG_5705.jpg';
    document.getElementById("hoverImage").InnerHTML = "goodbye chill Monkeys :/";
});