 // Get form data
 const formData = new FormData(form);

 // Send form data to the PHP script
 fetch("contact.php", {
     method: "POST",
     body: formData,
 })
     .then((response) => response.text())
     .then((data) => {
         // Display the response from the server in the successMessage div
         successMessage.innerHTML = data;

         // Make the success message element visible
         successMessage.style.display = "block";

         // Add the shine animation class
         successMessage.classList.add("shine-animation");

         // Clear the form after a successful submission
         form.reset();

         // Hide the success message after 3 seconds
         setTimeout(function () {
             successMessage.style.display = "none";
         }, 3000); // 3000 milliseconds (3 seconds)
     })
     .catch((error) => {
         console.error("Error:", error);
     });
});
});