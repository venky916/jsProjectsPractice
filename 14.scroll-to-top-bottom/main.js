const usersList = document.querySelector(".users-list");
const loader = document.querySelector(".loader");
const scrollToTopButton = document.querySelector(".scroll-to-top-button");
const scrollToBottomButton = document.querySelector(".scroll-to-bottom-button");
function showLoader(params) {
    loader.classList.add("show-loader");
    usersList.classList.add("hide-users-list")
}

function removeLoader(params) {
    loader.classList.remove("show-loader");
    usersList.classList.remove("hide-users-list");
}

function displayUsersList(getUsers) {
    // console.log(getUsers);
    usersList.innerHTML = getUsers.map(user => `
        <li>
            <p>${user.firstName} - ${user.lastName}</p>
        </li>
        `).join(" ")

}


async function fetchUsersList() {
    showLoader();

    const response = await fetch("https://dummyjson.com/users?limit=100", {
        method: "GET"
    })

    const result = await response.json();
    // console.log(result)

    if (result && result.users) {
        displayUsersList(result.users);
    }


    removeLoader();
}


fetchUsersList();

scrollToTopButton.addEventListener("click", () => {
    // window.scrollTo(0, 0);

    window.scrollTo({
        top: 0,
        behavior :"smooth"
    })
})

scrollToBottomButton.addEventListener("click", () => {
    // console.log(document.body.scrollHeight)
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior : "smooth",
    })
})