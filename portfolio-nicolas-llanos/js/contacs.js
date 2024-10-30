// js/contact.js
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        const formData = new FormData(this);

        fetch('https://formspree.io/f/xrbgpegn', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('responseMessage').innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
                this.reset(); // Limpia el formulario
            } else {
                document.getElementById('responseMessage').innerHTML = '<div class="alert alert-danger">There was a problem sending your message.</div>';
            }
        })
        .catch(error => {
            document.getElementById('responseMessage').innerHTML = '<div class="alert alert-danger">There was a problem sending your message.</div>';
        });
    });
});
