const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent =  'From Javascript';



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const location = search.value;

    messageOne.textContent =  'Loading...';
    messageTwo.textContent = '';

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error;
            } else {
                console.log(data.address);
                console.log(data.weather);
                // const wea = res.render(data.weather);
                // const loc = res.render(data.address);

                messageOne.textContent = data.address;
                messageTwo.textContent = data.weather;
            }
        })
    })
});