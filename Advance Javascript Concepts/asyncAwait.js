const movies = [
    { title: `Jungle Book` },
    { title: `Spider Man` }
]

function getMovies(){
setTimeout(() => {
    movies.forEach((movie, index) => {
        console.log(movie.title)
    })
}, 1000);
}

function createMovies(movie){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        movies.push(movie);

        const error = false;

        if(!error){
            resolve();
        }
        else{
            reject('Error: Something went wrong!')
        }
    }, 1000);
})
}

async function init(){
await createMovies({ title: `Monaa `});

getMovies();  
}
init();