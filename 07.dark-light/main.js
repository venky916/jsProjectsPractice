// const toggleButton = document.getElementById('theme-toggle');
// const body = document.body;

// toggleButton.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
// });


const changeThemeBtn = document.querySelector(".change-theme-btn");
const body = document.querySelector("body");


// changeThemeBtn.addEventListener("click", () => {
//     if (body.classList.contains("light")) {
//         body.classList.remove('light');
//         body.classList.add("dark")
//     } else {
//         body.classList.remove('dark');
//         body.classList.add("light")
//     }

// })


changeThemeBtn.addEventListener("click", () => {

    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', null)
    } else {
        body.setAttribute('data-theme', "dark");
    }
    // changeThemeBtn.setAttribute('data-theme', "dark")
})