const btn = document.querySelector(".btn")
const windowWidth = window.screen.width;
const windowHeight = window.screen.height;

btn.addEventListener("click", () => {
    alert(`Мой размерчик ${windowWidth}px на ${windowHeight}px!`)
})