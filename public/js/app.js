console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const firstPara = document.querySelector('#para1');
const secondPara = document.querySelector('#para2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;

    firstPara.textContent = 'Loading...'
    secondPara.textContent = '...'

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                secondPara.textContent = `${data.error}`;
            } else {
                firstPara.textContent = `${data.location}`;
                secondPara.textContent = `${data.forecast}`;
            }
        })
    })
})

