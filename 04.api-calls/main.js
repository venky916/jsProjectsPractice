const postListContainer = document.querySelector(".posts-list-container")

// api call using xhr
function fetchUsingXHR() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            // console.log(xhr)
            displayResults(xhr.response)
        } else {
            console.log('Some Error Ocurred')
        }
    }
}

function fetchUsingFetchMethod() {
    const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET", 
    })

    fetchRequest
        // .then(response =>console.log(response))
        .then(response => response.json())
        .then(result => displayResults(result))
        .catch((e)=>console.log(e))
}

async function fetchUsingAsyncAwait() {
    const apiResponse = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
    })
    const result = await apiResponse.json();
    displayResults(result)
}

function helperMethod(method, url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response)
            } else {
                reject(xhr.response)
            }
        }
    })
    return promise;
}

async function fetchUsingXHRandAsyncAwait() {
    const response = await helperMethod("GET", "https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    
}

function displayResults(posts) {
    postListContainer.innerHTML = posts.map((postItem) => `
        <div class="post-item">
            <h3>${postItem.title}</h3>
            <p>${postItem.body}</p>
        </div>
    `).join("")
}

// fetchUsingXHR();
// fetchUsingFetchMethod();
// fetchUsingAsyncAwait();

fetchUsingXHRandAsyncAwait();
