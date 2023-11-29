const leftArrow = document.querySelector(".carousel__left-arrow");
const rightArrow = document.querySelector(".carousel__right-arrow");
const carouselWrapper = document.querySelector(".carousel__wrapper");
let carouselImgIndex = 0;

//carousel navigation circles
const carouselImg = document.querySelectorAll(".carousel__img");
console.log("total carousel images", carouselImg.length);

for (let i = 0; i < carouselImg.length; i++) {
	const circle = document.createElement("div");
	circle.classList.add("circle");
	circle.setAttribute("index", i);
	document.querySelector(".carousel__nav").appendChild(circle);
}

//for making the navigation circles work
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("circle")){
        carouselImgIndex=e.target.getAttribute("index");
        moveRight();
    }
});

// move left function
function moveLeft() {
    carouselWrapper.style.left =450-carouselImg.length*450 + 450 * carouselImgIndex + "px";
    console.log(carouselImgIndex)
}

leftArrow.addEventListener("click", () => {
	console.log("left");
	if (carouselImgIndex > 0) {
		carouselImgIndex--;
	}else{
        carouselImgIndex=carouselImg.length-1;
    }
	moveLeft();
});

//move right function
function moveRight() {
	carouselWrapper.style.left = -450 * carouselImgIndex + "px";
    console.log(carouselImgIndex)
}

rightArrow.addEventListener("click", () => {
	console.log("right");
	if (carouselImgIndex < carouselImg.length - 1) {
		carouselImgIndex++;
	}else{
        carouselImgIndex=0;
    }
	moveRight();
});


