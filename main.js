function myFunction() {
    var x = document.getElementById("input").value;
    var y = hexToAscii(x);
    document.getElementById("demo").innerHTML = y;

//write function convert hexadecimal to ASCII format
function hexToAscii(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
}

let myText = document.getElementById("input");
let myBtn = document.getElementById("myBtn");

myText.addEventListener("keyup", e => {
        e.preventDefault();
        if (e.key === "Enter") {
            myBtn.click();
        }

        
    })
myBtn.addEventListener("click", e => {
        myFunction();
    })
        
