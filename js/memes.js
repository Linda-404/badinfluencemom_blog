const memeContainer = document.querySelector(".memes");
const allMemes = document.querySelector(".all_memes");
const parentingMemes = document.querySelector(".parenting_memes");
const programmingMemes = document.querySelector(".programming_memes");
const personalMemes = document.querySelector(".personal_memes");



const url = "https://ellesdevdesigns.com/wp-json/wc/store/products/";

async function fetchMemes() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);
        memeContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            memeContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme">
                                        <div class="modal">
                                            <img class="modal_img">
                                        </div>`
        }

        addModal();

    }
    catch (error) {
        console.log(error);
    }
}

fetchMemes();

async function fetchAllMemes() {
    try {
        const response = await fetch(url + "?per_page=100");
        const results = await response.json();

        console.log("num results: " + results.length);
        memeContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            memeContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme">
                                        <div class="modal">
                                            <img class="modal_img">
                                        </div>`
        }

        addModal();

    }
    catch (error) {
        console.log(error);
    }
}

allMemes.addEventListener("click", fetchAllMemes);

async function fetchParentingMemes() {
    
    try {
        const response = await fetch(url + "?per_page=100" + "&tag=20");
        const results = await response.json();
        
        console.log(results);
        memeContainer.innerHTML = "";
        
        for (let i = 0; i < results.length; i++) {

            memeContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme">
                                        <div class="modal">
                                            <img class="modal_img">
                                        </div>`    
        }
        
     
        addModal();
   
    }
    catch (error) {
        console.log(error);
    }
}

function addModal(){
    let images = document.querySelectorAll(".meme");
    for (let i=0; i < images.length; i++){
        console.log(images[i]);
        let image = images[i];
        let modal = document.querySelector(`.modal`);
        console.log(modal);
        let modalImg = document.querySelector(`.modal_img`);
        console.log(modalImg);
        image.addEventListener("click", function() {
            console.log("hei fra " + i);
            modal.style.display = "block";
           modalImg.src = this.src;
        });
        modal.addEventListener("click", function() {
            modal.style.display = "none";
        });
    }
}

parentingMemes.addEventListener("click", fetchParentingMemes);

async function fetchProgrammingMemes() {
    try {
        const response = await fetch(url + "?per_page=100" + "&tag=21");
        const results = await response.json();

        console.log(results);
        memeContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            memeContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme">
                                        <div class="modal">
                                            <img class="modal_img">
                                        </div>`

        }

        addModal();

    }
    catch (error) {
        console.log(error);
    }
}

programmingMemes.addEventListener("click", fetchProgrammingMemes);

async function fetchPersonalMemes() {
    try {
        const response = await fetch(url + "?per_page=100" + "&tag=22");
        const results = await response.json();

        console.log(results);
        memeContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            memeContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme">
                                        <div class="modal">
                                            <img class="modal_img">
                                        </div>`
        }

        addModal();

    }
    catch (error) {
        console.log(error);
    }
}

personalMemes.addEventListener("click", fetchPersonalMemes);

// need solving:
// 1. modal image memes + detailpage
// 2. latest/related posts on detailspage
// 3. repitition of functions memepage
// 4. add indicator for active meme category
// 5. json "response all" only show 30 of 34 -
// 6. clickable scrollbar latest/related posts
// 7. randomize memes on index/memespage -keep show latest

// meme tags
// parenting = 20
// programming = 21
// personal = 22


// const modal = document.querySelector(".modal");
// const img = document.querySelector(".meme");
// const modalImg = document.querySelector(".modal_img");

// function openModal() {
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }
// img.addEventListener("click", openModal);

// let modal = document.querySelector(".modal");
// let img = document.querySelector(".meme");
// let modalImg = document.querySelector(".modal_img");

// img.onclick = function() {
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }
// modal.onclick = function() {
//     modal.style.display = "none";
// }

// modal image
// let modal = document.querySelector(".modal");
// let img = document.querySelector(".meme");
// let modalImg = document.querySelector(".modal_img");

// img.onclick = function() {
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }
// modal.onclick = function() {
//     modal.style.display = "none";
// }




// function openModal() {
//     document.getElementById("modal").style.display = "block";
//   }
  
// function closeModal() {
//     document.getElementById("modal").style.display = "none";
// }

// function openModal() {
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }

// img.addEventListener("click", openModal);

// function closeModal() {
//     modal.style.display = "none";
// }

// modal.addEventListener("click", closeModal);