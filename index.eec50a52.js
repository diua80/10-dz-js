!function(){var e="live_7gmkYXXbt2NTLSO5ORqlwCtiezgaWS1vWMGBaD9WSm1I3zOd5BVIwWlWk3wYT2zi";var t={breedSelect:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};function n(){t.loader.classList.add("visible"),console.log("add")}function r(){t.loader.classList.remove("visible"),console.log("remove")}function o(){t.error.classList.add("visible")}function c(){t.catInfo.classList.remove("visible")}function a(a){var i,s=a.target.value;r(),c(),c(),t.error.classList.remove("visible"),(i=s,fetch("".concat("https://api.thecatapi.com/v1/images/search","?api_key=").concat(e,"&breed_ids=").concat(i)).then((function(e){if(!e.ok)throw new Error("Failed to fetch cat");return e.json()})).then((function(e){var t=e[0];return{imageUrl:t.url,breedName:t.breeds[0].name,description:t.breeds[0].description,temperament:t.breeds[0].temperament}}))).then((function(e){!function(e){var n=t.catInfo;n.innerHTML='\n    \n    <img src="'.concat(e.imageUrl,'" alt="Cat Image" />\n    <div class="wrapper">\n    <h2>').concat(e.breedName,"</h2>\n    <p><strong>Description:</strong> ").concat(e.description,"</p>\n    <p><strong>Temperament:</strong> ").concat(e.temperament,"</p>\n    </div>\n  "),n.classList.remove("visible"),o()}(e),n()})).catch((function(e){console.error("Error loading cat:",e),o(),n()}))}document.addEventListener("DOMContentLoaded",(function(){r(),c(),o(),fetch("".concat("https://api.thecatapi.com/v1/breeds","?api_key=").concat(e)).then((function(e){if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).then((function(e){return e.map((function(e){return{id:e.id,name:e.name}}))})).then((function(e){!function(e){var n=t.breedSelect;e.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,n.appendChild(t)}))}(e),t.breedSelect.addEventListener("change",a),n()})).catch((function(e){console.error("Error loading breeds:",e),o(),n()}))}))}();
//# sourceMappingURL=index.eec50a52.js.map