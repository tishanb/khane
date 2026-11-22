// Replace with your EmailJS Public Key
emailjs.init("txw8y_ieq2uKKftQe");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("status").innerHTML = "Sending...";

    emailjs.sendForm(
        "Glanza_web",
        "template_ui1ymcj",
        this
    ).then(function() {
        document.getElementById("status").innerHTML =
        "✅ Message sent successfully!";
        document.getElementById("contact-form").reset();
    }, function(error) {
        document.getElementById("status").innerHTML =
        "❌ Failed to send message.";
        console.log(error);
    });
});
