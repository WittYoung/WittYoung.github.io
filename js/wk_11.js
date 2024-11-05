hello("Witt")

function hello(name){
    alert("hello"+ name);
}

function even(n){
    if(n%2 == 0){
        return true
    }else{
        return false
    }
}

function buildText(arr){
    for(let i=0; i<arr.length; i++){
    
        paragraph += arr[i] + " ";
    }
    document.getElementById("my_para").innerHTML = paragraph;
}