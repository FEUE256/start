document.getElementById('year').textContent = new Date().getFullYear();

 document.getElementsByClass('alert').forEach(li => {
        li.addEventListener('click', () => {
            alert(li.textContent);
        });
    });
