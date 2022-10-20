import { renderMovieHtml } from './utils.js'
// OMDB key: bbb126ea
// OMDb API: https://www.omdbapi.com/?i=tt3896198&apikey=bbb126ea

const watchEl = document.getElementById("watch")
const watchList = JSON.parse(localStorage.getItem("watchList")) || []

if (watchList.length === 0){
    watchEl.classList.add("inital")
    watchEl.classList.remove("watch")
    watchEl.innerHTML = `
        <h2 class="inital">Looking a little empty...</h2>
        <a class="inital" href="index.html">Let's add some movies!</a>`
            
} else {
    watchEl.classList.add("watch")
    watchEl.classList.remove("inital")
    
    // FETCH MOVIE DATA WITH ID
    async function renderWatchList(movieIDs){
        let watchHtml = "" 
        // FETCH MOVIE DATA BY INDEX
        for (let i of movieIDs) {
            const res = await fetch(`https://www.omdbapi.com/?i=${i}&apikey=aec6dad1`)
            const idata = await res.json()
            watchHtml += renderMovieHtml(idata, false) // false sets minus icon
        }
        watchEl.innerHTML =  watchHtml  
        
        //MINUS WATCHLIST EVENT HANDLER
        let minusWatchArray = Array.from(document.getElementsByClassName("minusWatch"))
        for (let e of minusWatchArray) {
            e.addEventListener("click", function() {
                const index = watchList.indexOf(this.id)
                const movie = this.parentElement.parentElement.parentElement.parentElement
                watchList.splice(index, 1)
                localStorage.setItem("watchList", JSON.stringify(watchList))
                movie.nextElementSibling.remove() // the ensuing hr element
                movie.remove()
            })
        }
    }
    renderWatchList(watchList)
}


// ==========================================
//               REFRENCES
// ==========================================

// REMOVE ITEM FROM ARRAY BY INDEX
// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array

// EMPTY JAVASCRIPT OBJECT
//https://bobbyhadz.com/blog/javascript-check-if-object-is-empty#:~:text=Pass%20the%20object%20to%20the,then%20the%20object%20is%20empty