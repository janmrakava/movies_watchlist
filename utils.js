function renderMovieHtml(movie, condition){ 
    let imgPath = ""
    let imgClass = ""
    if (condition){
        imgPath = 'img/plus.png'
        imgClass = 'addWatch'
    } else{
        imgPath = 'img/minus.png'
        imgClass = 'minusWatch'
    }
     
    return `
    <div class='movie'>
        <img class='poster' src=${movie.Poster}/>
        <div class='title'>
            <div class='title-wrapper'>
                <h3 class='title'>${movie.Title}</h3>
                <p id="rating">⭐ ${movie.Ratings.length ? movie.Ratings[0].Value.slice(0,-3) 
                : "N/A"}</p> 
        </div>
        <div class='meta'>
            <p class='runtime'>${movie.Runtime}</p>
            <p class='genre'>${movie.Genre}</p>
            <div class="watchlist">
                <img src="${imgPath}" class="${imgClass}" id="${movie.imdbID}">
                <p id="watchlist">Watchlist</p> 
            </div>
        </div>
        <div class='description'>
            <p>${movie.Plot}</p>
        </div>
    </div> 
    </div>   
    `

}


export {renderMovieHtml}



// {Title: 'The Wolf of Wall Street', 
// Year: '2013', 
// Rated: 'R', 
// Released: '25 Dec 2013', 
// Runtime: '180 min', …}
// Actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie"
// Awards: "Nominated for 5 Oscars. 37 wins & 179 nominations total"
// BoxOffice: "$116,900,694"
// Country: "United States"
// DVD: "25 Mar 2014"
// Director: "Martin Scorsese"
// Genre: "Biography, Comedy, Crime"
// Language: "English, French"
// Metascore: "75"
// Plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government."
// Poster: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
// Production: "N/A"
// Rated: "R"
// Ratings: (3) [{…}, {…}, {…}]
// Released: "25 Dec 2013"
// Response: "True"
// Runtime: "180 min"
// Title: "The Wolf of Wall Street"
// Type: "movie"
// Website: "N/A"
// Writer: "Terence Winter, Jordan Belfort"
// Year: "2013"
// imdbID: "tt0993846"
// imdbRating: "8.2"
// imdbVotes: "1,373,073"
// [[Prototype]]: Object