

var length = document.querySelectorAll(".btn").length;

for(let i = 0; i < length; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", handleClick);
}

function handleClick(){
    var response = this.value;
    if( response === "C"){
        document.getElementById("box").value = null;
    } else if( response === "="){
        try{
            var final = document.getElementById("box").value;
            var evaluation = eval(final);
            document.getElementById("box").value = evaluation;   
        }

        catch(e){
            document.getElementById("box").value = "error";
            console.log(e);
        }
     

    } else{
        document.getElementById("box").value = document.getElementById("box").value + response;
    }


}


