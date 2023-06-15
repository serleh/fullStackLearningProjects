// const data = require('./data');
const data = [
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
            '7m', '8m', '9m', '10m'
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

(document.onload = () => {
    main();
})()

let currentQuestionNumber = 0;

let answers = {
}

function main() {
    const bodyNode = document.querySelector('main');
    const questionHeading = bodyNode.querySelector('#questionHeading');
    const question = bodyNode.querySelector('#question');
    const options = bodyNode.querySelector('#options');
    const nextButton = bodyNode.querySelector('#next');
    const prevButton = bodyNode.querySelector('#prev');
    const subButton = bodyNode.querySelector('#sub');

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
            ans.length > 0 && (answers[questionIndex] = ans);
            
        }
        else{
            //radio
            const inputValue = document.querySelector('input[name="options"]:checked')?.value;
            inputValue && (answers[questionIndex] = inputValue);
        }
        console.log(answers)
    }

    function setData(){
        const index = questionIndex;
        questionHeading.innerText = `Question ${index + 1}`;
        question.innerText = data[index].question;
        
        for (let i = 0; i < options.children.length; i++) {
            const element = options.children[i];
            element.querySelector('label').innerText = data[index].options[i];
            const input = element.querySelector('input');
            input.type = data[index].isMulti ? 'checkbox' : 'radio';
            input.value = data[index].options[i];
        }

        // =========== Task 3 =========
        // when you have a record in answers then set that answers to the input fields
        // check for answers and set the values
    }

    function submitResults(){
        // ============ compare ===========
        //checking the answers and compare with keys
        // snippet for comparing ⁉ 
        // JSON.stringify(x) === JSON.stringify(y)

        // ========== Show values in dom ============
        // After getting results
        
        // 1. manipulate result dom to set innerText to score
        // 2. if score is above 50% then make text to green
        // 3. add a transition to results
        // 4. show this results only after clicking submit
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