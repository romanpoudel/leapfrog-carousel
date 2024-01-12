const leftArrow = document.querySelector(".carousel__left-arrow");
const rightArrow = document.querySelector(".carousel__right-arrow");
const carouselWrapper = document.querySelector(".carousel__wrapper");
let carouselImgIndex = 0;
let slideInterval;

//carousel navigation circles
const carouselImg = document.querySelectorAll(".carousel__img");
console.log("total carousel images", carouselImg.length);

for (let i = 0; i < carouselImg.length; i++) {
	const circle = document.createElement("div");
	circle.classList.add("circle");
	circle.setAttribute("index", i);
	document.querySelector(".carousel__nav").appendChild(circle);
}

//animate circles
function animateCircles() {
	const circles = document.querySelectorAll(".circle");
	circles.forEach(function (circle, index) {
		if (index === carouselImgIndex) {
			circle.classList.add("circle--active");
		} else {
			circle.classList.remove("circle--active");
		}
	});
}
//for making the navigation circles work
document.addEventListener("click", (e) => {
	if (e.target.classList.contains("circle")) {
		carouselImgIndex = e.target.getAttribute("index");
		moveRight();
	}
});

// move left function
function moveLeft() {
	clearInterval(slideInterval);
	if (carouselImgIndex > 0) {
		carouselImgIndex--;
	} else {
		carouselImgIndex = carouselImg.length - 1;
	}
	carouselWrapper.style.transition = "left 0.5s ease-in-out";
	carouselWrapper.style.left =
		800 - carouselImg.length * 800 + 800 * carouselImgIndex + "px";
	console.log(carouselImgIndex);
	//animate circles
	animateCircles();
	// Setting new interval after arrow click
	slideInterval = setInterval(() => {
		moveRight();
	}, 3000);
}

leftArrow.addEventListener("click", () => {
	console.log("left");
	moveLeft();
});

//move right function
function moveRight() {
	clearInterval(slideInterval);
	if (carouselImgIndex < carouselImg.length - 1) {
		carouselImgIndex++;
	} else {
		carouselImgIndex = 0;
	}
	carouselWrapper.style.transition = "left 0.5s ease-in-out";
	carouselWrapper.style.left = -800 * carouselImgIndex + "px";
	console.log(carouselImgIndex);
	//animate circles
	animateCircles();
	// Setting new interval after arrow click
	slideInterval = setInterval(() => {
		moveRight();
	}, 3000);
}

rightArrow.addEventListener("click", () => {
	console.log("right");

	moveRight();
});

//automatically animate or slide carousel images
slideInterval = setInterval(() => {
	moveRight();
}, 3000);
