
function compareEmails() {
    let email1 = document.getElementById("Email1").value;
    let email2 = document.getElementById("Email2").value;

    // Check if both fields are not empty
    if (email1 === "" || email2 === "") {
        alert("Please fill in both email fields.");
        return;
    }

    // Check if email format is valid using a simple regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email1) || !emailRegex.test(email2)) {
        alert("Please enter valid email addresses.");
        return;
    }

    if (email1 === email2) {
        alert("Success! Your for mhas been submitted.");
        // You can also modify this line to update a success message in the HTML.
    } else {
        alert("Emails do not match!");
        // You can also modify this line to trigger a different kind of alert or update an error message in the HTML.
    }
}

