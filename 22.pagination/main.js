const paginationListWrapper = document.querySelector(".pagination-list");
const paginationNumbersContainer = document.querySelector(".pagination-numbers");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function createDummyData() {
    for (let i = 1; i <= 100; i++) {
        const li = document.createElement("li");
        li.textContent = `Card ${i}`;
        paginationListWrapper.appendChild(li);
    }
}

createDummyData();

const extractAllListItems = document.querySelectorAll(".pagination-list li"); // Ensuring only li inside .pagination-list
let paginationLimit = 10;
let pageCount = Math.ceil(extractAllListItems.length / paginationLimit);
// console.log(pageCount);

function createPaginationNumbers() {
    for (let i = 1; i <= pageCount; i++) {
        const pageNumber = document.createElement("button");
        pageNumber.classList.add("pagination-number"); // Correct class
        pageNumber.textContent = i;
        pageNumber.setAttribute("page-index", i);

        paginationNumbersContainer.appendChild(pageNumber); // Append to container
    }
}

let currentPage = 1;

function handleActiveCurrentPageNumber() {
    const paginationNumberButtons = document.querySelectorAll(".pagination-number"); // Use correct class selector
    paginationNumberButtons.forEach(button => {
        button.classList.remove("active-state");
        const getCurrentPageIndex = Number(button.getAttribute("page-index"));
        if (getCurrentPageIndex === currentPage) {
            button.classList.add("active-state");
        }
    });
}

function handlePaginationButtonStatus() {
    if (currentPage === 1) {
        prevBtn.classList.add("disabled");
        prevBtn.setAttribute("disabled", true);
    } else {
        prevBtn.classList.remove("disabled");
        prevBtn.removeAttribute("disabled");
    }

    if (currentPage === pageCount) {
        nextBtn.classList.add("disabled");
        nextBtn.setAttribute("disabled", true);
    } else {
        nextBtn.classList.remove("disabled");
        nextBtn.removeAttribute("disabled");
    }
}

function handleCurrentPage(getCurrentPageNumber) {
    currentPage = getCurrentPageNumber;

    handleActiveCurrentPageNumber();
    handlePaginationButtonStatus();

    const activeCardsFrom = (getCurrentPageNumber - 1) * paginationLimit;
    const activeCardsTo = getCurrentPageNumber * paginationLimit;

    extractAllListItems.forEach((listItem, index) => {
        listItem.classList.add("hide-list-item");

        if (index >= activeCardsFrom && index < activeCardsTo) {
            listItem.classList.remove("hide-list-item");
        }
    });
}

createPaginationNumbers();

handleCurrentPage(1);

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) handleCurrentPage(currentPage - 1);
});

nextBtn.addEventListener("click", () => {
    if (currentPage < pageCount) handleCurrentPage(currentPage + 1);
});

// Add event listeners to each pagination button after they are created
document.querySelectorAll(".pagination-number").forEach(button => {
    button.addEventListener("click", () => {
        const getCurrentPageIndex = Number(button.getAttribute("page-index"));
        handleCurrentPage(getCurrentPageIndex);
    });
});
