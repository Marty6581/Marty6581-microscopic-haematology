
        // Toggle hamburger menu
    document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const links = document.querySelectorAll(".nav-menu a");
    const currentUrl = window.location.pathname.split("/").pop(); // Get the current file name

    links.forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active");
        }
    });
});



        // Collapsable part for case studies sections 

        document.addEventListener('DOMContentLoaded', function () {
            const headers = document.querySelectorAll('.toggle-header');
        
            headers.forEach(header => {
                header.addEventListener('click', function () {
                    const content = this.nextElementSibling;
                    content.classList.toggle('expanded');
                });
            });
        });



  // Get the current year
  const currentYear = new Date().getFullYear();
  // Find the element with the ID 'copyright-year' and set its text content
  document.getElementById('copyright-year').textContent = currentYear;

  

  // Contact form

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const confirmation = document.getElementById("confirmation");
        
        fetch("/", {
            method: "POST",
            body: new FormData(form)
        }).then(() => {
            form.reset();
            form.classList.add("cloak"); // was "hidden"
            confirmation.classList.remove("cloak"); // was "hidden"
        }).catch(error => console.error("Error submitting form", error));
    }

