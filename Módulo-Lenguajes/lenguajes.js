console.log('/*** 1. Array operations ***/');
console.log('/*** Head ***/');

const teams = ['Real Madrid', 'Málaga', 'Liverpool', 'City', 'Inter'];

const head = (array) => {

    const [first] = array;

    console.log(first)
}

head(teams);

console.log('/*** Tail ***/');


const tail = (arr) => {
    const [first, ...rest] = arr;

    console.log(rest);
}

tail(teams);

console.log('/*** Init ***/');

const init = (arr) => {
    const resultado = arr.slice(0,-1);
    console.log(resultado);
}

init(teams);

console.log('/*** Last ***/');

const last = (arr) => {
    const resultado = arr.pop();

    console.log(resultado);
}

last(teams);

console.log('/*** 2. Concat ***/');

const phrase1 = ["hey", "yo"];
const phrase2 = ["lets", "go"];
const phrase3 =["where", "you", "wanna go"];

const concat = (a, b) => {
    const resultado = a.concat(b);
    console.log(resultado);
}

const concatExtra = (...args) => {
    let resultado = "";

    args.forEach(function (element) {
        resultado += element.join(' ') + ' ';
    })

    console.log(resultado);
}

concat(phrase1, phrase2);
concatExtra(phrase1, phrase2, phrase3);

console.log('/*** 3. Clone merge ***/');

console.log('/*** Clone ***/');

const persona = {
    nombre: 'Adrián', 
    apellido: 'Muñoz',
    dni: '75856952L',
}

function clone(source) {
    const {...copy} = source;

    console.log(copy);
}

clone(persona);

console.log('/*** Merge ***/');

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(a, b) {
    const copy = Object.assign(b, a);

    console.log(copy);
}

merge(a, b);

console.log('/*** 4. Read books ***/');

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  

function isBookRead(books, titleToSearch) {
 
    for(let i = 0; i < books.length;i++) {

        if(books[i].title === titleToSearch) {
            return  books[i].isRead;
        }
    }

    return false;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

console.log('/*** 5. Slot machine ***/');

class SlothMachine {
    constructor() {
        this.contador = 1;
    }
    
    play() {
        
        let booleans = [];
        do {
            booleans.push(Math.random() < 0.5)
        }while(booleans.length < 3)
        
        const gana = booleans.every(tiro => tiro === true);

        if(gana === true) {
            console.log("Congratulations you won " + this.contador + " coins!!");
            this.contador = 0;
        }else {
            console.log("Good luck next time!!");
        }
        
        this.contador++;    
    }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"