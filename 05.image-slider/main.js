
const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container")

async function fetListOfImages() {
    try {
        const response = await fetch("https://picsum.photos/v2/list?page=1&limit=10", {
            method:"GET"
        })

        const imagesList = await response.json();
        // console.log(imagesList)
        if (imagesList && imagesList.length > 0) {
            displayImages(imagesList)
        }
    } catch (error) {
      console.log(error)   
    }
}

function displayImages(getImagesList) {
    slider.innerHTML = getImagesList.map(item => `
        <div class="slide">
            <img src=${item.download_url} alt=${item.id} />
        </div>
    `).join(" ")

    dotsContainer.innerHTML = getImagesList.map((item,index) => `
        <span class="dot ${index === 0? "active" : ""} " data-slide=${index}></span>
    `).join(" ")
}

fetListOfImages();

setTimeout(() => {
    // slider functionality begins

    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev")
    const nextBtn = document.querySelector(".next")

    let currentSlide = 0;
    // console.log(slides, "slides")

    function activeDot(slide) {
        document.querySelectorAll(".dot").forEach(dotItem => dotItem.classList.remove("active"));
        document.querySelector(`.dot[data-slide = "${slide}"]`).classList.add("active");

    }

    function changeCurrentSlide(currentSlide) {
        slides.forEach((slideItem, index) => {
            //using transform x
            slideItem.style.transform = `translateX(${100 * (index-currentSlide)}%)`
            
            //using opacity and z-index
            // if (index === currentSlide) {
            //     slideItem.style.opacity = 1; // Show current slide
            //     slideItem.style.zIndex = 10; // Bring to front
            // } else {
            //     slideItem.style.opacity = 0; // Hide other slides
            //     slideItem.style.zIndex = 1; // Send to back
            // }

            // using display hidden and block
            // if (index === currentSlide) {
            //     slideItem.style.display = 'block'; // Show the current slide
            // } else {
            //     slideItem.style.display = 'none'; // Hide other slides
            // }

        })

        // scroll type all will be active here
        // const container = document.querySelector('.slider');
        // container.style.transform = `translateX(-${currentSlide * 100}%)`;

    }

    nextBtn.addEventListener('click', () => {
        currentSlide++;
        if (slides.length - 1 < currentSlide) {
            currentSlide = 0
        }

        changeCurrentSlide(currentSlide)
        activeDot(currentSlide)
    })

    prevBtn.addEventListener("click", () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length -1
        }

        changeCurrentSlide(currentSlide);
        activeDot(currentSlide)
    })

    dotsContainer.addEventListener("click", (event) => {
        // console.log(event.target.classList,event.target.dataset)
        if (event.target.classList.contains("dot")) {
            const currentSlide = event.target.dataset.slide;
            changeCurrentSlide(currentSlide);
            activeDot(currentSlide);
        }
    })

}, 1000);




