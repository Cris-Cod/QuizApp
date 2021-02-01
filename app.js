const quizData = [{
        imagen: src = './img/pregunta-1.jpg',
        question: '¿Cómo se llamaban originalmente los Androides A17 y A18?',
        a: 'Lapis y Lazuli',
        b: 'Castor y Pollux',
        c: 'Boonnie y Clyde',
        d: 'Richard y Mckenzie',
        correct: 'a'
    }, {
        imagen: src = './img/pregunta-2.jpg',
        question: '¿cómo se llama la madre de Goku?',
        a: 'Apple',
        b: 'Nuts',
        c: 'Gine',
        d: 'Selypar',
        correct: 'c'
    }, {
        imagen: src = './img/pregunta-3.png',
        question: '¿Cómo se llama el Dios de la destrucción y el Ángel del Universo 6 en Dragon Ball Super?',
        a: 'Champa y Vados',
        b: 'Belmod y Marcalita',
        c: 'Beerus y Whis',
        d: 'Piccolo y Kami Sama',
        correct: 'a'
    }, {
        imagen: src = './img/pregunta-4.jpg',
        question: 'Quién fue el creador de Dragon Ball?',
        a: 'Hayao Miyazaki',
        b: 'Takeshi Kitano',
        c: 'Akira Toriyama',
        d: 'Takay Hiroshi',
        correct: 'c'
    }, {
        imagen: src = './img/pregunta-5.jpg',
        question: 'Como se llama la transformación de Goku y Vegeta con los Pottara?',
        a: 'Gogeta',
        b: 'Gotrunks',
        c: 'Vegetto',
        d: 'Gothenks',
        correct: 'c'
    }, {
        imagen: src = './img/pregunta-6.jpg',
        question: 'Como se llama el ejército más temido de todo Dragon Ball?',
        a: 'Ejército Red Rackon',
        b: 'Ejército Red Ribbon',
        c: 'Ejército Red Red',
        d: 'Ejército Rakoon Red',
        correct: 'b'
    },
    {
        imagen: src = './img/pregunta-7.jpg',
        question: '¿Qué comen los namekianos?',
        a: 'Lechugas Azuladas',
        b: 'Ranas con antenadas',
        c: 'Una papilla especial',
        d: 'Nada. Los namekianos solo toman agua',
        correct: 'd'
    }, {
        imagen: src = './img/pregunta-8.jpg',
        question: '¿Cuál es el nivel de poder de Goku, sin usar el Kaio Ken,  durante su enfrentamiento con Nappa?',
        a: 'Mas de 8000 unidades',
        b: 'Mas de 9000 unidades',
        c: 'Nivel 1 de poder saiyajin',
        d: '300 Kilojulios',
        correct: 'a'
    }
]




const quiz = document.querySelector('#quiz');
const answersLs = document.querySelectorAll('.answer');
const questionTitle = document.querySelector('#question-text');
const imagen = document.querySelector('#imagen');
const a_text = document.querySelector('#a_label');
const b_text = document.querySelector('#b_label');
const c_text = document.querySelector('#c_label');
const d_text = document.querySelector('#d_label');
const boton = document.querySelector('#boton');

let currentQuiz = 0;
let score = 0;


boton.addEventListener('click', agregar);



loadQuestion();

function loadQuestion() {

    deselectAnswer();

    const currentData = quizData[currentQuiz];

    questionTitle.innerHTML = currentData.question;
    imagen.innerHTML = `<img src="${currentData.imagen}">`
    a_text.innerHTML = currentData.a;
    b_text.innerHTML = currentData.b;
    c_text.innerHTML = currentData.c;
    d_text.innerHTML = currentData.d;




}

function getSelected() {

    let answer = undefined;

    answersLs.forEach(answersL => {
        if (answersL.checked) {
            answer = answersL.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answersLs.forEach(answersL => {
        answersL.checked = false;
    });
}

function agregar() {

    const answer = getSelected();



    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuestion();
        } else {
            quiz.innerHTML = `<h3>Tu respuestas correctas son ${score}/${quizData.length}</h3>
            <button onclick = "location.reload()">Recargar</button>`
        }

    }



}