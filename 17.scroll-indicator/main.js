const postListContainer = document.querySelector(".posts-container");
const progressBar = document.querySelector(".progress-bar");

function fetchListOfPosts() {
    fetch("https://dummyjson.com/posts", {
        method:"GET"
    })
    .then(response => response.json())
        .then(result => displayPostList(result.posts))
    
}

function displayPostList(getPosts) {
    // console.log(getPosts)
    getPosts.forEach(postItem => {
        const postItemWrapper = document.createElement("div");
        postItemWrapper.classList.add("post-item-wrapper");

        const postTitle = document.createElement("label");
        postTitle.textContent = postItem.title;

        const postBody = document.createElement("p");
        postBody.textContent = postItem.body;

        const postTags = document.createElement("div");

        // postTags.innerHTML = postItem.tags.map(tag => `
        //     <p>${tag}</p>
        //     `).join(" ")
        
        postTags.textContent = postItem.tags.map(tag => tag).join(" ")
        postTags.classList.add('post-tags')

        postItemWrapper.appendChild(postTitle);
        postItemWrapper.appendChild(postBody);
        postItemWrapper.appendChild(postTags);
        
        postListContainer.appendChild(postItemWrapper);
    })
}


fetchListOfPosts()

window.onscroll = function () {
    handleScroll();
}

function handleScroll() {
    console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight)
    let getScrollFromTop = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let percentageScrolled = (getScrollFromTop / height) * 100;
    progressBar.style.width = percentageScrolled+ "%"
}