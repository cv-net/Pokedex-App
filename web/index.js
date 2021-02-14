let xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/")

xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        
        let data = JSON.parse(this.responseText);
        for ( let i = 0 ; i < data.length ; i++ ) {
            document.getElementById('container').innerHTML += `
                <div class="card">
                    <h1>${data[i][0].name}, #${data[i][0].id}</h1>
                    <img src="${data[i][0].img}">  
                </div> 
            `;
        }
    }
}

xhr.send();