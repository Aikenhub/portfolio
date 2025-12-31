// 1. TYPEWRITER EFFECT
const text = "Cloud & Security Professional";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// 2. THEME TOGGLE
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeBtn.innerText = document.body.classList.contains('light-mode') ? "🌙 Dark Mode" : "☀️ Light Mode";
});

// 3. CLICK TO COPY
function copyEmail() {
    const email = document.getElementById("myEmail").innerText;
    const status = document.getElementById("copyStatus");
    navigator.clipboard.writeText(email).then(() => {
        status.style.display = "block";
        setTimeout(() => { status.style.display = "none"; }, 2000);
    });
}

// Start Typewriter on load
window.onload = typeWriter;