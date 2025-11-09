document.getElementById('year').textContent = new Date().getFullYear();

 document.querySelectorAll('ul li').forEach(li => {
        li.addEventListener('click', () => {
            alert(li.textContent);
        });
    });
