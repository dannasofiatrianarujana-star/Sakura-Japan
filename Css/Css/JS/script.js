// BOTÓN DE MODO OSCURO

const modoBtn = document.getElementById("modoBtn");

if (modoBtn) {
    modoBtn.addEventListener("click", function() {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            modoBtn.textContent = "☀️";
        } else {
            modoBtn.textContent = "🌙";
        }

    });
}


// DATOS CURIOSOS SOBRE JAPÓN

const datoBtn = document.getElementById("datoBtn");
const dato = document.getElementById("dato");

const datosJapon = [
    "🌸 Japón tiene una tradición muy popular llamada Hanami.",
    "🗻 El Monte Fuji es la montaña más alta de Japón.",
    "🍣 El sushi es uno de los platos japoneses más conocidos.",
    "🚅 Japón es famoso por sus trenes de alta velocidad.",
    "⛩️ Los torii son estructuras tradicionales que suelen encontrarse en los santuarios sintoístas."
];

if (datoBtn) {

    datoBtn.addEventListener("click", function() {

        const numero = Math.floor(Math.random() * datosJapon.length);

        dato.textContent = datosJapon[numero];

    });

}
