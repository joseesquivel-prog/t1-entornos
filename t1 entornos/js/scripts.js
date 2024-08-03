document.addEventListener('DOMContentLoaded', function() {
    colores();
    banner();
    setInterval(hora, 1000);
    setInterval(fecha, 1000);
});

function colores() {
    setInterval(() => {
        const r = Math.floor(Math.random() * 123);
        const g = Math.floor(Math.random() * 123);
        const b = Math.floor(Math.random() * 123);
        document.getElementById('titulo').style.color = `rgb(${r}, ${g}, ${b})`;
    }, 1000);
}

function banner() {
    const banners = ['img/banner1.jpg', 'img/b2.jpg', 'img/b3.jpg', 'img/b4.jpg'];
    let index = 0;
    setInterval(() => {
        index = (index + 1) % banners.length;
        document.getElementById('banner').src = banners[index];
    }, 1000);
}

function hora() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('Hora').textContent = `Hora: ${timeString}`;
}

function fecha() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    document.getElementById('Fecha').textContent = `Fecha: ${dateString}`;
}

function mostrarTexto(num) {
    const text = document.getElementById(`texto${num}`);
    const allTexts = document.querySelectorAll('.auto .full');
    allTexts.forEach(t => t.style.display = 'none');
    text.style.display = 'block';
}
