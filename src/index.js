import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

// const refs = {
//      breedSelect: document.querySelector(".breed-select"),
//     loader: document.querySelector(".loader"),
//     catInfo: document.querySelector(".cat-info"),
//     catImage: catInfo.querySelector('img'),
//     breedName: catInfo.querySelector('.breed-name'),
//     description: catInfo.querySelector('.description'),
//     temperament: catInfo.querySelector('.temperament'),
//     error: document.querySelector('.error'),
//      error: document.querySelector(".error"),
// }


const refs = {
  breedSelect: document.querySelector(".breed-select"),
  catInfo: document.querySelector(".cat-info"),
  loader: document.querySelector(".loader"),
  error: document.querySelector(".error"),
};

function fillSelect(breeds) {
  const selectElement = refs.breedSelect;

  breeds.forEach((breed) => {
    const optionElement = document.createElement("option");
    optionElement.value = breed.id;
    optionElement.textContent = breed.name;
    selectElement.appendChild(optionElement);
  });
}

function hideLoader() {
    refs.loader.classList.add("visible");
    console.log("add");
}

function showLoader() {
    refs.loader.classList.remove("visible");
    console.log("remove");
}

function showError() {
  refs.error.classList.add("visible");
}

function hideError() {
  refs.error.classList.remove("visible");
}

function showCatInfo(catData) {
  const catInfo = refs.catInfo;
    catInfo.innerHTML = `
    
    <img src="${catData.imageUrl}" alt="Cat Image" />
    <div class="wrapper">
    <h2>${catData.breedName}</h2>
    <p><strong>Description:</strong> ${catData.description}</p>
    <p><strong>Temperament:</strong> ${catData.temperament}</p>
    </div>
  `;
    catInfo.classList.remove("visible");
    showError();
}

// function clearInterface() {
//   breedSelect.innerHTML = '';
//   catImage.src = '';
//   breedName.textContent = '';
//   description.textContent = '';
//   temperament.textContent = '';
// }

function hideCatInfo() {
  refs.catInfo.classList.remove("visible");
}

function loadBreeds() {
    // debugger;
    showLoader();
    hideCatInfo();
    // hideError();
    showError();
    

  fetchBreeds()
    .then((breeds) => {
      fillSelect(breeds);
      refs.breedSelect.addEventListener("change", handleSelectChange);
      hideLoader();
    })
    .catch((error) => {
      console.error("Error loading breeds:", error);
      showError();
      hideLoader();
    });
}

function handleSelectChange(event) {
  const selectedBreedId = event.target.value;
    showLoader();
    // clearInterface();
    hideCatInfo();
  hideCatInfo();
  hideError();

  fetchCatByBreed(selectedBreedId)
    .then((catData) => {
      showCatInfo(catData);
      hideLoader();
    })
    .catch((error) => {
      console.error("Error loading cat:", error);
      showError();
      hideLoader();
    });
}

document.addEventListener("DOMContentLoaded", loadBreeds);