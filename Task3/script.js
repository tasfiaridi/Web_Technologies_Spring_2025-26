let wrongCount = 0;


document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault(); 

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let error = "";

   
    if (!email.includes("@")) {
        error += "Email must contain '@'.<br>";
    }

   
    if (password.length < 6) {
        error += "Password must be at least 6 characters long.<br>";
    }

    
    if (!password.includes("#")) {
        error += "Password must contain '#'.<br>";
    }

    
    if (error !== "") {
        wrongCount++;

        document.getElementById("errorMessage").innerHTML = error;
        document.getElementById("attemptCount").innerHTML =
            "Wrong submission count: " + wrongCount;
    }
    else {
        document.getElementById("errorMessage").innerHTML =
            "Login Successful!";
    }

});
