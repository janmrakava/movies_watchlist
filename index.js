import {renderMovieHtml} from '/utils.js'



const movieDiv = document.getElementById('movies-results')

const watchList = JSON.parse(localStorage.getItem("watchList")) || []



//apikey aec6dad1
async function getMoviesByName(){  
    let html = []   
    const search = document.getElementById('search-movie').value
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=aec6dad1`)
    const data = await response.json()
    let movies = data.Search
    let movieIDs = []
    for (let movie of movies){ 
        movieIDs.push(movie.imdbID)
    }
    async function getMoviesById(){
            let html = ''
            for (let id of movieIDs){            
                const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=aec6dad1`)
                const data = await response.json() 
                
                html += renderMovieHtml(data, true)              
            }
            movieDiv.innerHTML = html
            let addWatchArray = Array.from(document.getElementsByClassName("addWatch"))
            for (let e of addWatchArray) {
                e.addEventListener("click", function(){
                    const index = watchList.indexOf(this.id)
                    if (index > -1) {
                        watchList.splice(index,1)
                        this.src = "img/plus.png"
                        this.classList.add("addWatch")
                        this.classList.remove("minusWatch")
                    } else {
                        watchList.push(this.id)
                        this.src = "img/minus.png"
                        this.classList.add("minusWatch")
                        this.classList.remove("addWatch")
                    }
                    localStorage.setItem("watchList", JSON.stringify(watchList))
                })
                
            }
            
        }
          
       
    
 getMoviesById()
}



document.getElementById('search').addEventListener('submit', (e) => {

    e.preventDefault()
    getMoviesByName()
})