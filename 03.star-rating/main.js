const stars = document.querySelectorAll(".fa-star-o");
const selectedRatedValueText = document.querySelector(".selected-rated-value");

let currentTotalSelectedStars = -1

stars.forEach((starItem, index) => {
    starItem.dataset.rating = index + 1;
    starItem.addEventListener("mouseover",handleMouseOver)
    starItem.addEventListener("click",handleClick)
    starItem.addEventListener('mouseleave',handleMouseLeave)
})

function handleMouseOver(event) {
    console.log(event.target.dataset)
    const currentRatingValue = event.target.dataset.rating;
    if (!currentRatingValue) return
    handleUpdateRatingState(currentRatingValue)
}

function handleUpdateRatingState(getCurrentRatingValue) {
    for (let i = 0; i < 5; i++){
        if (i < getCurrentRatingValue) {
            stars[i].classList.replace("fa-star-o","fa-star")
        } else {
            stars[i].classList.replace("fa-star", "fa-star-o") 
        }
    }
}

function handleClick(event) {
    const currentRatingValue = event.target.dataset.rating;
    currentTotalSelectedStars = currentRatingValue;
    handleUpdateRatingState(currentRatingValue);
    selectedRatedValueText.textContent=currentTotalSelectedStars
}

function handleMouseLeave(event) {
    handleUpdateRatingState(currentTotalSelectedStars);
}

