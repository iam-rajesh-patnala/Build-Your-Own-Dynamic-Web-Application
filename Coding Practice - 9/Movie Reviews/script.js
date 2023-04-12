let reviewsContainerEl = document.getElementById('reviewsContainer');
let titleInputEl = document.getElementById('titleInput');
let reviewTextareaEl = document.getElementById('reviewTextarea');


function onAddReview() { 
    let movieTitle = titleInputEl.value;
    let movieReview = reviewTextareaEl.value;

    if (movieTitle === "") {
        alert('please enter a movie title');
        return;
    }

    let movieTitleEl = document.createElement('h1');
    movieTitleEl.textContent = "Movie Title: " + movieTitle;
    movieTitleEl.classList.add('movie-title');
    reviewsContainerEl.appendChild(movieTitleEl);


    let movieReviewEl = document.createElement('p');
    movieReviewEl.textContent = "Review: " + movieReview;
    reviewsContainerEl.appendChild(movieReviewEl);

    let horizontalLineEl = document.createElement('hr');
    reviewsContainerEl.appendChild(horizontalLineEl);

    titleInputEl.value = "";
    reviewTextareaEl.value = "";
}
