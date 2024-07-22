const btn = document.querySelector(".btn");
const svgOne = document.querySelector(".btn__svg");
const svgTwo = document.querySelector(".btn__svg--two");

btn.addEventListener('click', () => {
    svgOne.classList.toggle("hidden");
    svgTwo.classList.toggle("active");
})
