const form = document.getElementById("myForm");
      
form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
        event.preventDefault();
    }
    form.classList.add("was-validated");
});    
