
// ==========================================
// CINENOVA - RECOMENDADOR DE PELICULAS
// Edades: 2-12, 13-17 y 18 o mas
// Imagenes automaticas desde Wikipedia
// ==========================================

let generosSeleccionados = [];

const cacheImagenes = {};

// ==========================================
// CATALOGO DE PELICULAS
// ==========================================

const catalogo = {

    // --------------------------------------
    // EDADES DE 2 A 12 AÑOS
    // --------------------------------------

    infantil: {

        "Animación": [
            ["Toy Story", "Toy Story"],
            ["Buscando a Nemo", "Finding Nemo"],
            ["Ratatouille", "Ratatouille (film)"],
            ["Shrek", "Shrek"],
            ["Luca", "Luca (2021 film)"],
            ["Encanto", "Encanto (film)"],
            ["Red", "Turning Red"],
            ["Up: Una aventura de altura", "Up (2009 film)"],
            ["Coco", "Coco (2017 film)"],
            ["Intensamente 2", "Inside Out 2"]
        ],

        "Aventura": [
            ["Jumanji", "Jumanji (1995 film)"],
            ["El libro de la selva", "The Jungle Book (1967 film)"],
            ["Peter Rabbit", "Peter Rabbit (film)"],
            ["Dora y la ciudad perdida", "Dora and the Lost City of Gold"],
            ["Las aventuras de Tintín", "The Adventures of Tintin (film)"],
            ["La brújula dorada", "The Golden Compass (film)"],
            ["Viaje al centro de la Tierra", "Journey to the Center of the Earth (2008 film)"],
            ["Las crónicas de Narnia", "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe"]
        ],

        "Comedia": [
            ["Mi pobre angelito", "Home Alone"],
            ["Paddington", "Paddington (film)"],
            ["Una noche en el museo", "Night at the Museum"],
            ["Matilda", "Matilda (1996 film)"],
            ["Escuela de rock", "School of Rock"],
            ["Las vacaciones de Mr. Bean", "Mr. Bean's Holiday"],
            ["El diario de Greg", "Diary of a Wimpy Kid (film)"],
            ["Un viernes de locos", "Freaky Friday (2003 film)"]
        ],

        "Romance": [
            ["La dama y el vagabundo", "Lady and the Tramp"],
            ["Enredados", "Tangled"],
            ["La bella y la bestia", "Beauty and the Beast (1991 film)"],
            ["Encantada", "Enchanted (film)"],
            ["Elementos", "Elemental (2023 film)"],
            ["La princesa y el sapo", "The Princess and the Frog"],
            ["Cenicienta", "Cinderella (1950 film)"]
        ],

        "Fantasía": [
            ["Mi vecino Totoro", "My Neighbor Totoro"],
            ["Kiki: Entregas a domicilio", "Kiki's Delivery Service"],
            ["El castillo en el cielo", "Castle in the Sky"],
            ["Alicia en el país de las maravillas", "Alice in Wonderland (1951 film)"],
            ["El viaje de Chihiro", "Spirited Away"],
            ["El mago de Oz", "The Wizard of Oz"],
            ["El origen de los guardianes", "Rise of the Guardians"],
            ["Cómo entrenar a tu dragón", "How to Train Your Dragon"]
        ],

        "Ciencia ficción": [
            ["WALL-E", "WALL-E"],
            ["Grandes héroes", "Big Hero 6 (film)"],
            ["Los Robinsones del espacio", "Meet the Robinsons"],
            ["Lilo y Stitch", "Lilo & Stitch"],
            ["El gigante de hierro", "The Iron Giant"],
            ["Monstruos contra alienígenas", "Monsters vs. Aliens"],
            ["Astro Boy", "Astro Boy (2009 film)"]
        ],

        "Drama": [
            ["Babe, el puerquito valiente", "Babe (film)"],
            ["La telaraña de Charlotte", "Charlotte's Web (2006 film)"],
            ["Dolphin Tale", "Dolphin Tale"],
            ["Siempre a tu lado", "Hachi: A Dog's Tale"],
            ["Milagros del cielo", "Miracles from Heaven"],
            ["Extraordinario", "Wonder (film)"],
            ["La vida de un perro", "A Dog's Purpose"]
        ],

        "Misterio": [
            ["El gran detective ratón", "The Great Mouse Detective"],
            ["Scooby-Doo", "Scooby-Doo (film)"],
            ["Las aventuras de Tintín", "The Adventures of Tintin (film)"],
            ["Detective Pikachu", "Pokémon Detective Pikachu"],
            ["La casa del reloj en la pared", "The House with a Clock in Its Walls"],
            ["Nancy Drew", "Nancy Drew (2007 film)"],
            ["Enola Holmes", "Enola Holmes (film)"]
        ],

        "Terror": []

    },

    // --------------------------------------
    // EDADES DE 13 A 17 AÑOS
    // --------------------------------------

    juvenil: {

        "Animación": [
            ["Spider-Man: Un nuevo universo", "Spider-Man: Into the Spider-Verse"],
            ["El castillo ambulante", "Howl's Moving Castle"],
            ["Kubo y la búsqueda samurái", "Kubo and the Two Strings"],
            ["Klaus", "Klaus (film)"],
            ["Spider-Man: A través del Spider-Verso", "Spider-Man: Across the Spider-Verse"],
            ["El recuerdo de Marnie", "When Marnie Was There"],
            ["Your Name", "Your Name"],
            ["El niño y la garza", "The Boy and the Heron"],
            ["La princesa Mononoke", "Princess Mononoke"],
            ["El cadáver de la novia", "Corpse Bride"]
        ],

        "Aventura": [
            ["Las crónicas de Narnia", "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe"],
            ["Jumanji: En la selva", "Jumanji: Welcome to the Jungle"],
            ["La vida de Pi", "Life of Pi (film)"],
            ["Jurassic World", "Jurassic World"],
            ["Uncharted", "Uncharted (film)"],
            ["El príncipe de Persia", "Prince of Persia: The Sands of Time"],
            ["Piratas del Caribe", "Pirates of the Caribbean: The Curse of the Black Pearl"],
            ["Calabozos y dragones: Honor entre ladrones", "Dungeons & Dragons: Honor Among Thieves"],
            ["Jungle Cruise", "Jungle Cruise (film)"],
            ["El origen", "Inception"]
        ],

        "Comedia": [
            ["Chicas pesadas", "Mean Girls"],
            ["Son como niños", "Grown Ups (film)"],
            ["Una esposa de mentira", "Just Go with It"],
            ["¿Y dónde están las rubias?", "White Chicks"],
            ["Un viernes de locos", "Freaky Friday (2003 film)"],
            ["Escuela de rock", "School of Rock"],
            ["Si yo tuviera 30", "13 Going on 30"],
            ["Legalmente rubia", "Legally Blonde"],
            ["La propuesta", "The Proposal (2009 film)"],
            ["Pasante de moda", "The Intern (2015 film)"]
        ],

        "Romance": [
            ["Encantada", "Enchanted (film)"],
            ["Flipped", "Flipped (2010 film)"],
            ["A todos los chicos de los que me enamoré", "To All the Boys I've Loved Before"],
            ["La última canción", "The Last Song (2010 film)"],
            ["Bajo la misma estrella", "The Fault in Our Stars (film)"],
            ["A dos metros de ti", "Five Feet Apart"],
            ["10 cosas que odio de ti", "10 Things I Hate About You"],
            ["Si decido quedarme", "If I Stay (film)"],
            ["La probabilidad estadística del amor a primera vista", "Love at First Sight (2023 film)"],
            ["Orgullo y prejuicio", "Pride & Prejudice (2005 film)"]
        ],

        "Fantasía": [
            ["Harry Potter y la piedra filosofal", "Harry Potter and the Philosopher's Stone (film)"],
            ["Alicia en el país de las maravillas", "Alice in Wonderland (2010 film)"],
            ["Percy Jackson y el ladrón del rayo", "Percy Jackson & the Olympians: The Lightning Thief"],
            ["Maléfica", "Maleficent (film)"],
            ["Alicia a través del espejo", "Alice Through the Looking Glass (2016 film)"],
            ["El hogar de Miss Peregrine", "Miss Peregrine's Home for Peculiar Children"],
            ["Stardust", "Stardust (2007 film)"],
            ["El aprendiz de brujo", "The Sorcerer's Apprentice (2010 film)"],
            ["Animales fantásticos", "Fantastic Beasts and Where to Find Them"],
            ["El señor de los anillos", "The Lord of the Rings: The Fellowship of the Ring"]
        ],

        "Ciencia ficción": [
            ["WALL-E", "WALL-E"],
            ["Volver al futuro", "Back to the Future"],
            ["Grandes héroes", "Big Hero 6 (film)"],
            ["Ready Player One", "Ready Player One (film)"],
            ["Los juegos del hambre", "The Hunger Games (film)"],
            ["Divergente", "Divergent (film)"],
            ["Maze Runner", "The Maze Runner (film)"],
            ["Transformers", "Transformers (film)"],
            ["Ender's Game", "Ender's Game (film)"],
            ["Al filo del mañana", "Edge of Tomorrow"]
        ],

        "Drama": [
            ["Extraordinario", "Wonder (film)"],
            ["En busca de la felicidad", "The Pursuit of Happyness"],
            ["Talentos ocultos", "Hidden Figures"],
            ["La teoría del todo", "The Theory of Everything (2014 film)"],
            ["La sociedad de los poetas muertos", "Dead Poets Society"],
            ["Milagros del cielo", "Miracles from Heaven"],
            ["Siempre a tu lado", "Hachi: A Dog's Tale"],
            ["El niño con el pijama de rayas", "The Boy in the Striped Pyjamas (film)"],
            ["Green Book", "Green Book (film)"],
            ["La vida es bella", "Life Is Beautiful"]
        ],

        "Misterio": [
            ["Enola Holmes", "Enola Holmes (film)"],
            ["Entre navajas y secretos", "Knives Out"],
            ["La casa del reloj en la pared", "The House with a Clock in Its Walls"],
            ["Misterio a bordo", "Murder Mystery (film)"],
            ["Detective Pikachu", "Pokémon Detective Pikachu"],
            ["Asesinato en el Orient Express", "Murder on the Orient Express (2017 film)"],
            ["Sherlock Holmes", "Sherlock Holmes (2009 film)"],
            ["Glass Onion", "Glass Onion: A Knives Out Mystery"],
            ["La búsqueda", "National Treasure (film)"],
            ["Los ilusionistas", "Now You See Me"]
        ],

        "Terror": [
            ["Coraline y la puerta secreta", "Coraline (film)"],
            ["Monster House", "Monster House (film)"],
            ["El sexto sentido", "The Sixth Sense"],
            ["Señales", "Signs (2002 film)"],
            ["Un lugar en silencio", "A Quiet Place"],
            ["La mujer de negro", "The Woman in Black (2012 film)"],
            ["Los otros", "The Others (2001 film)"],
            ["El orfanato", "The Orphanage (film)"]
        ]

    },

    // --------------------------------------
    // EDADES DE 18 AÑOS EN ADELANTE
    // --------------------------------------

    adulto: {

        "Animación": [
            ["Your Name", "Your Name"],
            ["El niño y la garza", "The Boy and the Heron"],
            ["La princesa Mononoke", "Princess Mononoke"],
            ["El recuerdo de Marnie", "When Marnie Was There"],
            ["Spider-Man: A través del Spider-Verso", "Spider-Man: Across the Spider-Verse"],
            ["Persépolis", "Persepolis (film)"],
            ["Isla de perros", "Isle of Dogs (film)"],
            ["Mary y Max", "Mary and Max"],
            ["Akira", "Akira (1988 film)"]
        ],

        "Aventura": [
            ["El origen", "Inception"],
            ["Interestelar", "Interstellar (film)"],
            ["El último samurái", "The Last Samurai"],
            ["Gladiador", "Gladiator (2000 film)"],
            ["Mad Max: Furia en el camino", "Mad Max: Fury Road"],
            ["Misión rescate", "The Martian (film)"],
            ["Duna", "Dune (2021 film)"],
            ["Apocalypto", "Apocalypto"],
            ["El renacido", "The Revenant (2015 film)"]
        ],

        "Comedia": [
            ["Legalmente rubia", "Legally Blonde"],
            ["La propuesta", "The Proposal (2009 film)"],
            ["Si yo tuviera 30", "13 Going on 30"],
            ["¿Y dónde están las rubias?", "White Chicks"],
            ["Pasante de moda", "The Intern (2015 film)"],
            ["El diablo viste a la moda", "The Devil Wears Prada"],
            ["¿Qué pasó ayer?", "The Hangover"],
            ["La máscara", "The Mask (1994 film)"],
            ["Loco y estúpido amor", "Crazy, Stupid, Love"]
        ],

        "Romance": [
            ["Yo antes de ti", "Me Before You (film)"],
            ["El stand de los besos", "The Kissing Booth (film)"],
            ["A través de mi ventana", "Through My Window (film)"],
            ["Orgullo y prejuicio", "Pride & Prejudice (2005 film)"],
            ["La La Land", "La La Land"],
            ["Bajo la misma estrella", "The Fault in Our Stars (film)"],
            ["A dos metros de ti", "Five Feet Apart"],
            ["Diario de una pasión", "The Notebook"],
            ["Posdata: Te amo", "P.S. I Love You (film)"],
            ["Como si fuera la primera vez", "50 First Dates"]
        ],

        "Fantasía": [
            ["El señor de los anillos", "The Lord of the Rings: The Fellowship of the Ring"],
            ["El laberinto del fauno", "Pan's Labyrinth"],
            ["Stardust", "Stardust (2007 film)"],
            ["Animales fantásticos", "Fantastic Beasts and Where to Find Them"],
            ["El hogar de Miss Peregrine", "Miss Peregrine's Home for Peculiar Children"],
            ["La forma del agua", "The Shape of Water"],
            ["El curioso caso de Benjamin Button", "The Curious Case of Benjamin Button (film)"],
            ["El imaginario del Doctor Parnassus", "The Imaginarium of Doctor Parnassus"]
        ],

        "Ciencia ficción": [
            ["Matrix", "The Matrix"],
            ["Interestelar", "Interstellar (film)"],
            ["La llegada", "Arrival (film)"],
            ["El origen", "Inception"],
            ["Blade Runner 2049", "Blade Runner 2049"],
            ["Al filo del mañana", "Edge of Tomorrow"],
            ["Ex Machina", "Ex Machina (film)"],
            ["Distrito 9", "District 9"],
            ["Gravedad", "Gravity (2013 film)"],
            ["Duna", "Dune (2021 film)"]
        ],

        "Drama": [
            ["La teoría del todo", "The Theory of Everything (2014 film)"],
            ["Green Book", "Green Book (film)"],
            ["En busca de la felicidad", "The Pursuit of Happyness"],
            ["La vida es bella", "Life Is Beautiful"],
            ["Yo antes de ti", "Me Before You (film)"],
            ["Milagros del cielo", "Miracles from Heaven"],
            ["El curioso caso de Benjamin Button", "The Curious Case of Benjamin Button (film)"],
            ["El discurso del rey", "The King's Speech"],
            ["Historia de un matrimonio", "Marriage Story"],
            ["El pianista", "The Pianist (2002 film)"]
        ],

        "Misterio": [
            ["Zodiac", "Zodiac (film)"],
            ["Glass Onion", "Glass Onion: A Knives Out Mystery"],
            ["Asesinato en el Orient Express", "Murder on the Orient Express (2017 film)"],
            ["La chica del tren", "The Girl on the Train (2016 film)"],
            ["Entre navajas y secretos", "Knives Out"],
            ["Perdida", "Gone Girl (film)"],
            ["El código Da Vinci", "The Da Vinci Code (film)"],
            ["Prisioneros", "Prisoners (2013 film)"],
            ["La isla siniestra", "Shutter Island"],
            ["Los ilusionistas", "Now You See Me"]
        ],

        "Terror": [
            ["El conjuro", "The Conjuring"],
            ["Annabelle", "Annabelle (film)"],
            ["La monja", "The Nun (2018 film)"],
            ["El aro", "The Ring (2002 film)"],
            ["La huérfana", "Orphan (2009 film)"],
            ["Hereditary", "Hereditary (film)"],
            ["Midsommar", "Midsommar"],
            ["El exorcista", "The Exorcist"],
            ["Siniestro", "Sinister (film)"],
            ["La noche del demonio", "Insidious (film)"]
        ]

    }

};


// ==========================================
// SELECCION DE GENEROS
// ==========================================

document.querySelectorAll(".genero").forEach(boton => {

    boton.addEventListener("click", function () {

        const genero = this.dataset.genero;

        if (generosSeleccionados.includes(genero)) {

            generosSeleccionados =
                generosSeleccionados.filter(item => item !== genero);

            this.classList.remove("seleccionado");

        } else {

            generosSeleccionados.push(genero);

            this.classList.add("seleccionado");

        }

        document.getElementById("mensaje").textContent = "";
        document.getElementById("mensaje").className = "";

    });

});


// ==========================================
// IDENTIFICAR RANGO DE EDAD
// ==========================================

function obtenerRangoEdad(edad) {

    if (edad >= 2 && edad <= 12) {
        return "infantil";
    }

    if (edad >= 13 && edad <= 17) {
        return "juvenil";
    }

    if (edad >= 18) {
        return "adulto";
    }

    return null;

}


// ==========================================
// MEZCLAR PELICULAS ALEATORIAMENTE
// ==========================================

function mezclarPeliculas(lista) {

    const copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];

    }

    return copia;

}


// ==========================================
// BUSCAR PELICULAS
// ==========================================

function buscarPeliculas() {

    const edad = Number(document.getElementById("edad").value);

    const mensaje = document.getElementById("mensaje");
    const resultados = document.getElementById("resultados");

    mensaje.textContent = "";
    mensaje.className = "";

    if (!Number.isInteger(edad) || edad < 2 || edad > 120) {

        mensaje.textContent =
            "Por favor, ingresa una edad válida entre 2 y 120 años.";

        mensaje.className = "error";
        return;

    }

    if (generosSeleccionados.length === 0) {

        mensaje.textContent =
            "Selecciona al menos un género de película.";

        mensaje.className = "error";
        return;

    }

    const rango = obtenerRangoEdad(edad);

    resultados.innerHTML = "";

    let peliculasEncontradas = 0;
    const peliculasMostradas = new Set();
    const generosSinResultados = [];

    generosSeleccionados.forEach(genero => {

        const peliculas = catalogo[rango][genero] || [];

        if (peliculas.length === 0) {

            generosSinResultados.push(genero);
            return;

        }

        // SE ELIGEN PELICULAS ALEATORIAMENTE
        const peliculasMezcladas = mezclarPeliculas(peliculas);

        // CANTIDAD ALEATORIA ENTRE 1 Y 10
        const cantidad = Math.floor(
            Math.random() * Math.min(10, peliculasMezcladas.length)
        ) + 1;

        const seleccionadas = peliculasMezcladas.slice(0, cantidad);

        // FILTRAR PELICULAS REPETIDAS
        const peliculasUnicas = seleccionadas.filter(pelicula => {

            const identificador = pelicula[0].toLowerCase();

            if (peliculasMostradas.has(identificador)) {
                return false;
            }

            peliculasMostradas.add(identificador);
            return true;

        });

        if (peliculasUnicas.length === 0) {
            return;
        }

        // TITULO DEL GENERO
        const tituloGenero = document.createElement("h3");

        tituloGenero.className = "titulo-genero";

        tituloGenero.textContent =
            "🎬 " + genero + " (" + peliculasUnicas.length + " películas)";

        resultados.appendChild(tituloGenero);

        // MOSTRAR PELICULAS
        peliculasUnicas.forEach(datos => {

            const pelicula = {
                nombre: datos[0],
                wiki: datos[1],
                genero: genero
            };

            resultados.appendChild(crearTarjeta(pelicula));

            peliculasEncontradas++;

        });

    });

    // MENSAJE FINAL
    if (generosSinResultados.length > 0) {

        mensaje.textContent =
            "No hay recomendaciones de " +
            generosSinResultados.join(", ") +
            " para el rango de edad seleccionado. Prueba con otro género.";

        mensaje.className = "error";

    } else {

        mensaje.textContent =
            "¡Encontramos " + peliculasEncontradas +
            " películas para ti! Puedes buscar nuevamente para obtener otras recomendaciones.";

    }

    if (peliculasEncontradas === 0) {

        resultados.innerHTML = `
            <div class="mensaje-inicial">
                <span>🎬</span>
                <p>No encontramos películas para los géneros seleccionados.</p>
            </div>
        `;

    }

}


// ==========================================
// CREAR TARJETA DE PELICULA
// ==========================================

function crearTarjeta(pelicula) {

    const tarjeta = document.createElement("article");

    tarjeta.className = "pelicula";

    const poster = document.createElement("div");

    poster.className = "poster-fallback";
    poster.textContent = "🎬 " + pelicula.nombre;

    const informacion = document.createElement("div");

    informacion.className = "pelicula-info";

    const titulo = document.createElement("h3");
    titulo.textContent = pelicula.nombre;

    const genero = document.createElement("p");
    genero.innerHTML = "<strong>Género:</strong> ";

    genero.appendChild(document.createTextNode(pelicula.genero));

    const etiqueta = document.createElement("span");
    etiqueta.className = "etiqueta";
    etiqueta.textContent = "Recomendación por edad";

    informacion.appendChild(titulo);
    informacion.appendChild(genero);
    informacion.appendChild(etiqueta);

    tarjeta.appendChild(poster);
    tarjeta.appendChild(informacion);

    cargarImagen(pelicula.wiki, poster);

    return tarjeta;

}


// ==========================================
// BUSCAR IMAGEN EN WIKIPEDIA
// ==========================================

async function cargarImagen(titulo, contenedor) {

    try {

        if (cacheImagenes[titulo]) {

            mostrarImagen(cacheImagenes[titulo], contenedor);
            return;

        }

        // PRIMER INTENTO: API DE RESUMEN
        const urlResumen =
            "https://en.wikipedia.org/api/rest_v1/page/summary/" +
            encodeURIComponent(titulo);

        let imagen = null;

        try {

            const respuesta = await fetch(urlResumen);

            if (respuesta.ok) {

                const datos = await respuesta.json();

                if (datos.thumbnail && datos.thumbnail.source) {
                    imagen = datos.thumbnail.source;
                }

            }

        } catch (error) {
            // SE INTENTARA CON LA SEGUNDA API
        }

        // SEGUNDO INTENTO: API DE IMAGENES
        if (!imagen) {

            const parametros = new URLSearchParams({

                action: "query",
                format: "json",
                prop: "pageimages",
                piprop: "thumbnail",
                pithumbsize: "600",
                titles: titulo,
                origin: "*"

            });

            const urlImagen =
                "https://en.wikipedia.org/w/api.php?" +
                parametros.toString();

            const respuesta = await fetch(urlImagen);

            if (!respuesta.ok) {
                throw new Error("No se encontró la imagen");
            }

            const datos = await respuesta.json();

            const paginas = datos.query.pages;

            const pagina = Object.values(paginas)[0];

            if (pagina && pagina.thumbnail) {
                imagen = pagina.thumbnail.source;
            }

        }

        if (!imagen) {
            throw new Error("La película no tiene imagen disponible");
        }

        cacheImagenes[titulo] = imagen;

        mostrarImagen(imagen, contenedor);

    } catch (error) {

        contenedor.className = "poster-fallback";
        contenedor.textContent = "🎬 Imagen no disponible";

    }

}


// ==========================================
// MOSTRAR IMAGEN
// ==========================================

function mostrarImagen(url, contenedor) {

    const imagen = document.createElement("img");

    imagen.className = "poster";
    imagen.alt = "Imagen de la película";
    imagen.src = url;
    imagen.loading = "lazy";

    imagen.onerror = function () {

        contenedor.className = "poster-fallback";
        contenedor.textContent = "🎬 Imagen no disponible";

    };

    contenedor.replaceWith(imagen);

}


// ==========================================
// LIMPIAR GENEROS Y RESULTADOS
// CONSERVAR LA EDAD
// ==========================================

function limpiarFormulario() {

    generosSeleccionados = [];

    document.querySelectorAll(".genero").forEach(boton => {

        boton.classList.remove("seleccionado");

    });

    document.getElementById("resultados").innerHTML = `
        <div class="mensaje-inicial">
            <span>🎥</span>
            <p>
                Selecciona tus géneros favoritos para descubrir nuevas películas.
            </p>
        </div>
    `;

    document.getElementById("mensaje").textContent = "";
    document.getElementById("mensaje").className = "";

}