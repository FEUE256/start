document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.alert').forEach(li => {
    li.addEventListener('click', () => {
        alert(li.textContent);
    });
});
