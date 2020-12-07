$(document).ready(function() {

    const jokeEl = $('#joke');
    const jokeBtn = $('#jokeBtn');
    generateJoke();
    jokeBtn.on('click', () => {
    
        generateJoke();
    })
    
    function generateJoke() {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        }
        fetch(`https://icanhazdadjoke.com/`, config)
        .then(res => res.json())
        .then((data)=> {
            jokeEl.html(data.joke);
        })
    }
    });