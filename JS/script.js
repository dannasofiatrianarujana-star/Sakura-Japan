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
// GALERÍA DE LUGARES

const photoModal = document.getElementById("photoModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const photoGallery = document.getElementById("photoGallery");

const lugares = {

    tokio: {
        title: "Tokio 🌃",
        description: "Una enorme ciudad donde la tecnología, las luces y la cultura japonesa se encuentran.",
        photos: [
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80"
        ]
    },

    kioto: {
        title: "Kioto ⛩️",
        description: "Una ciudad famosa por sus templos, jardines y tradiciones japonesas.",
        photos: [
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1200&q=80"
        ]
    },

    fuji: {
        title: "Monte Fuji 🗻",
        description: "Una de las montañas más representativas de Japón y uno de sus paisajes más conocidos.",
        photos: [
            "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&w=1200&q=80"
        ]
    },

    osaka: {
        title: "Osaka 🏯",
        description: "Una ciudad conocida por su gastronomía, su ambiente urbano y su famoso castillo.",
        photos: [
            "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1590253230532-a67f6bc61a4a?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80"
        ]
    }
};

const placeCards = document.querySelectorAll(".place-card");

placeCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const place = card.getAttribute("data-place");
        const info = lugares[place];

        modalTitle.textContent = info.title;
        modalDescription.textContent = info.description;

        photoGallery.innerHTML = "";

        info.photos.forEach(function(photo) {

            const img = document.createElement("img");

            img.src = photo;
            img.alt = info.title;

            photoGallery.appendChild(img);

        });

        photoModal.classList.add("active");

    });

});

if (closeModal) {

    closeModal.addEventListener("click", function() {
        photoModal.classList.remove("active");
    });

}

if (photoModal) {

    photoModal.addEventListener("click", function(event) {

        if (event.target === photoModal) {
            photoModal.classList.remove("active");
        }

    });

}
