// add event listeners
function addEventListeners(target, action) {
    target.addEventListener("keydown", action);
    target.addEventListener("click", action);
}

// fetch memes
const urlMemes = "https://ellesdevdesigns.com/wp-json/wc/store/products/";

async function fetchMemes(memeUrl) {
    try {
        const response = await fetch(memeUrl);
        const results = await response.json();

        memeContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            memeContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme" tabindex="0" alt="${results[i].images[0].alt}">
                                        <div class="modal" tabindex="-1">
                                            <img class="modal_img">
                                        </div>`
        }

        addModal();

    }
    catch (error) {
        console.log(error);
        memeContainer.innerHTML = displayError("An error occured when calling API, please refresh or try again later");
    }
}

// add modal
function addModal(){
    let images = document.querySelectorAll(".meme");
    for (let i=0; i < images.length; i++){
        let image = images[i];
        let modal = document.querySelector(`.modal`);
        let modalImg = document.querySelector(`.modal_img`);
        image.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
        image.addEventListener("keydown", function(e) {
            if (e.key !== "Tab"){
                modal.style.display = "block";
                modalImg.src = this.src;
                modal.focus();
            }            
        });
        addEventListeners(modal, function() {
            modal.style.display = "none";
        });
    }
}













