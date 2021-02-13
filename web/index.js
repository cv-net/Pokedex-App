function getPokemonObject() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/")
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
            
            // document.getElementById("container").innerHTML = this.responseText;
        } else {
            console.log('Error!');
        }
    }


    xhr.send();
}

    // module.exports = 'rest/index.js'