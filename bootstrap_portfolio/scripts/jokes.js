function getJoke() {
    var request = new XMLHttpRequest();
    //use this end point to get one joke
//    request.open("GET", "https://official-joke-api.appspot.com/random_joke");
    request.open("GET", "https://official-joke-api.appspot.com/jokes/programming/ten");

    request.onload=function() {
        var data=JSON.parse(this.response);
        console.log(data);
        console.log(data[0].setup+" "+data[0].punchline);
        document.getElementById("setup").textContent=data[0].setup;
        document.getElementById("punchline").textContent=data[0].punchline;      
    }
     
    request.send();

}