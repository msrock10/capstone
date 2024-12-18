var index=0;
function carousel(){
    var i;
    var x = document.getElementsByClassName("my-slides");
}
for (i = 0; i < x.length; i++) {``

    x[i].style.display = "none";
    
    }
    index=++
    x[index - 1].style.display = "block";
    setTimeout(carousel,6000);
    carousel();