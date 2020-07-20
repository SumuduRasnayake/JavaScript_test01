window.onload = function() {
    var x = document.getElementById('demo');
    x.onclick = function () {
        document.body.innerHTML = Date();
    }
};

const { func } = require("prop-types");


/*window.onload = function(){
    var btn = document.getElementById("demo");
    btn.addEventListener("click", myFunction);

    function myFunction(){
        alert(Math.random());
    }
};*/