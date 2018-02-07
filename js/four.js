function personajes(url, callback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            try {
                var data = JSON.parse(this.responseText)
            } catch(err) {
                console.error("HUBO ERROR " , err)
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

personajes("https://swapi.co/api/people/", function(data) {
    
    
    var persons=data.results;
    var html ;
    
    var container = document.querySelector(".text ul");
       
       for(var i = 0; i < persons.length; i++){
         
          var item = container.innerHTML += "<li><a class='ajax_item' onClick=obtenerDatos('https://swapi.co/api/people/')> "+ persons[i].name + "</a></li>";

       }
    
})

function obtenerDatos(url) {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                console.log("hello", data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}


