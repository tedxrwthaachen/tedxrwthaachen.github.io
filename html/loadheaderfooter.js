document.addEventListener('DOMContentLoaded', function() {
    includeHTML();
});

function includeHTML() {
    const elements = document.querySelectorAll('[data-inlcude]');
    elements.forEach(el => {
        const file = el.getAttribute('data-inlcude');
        if (file) {
            fetch(file)
                .then(response => {
                    if (response.ok) return response.text();
                    throw new Error('Network response was not ok');
                })
                .then(data => {
                    el.innerHTML = data;
                    el.removeAttribute('data-inlcude');
                    includeHTML();
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    });
}
