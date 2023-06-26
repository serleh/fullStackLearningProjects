// const data = require('./data');
const data = [
    {
        question: 'What is the height of Burj',
        options: [
            '828m', '231m', '782m', '926m'
        ],
        key: ['828m', '231m'],
        isMulti: true,
    },
    {
        question: 'What is the diameter of Burj',
        options: [
            '7m', '8m', '9m', '10m'
        ],
        key: '7m',
        isMulti: false,
    },
    {
        question: 'What is the height of Burj',
        options: [
            '828m', '231m', '782m', '926m'
        ],
        key: ['828m'],
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
        key: ['828m'],
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

let currentQuestionNumber = 0;
let answers = []; 

(document.onload = () => {
    main();
})()


function main() {
    const bodyNode = document.querySelector('main');
    const questionHeading = bodyNode.querySelector('#questionHeading');
    const question = bodyNode.querySelector('#question');
    const options = bodyNode.querySelector('#options');
    const nextButton = bodyNode.querySelector('#next');
    const prevButton = bodyNode.querySelector('#prev');
    const subButton = bodyNode.querySelector('#sub');
    const resultsNode = bodyNode.querySelector('#results');

    let questionIndex = 0;

    function nextQuestion() {
        saveAnswer();
        resetFields();
        questionIndex++;
        setData();
        questionIndex === data.length - 1 && (nextButton.setAttribute('disabled', true));
        prevButton.removeAttribute('disabled')
    }

    function prevQuestion() {
        saveAnswer();
        resetFields();
        questionIndex--;
        setData();
        questionIndex === 0 && (prevButton.setAttribute('disabled', true));
        nextButton.removeAttribute('disabled')
    }

    function saveAnswer(){
        const currentInputType = data[questionIndex].isMulti;
        if(currentInputType){
            //checkbox
            const inputs = options.querySelectorAll('input');
            const ans = []
            inputs.forEach((item) => {
                item.checked ? ans.push(item.value) : null
            })
            ans.length > 0 && (answers[questionIndex + ''] = ans);
            
        }
        else{
            //radio
            const inputValue = document.querySelector('input[name="options"]:checked')?.value;
            inputValue && (answers[questionIndex] = inputValue);
        }
    }

    function setData(){
        const index = questionIndex;
        questionHeading.innerText = `Question ${index + 1}`;
        question.innerText = data[index].question;
        
        const selectedAnswer = answers?.[index];
        

        for (let i = 0; i < options.children.length; i++) {

            const element = options.children[i];
            element.querySelector('label').innerText = data[index].options[i];
            const input = element.querySelector('input');
            input.type = data[index].isMulti ? 'checkbox' : 'radio';
            input.value = data[index].options[i];

            // pre select the selected answers
            if (selectedAnswer) {
                if (typeof selectedAnswer === 'string') {
                    (data[index].options[i] === selectedAnswer) && (input.checked = true)
                }
                else{
                    selectedAnswer.forEach((val) => {
                        (data[index].options[i] === val) && (input.checked = true)
                    })
                }
            }
        }
    }

    function submitResults(){

        const score = data.reduce((acc, curr, i) => {
            (JSON.stringify(answers?.[i]) === JSON.stringify(curr.key)) && (acc = acc + 1)
            return acc;
        }, 0);

        console.log(score);
        
        // 1. manipulate result dom to set innerText to score
        // 2. if score is above 50% then make text to green
        // 3. add a transition to results
        // 4. show this results only after clicking submit
        const passed = score >= data.length / 2;
        resultsNode.querySelector('span').innerHTML = `
        ${passed ? 'Hurray!!! you passed in exam your score is ' : 'Better luck next time'}
        your score is ${score}
        `;
        resultsNode.setAttribute('class', `show ${passed ? 'success ' : 'error '}`)
        // resultsNode.querySelector('span').setAttribute('success')
    }

    function resetFields(){
        options.querySelectorAll('input').forEach((item) => {
            item.checked = false;
        })
    }

    nextButton.addEventListener('click', nextQuestion)
    prevButton.addEventListener('click', prevQuestion)
    subButton.addEventListener('click', submitResults)

    setData();
    prevButton.setAttribute('disabled', true);
}