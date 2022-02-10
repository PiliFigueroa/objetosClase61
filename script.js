// - Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, `true` si puede comprarlos a todos o `false` si no

// ```javascript
// const products = { cookies: 60, chocolate: 110, soda: 120 };
// const money = 300;
// ```

const canBuyAllProduct = (money, products) => {
    let suma = 0
    for (let prop in products) {
        suma = suma += products[prop]
    }
    if (suma <= money) {
        return true
    } else {
        return false
    }
}

// console.log(canBuyAllProduct(money, products))

// - Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor `true` si puede comprarlo o `false` sino

// calcular el vuelto

// ```javascript
// const products = { cookies: 60, chocolate: 110, soda: 120 };
// const money = 115;
// buyProducts(money, products); // returns { cookies: true, chocolate: true, soda: false}
// ```

const buyProducts = (money, products) => {
    let puedeComprar = {}
    for (let prop in products) {
        puedeComprar[prop] = products[prop] <= money
    }
    return puedeComprar
}

// console.log(buyProducts(money, products))

// - Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto sin las propiedades especificadas en el array

// ```javascript
// const data = { a: 1, b: 2, c: 3 };
// const props = ["c", "b"];
// removeProperties(data, props); // returns  {a: 1,b: 2}
// ```

const removeProperties = (data, props) => {
    for (let item in data) {
        for (let i = 0; i < props.length; i++) {
            if (item === props[i]) {
                delete data[item]
            }
        }
    }
    return data
}

// console.log(removeProperties(data, props))

// - Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida

// ```javascript
const score = { EASY: 10, MEDIUM: 50, HARD: 100 };
const challenges = { EASY: 3, MEDIUM: 4, HARD: 2 };
// getXP(challenges, score); // returns 430 (3 * 10 + 4 * 50 + 2 * 100)
// ```

// const { EASY, MEDIUM, HARD } = score
// console.log("medium: ", MEDIUM)
// console.log("easy: ", EASY)
// console.log("hard: ", HARD)

const getXP = (challenges, score) => {
    let suma = 0
    for (let prop in challenges) {
        // console.log("score: ", score[prop])
        // console.log("challenges: ", challenges[prop])
        suma += score[prop] * challenges[prop]
    }
    return suma
}

// console.log(getXP(challenges, score))

const ganadoras = [
    {
      nombre: 'Bebe Zahara Benet',
      temporada: '1',
      foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
    },
    {
      nombre: 'Tyra Sanchez',
      temporada: '2',
      foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
    },
    { nombre: 'Raja',
      temporada: '3',
      foto: 'http://www.nokeynoshade.party/images/raja.jpg'
    },
    {
      nombre: 'Sharon Needles',
      temporada: '4',
      foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
    },
    {
      nombre: 'Jinkx Monsoon',
      temporada: '5',
      foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
    },
    {
      nombre: 'Bianca Del Rio',
      temporada: '6',
      foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
    }
  ];

// EL FOR IN DE UN ARRAY DE OBJETOS ME DEVUELVE LA POSICION DE C/U
// for (let objeto in ganadoras) {
//     console.log(objeto)
// }

const mostrarGanadoras = (ganadoras) => {
    // for (let objeto of ganadoras) {
    //     console.log(`${objeto.nombre} gano la temporada ${objeto.temporada}`)
    // }
    ganadoras.forEach(objeto => {
        console.log(`${objeto.nombre} gano la temporada ${objeto.temporada}`)
    })
}

// Bebe Zahara Benet ganó la temporada 1
// mostrarGanadoras(ganadoras)

const nevermind = [
    { id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
    { id: 2, nombre: "In Bloom", duracion: 255 },
    { id: 3, nombre: "Come As You Are", duracion: 219 },
    { id: 4, nombre: "Breed", duracion: 184 },
    { id: 5, nombre: "Lithium", duracion: 257 }
  ];
  
const calcularDuracionTotal = () => {
    let suma = 0
    for (let objeto of nevermind) {
        suma += objeto.duracion
    }
    return suma
}

const calcularPromedioPorCancion = () => calcularDuracionTotal() / nevermind.length

///// RESULTADO
//console.log(calcularDuracionTotal()); // 1217
//console.log(calcularPromedioPorCancion()); // 243.4

const bandas = [
    { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
    { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
    { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
    { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
    { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
  ];
  

const estaActiva = () => {
    for (let objeto of bandas) {
        if (objeto.activa) {
            console.log(`${objeto.nombre} esta activa desde el año ${objeto.fundacion}`)
        } else {
            console.log(`${objeto.nombre} no esta activa`)
        }
    }
}

// estaActiva()
///// RESULTADO
// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
// Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990

const personajes = [
    {
        id: 1,
        name:"Rick Sanchez",
        status:"Alive",
        species:"Human",
        gender:"Male",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
        id:2,
        name:"Morty Smith",
        status:"Alive",
        species:"Human",
        gender:"Male",
        image:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    }
]

const rick = {
    id: 1,
    name:"Rick Sanchez",
    status:"Alive",
    species:"Human",
    gender:"Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    origin: {
        name: "Planet Earth C-127",
        url: "asdasdasdas.com"
    }
}

const getId = (id) => document.getElementById(id)

// const { image, name, status, species, gender, origin } = rick

// getId("imagen").src = image
// getId("nombre").innerText = name
// getId("dato-1").innerText = status
// getId("dato-2").innerText = species
// getId("dato-3").innerText = gender
// getId("dato-4").innerText = origin.name

// console.log(getId("card"))

personajes.forEach(personaje => {
    const { name, status, species, gender, image } = personaje
    getId("card").innerHTML += `
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="${image}" alt="Imagen de ${name}" id="imagen">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4" id="nombre">${name}</p>
            </div>
        </div>
    
        <div class="content">
            <strong>Status: </strong>
            <p id="dato-1">${status}</p>
            <strong>Species: </strong>
            <p id="dato-2">${species}</p>
            <strong>Genero: </strong>
            <p id="dato-3">${gender}</p>
            </div>
        </div>
    `
})