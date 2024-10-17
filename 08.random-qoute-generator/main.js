const quoteWrapper = document.querySelector(".quote-wrapper");
const refreshBtn = document.querySelector(".refresh-btn");
const loader = document.querySelector(".loader");


function showLoader() {
    loader.classList.add("show");
    quoteWrapper.classList.add("hide");
}

function removeLoader() {
    loader.classList.remove("show");
    quoteWrapper.classList.remove("hide");
}


function fetchRandomQuote() {

    showLoader();

    fetch("http://api.quotable.io/quotes/random")
        .then(response => response.json())
        .then(result => {
            if (result) {
                removeLoader();
                displayQuote(result[0])
            }
        }
        )
        .catch(error => console.log(error))
}


function displayQuote(getQuote) {
    // const quote = { ...getQuote }
    console.log(getQuote)
    quoteWrapper.innerHTML = `
        <div class="quote-item">
            <p> ${getQuote.author}</p>
            <p>${getQuote.content}</p>
            <p>${getQuote.dateAdded}</p>
            <div>
            ${getQuote.tags.map(tag => `
                <p class="tag">${tag}</p>`).join('')
        }
            <div>
        </div>
    `
}

refreshBtn.addEventListener("click", fetchRandomQuote)


fetchRandomQuote();