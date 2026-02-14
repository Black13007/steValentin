const nonBtn = document.querySelectorAll("button")[1];

function moveButton() {
    const maxX = window.innerWidth - nonBtn.offsetWidth;
    const maxY = window.innerHeight - nonBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    nonBtn.style.position = "absolute";
    nonBtn.style.left = randomX + "px";
    nonBtn.style.top = randomY + "px";
}

// PC
nonBtn.addEventListener("mouseover", moveButton);

// Mobile
nonBtn.addEventListener("touchstart", moveButton);


// OUI 
const ouiBtn = document.querySelectorAll("button")[0];
const centre = document.querySelector(".centre");

ouiBtn.addEventListener("click", () => {
    centre.innerHTML = `
        <h1>💖 Youpiii 💖</h1>
        <p>Tu viens de rendre quelqu’un très heureux 😘</p> 
        <img src="images/amour.png" width="120">
    `;
    music.play();
});






///Musqie

ouiBtn.addEventListener("click", () => {
    document.getElementById("music").play();
});


//Message cach
const name = prompt("C’est quoi ton prénom ? 💕");

if (name) {
    document.querySelector("h1").textContent =
    `Veux-tu être ma Valentine, ${name} ? 💖`;
}

// 4



const photoInput = document.getElementById("photo");
let photoURL = "";

photoInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        photoURL = URL.createObjectURL(file);
    }
});
ouiBtn.addEventListener("click", () => {
    centre.innerHTML = `
        <h1>💖 Youpiii 💖</h1>
        <p>Tu viens de rendre quelqu’un très heureux 😘</p>
        ${photoURL ? `<img src="${photoURL}" class="photo-valentine">` : ""}
        <img src="images/amour.png" width="120">
    `;

    document.getElementById("music").play();
});
