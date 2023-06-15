// const data = require('./data');
const data = [
    {
        question: 'What is the height of Burj',
        options: [
            '828m', '231m', '782m', '926m'
        ],
        key: '828m',
        isMulti: true,
    },
    {
        question: 'What is the diameter of Burj',
        options: [
            '828m', '231m', '782m', '926m'
        ],
        key: '828m',
        isMulti: false,
    },
    {
        question: 'What is the height of Burj',
        options: [
            '828m', '231m', '782m', '926m'
        ],
        key: '828m',
        isMulti: true,
    },
    {
        question: 'What is the diameter of Burj',
        options: [
            '828m', '231m', '782m', '926m'
        ],
        key: '828m',
        isMulti: false,
    },
    {
        question: 'What is the height of Burj',
        options: [
            '828m', '231m', '782m', '926m'
        ],
        key: '828m',
        isMulti: true,
    },
    {
        question: 'What is the diameter of Burj',
        options: [
            '828m', '231m', '782m', '926m'
        ],
        key: '828m',
        isMulti: false,
    }
];

(document.onload = () => {
    addOptions();
})()

let currentQuestionNumber = 0;

function addOptions(){
    const bodyNode = document.querySelector('main');
    console.log(bodyNode)
    const questionHeading = bodyNode.querySelector('#questionHeading');
    const question = bodyNode.querySelector('#question');
    const options = bodyNode.querySelector('#options');
    let input = document.querySelector('input')
    
    
    console.log(input)

    questionHeading.innerText = 'Question 1';
    question.innerText = data[0].question;
    
    for (let i = 0; i < options.children.length; i++) {
        const element = options.children[i];
        element.querySelector('label').innerText = data[0].options[i]
    }
}


const next = document.addEventListener('click', nextQuestion)

function nextQuestion(){

}

function prevQuestion(){
    console.log('prev')
}
