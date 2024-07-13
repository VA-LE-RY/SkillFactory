const btnForGallery = document.querySelector(".header__btn");
const galleryCats = document.querySelector(".main__gallery");

function showLoader() {
  document.querySelector(".main__loader").style.display = "flex";
}

function hideLoader() {
  document.querySelector(".main__loader").style.display = "none";
}

btnForGallery.addEventListener("click", async () => {
  try {
    showLoader();
    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    const data = await res.json();
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      let elem = `<img src="${data[i].url}">`;
      galleryCats.innerHTML += elem;
    }
  } catch(error) {
      console.error(error.message);
    } finally {
      hideLoader();
    }
});

