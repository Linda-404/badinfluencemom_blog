const latestPosts = document.querySelector(".latest_posts");
const memesContainer = document.querySelector(".memes");
const postsContainer = document.querySelector(".post_container");


const url = "https://ellesdevdesigns.com/wp-json/wp/v2/posts?_embed";

// fetch latest posts
async function fetchPosts() {

    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);
        latestPosts.innerHTML = "";
        postsContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            latestPosts.innerHTML += `<a href="blogdetails.html?id=${results[i].id}" class="card_post">
                                            <img src="${results[i]._embedded['wp:featuredmedia'][0].source_url}" class="card_image">
                                            <div class="title">
                                                <h4 class="card_title">${results[i].title.rendered}</h4>
                                                <p class="publish_date">published: ${results[i].date}</p>
                                            </div>
                                        </a>`
        }
        for (let i =0; i < 4; i++) {
            postsContainer.innerHTML += `<div class="post_homepage">
                                            <a href="blogdetails.html?id=${results[i].id}"><img src="${results[i]._embedded['wp:featuredmedia'][0].source_url}" class="homepage_image"></a>
                                            <div class="homepage_content">
                                                <h3 class="post_title">${results[i].title.rendered}</h3>
                                                <div class="homepage_text">${results[i].content.rendered}...</div>
                                                <p class="publish_date">published: ${results[i].date}</p>
                                            </div>
                                            <a href="blogdetails.html?id=${results[i].id}" class="see_more">read more</a>
                                        </div>`
        }
        // const postsText = document.querySelector(".homepage_text");
        // $clamp(postsText, {clamp: 5});
    }
    catch (error) {
        console.log(error);
    }
}

fetchPosts();



// add clickfunction to arrows
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

function scroll(amount) {
    const scrollDiv = document.querySelector(".scrolling_wrapper");
    scrollDiv.scrollLeft += amount;
}

function scrollLeft(){
    scroll(-100);
}

function scrollRight(){
    scroll(100);
}

arrowLeft.addEventListener("click", scrollLeft);
arrowRight.addEventListener("click", scrollRight);

const urlMemes = "https://ellesdevdesigns.com/wp-json/wc/store/products/";

// fetch memes
async function fetchMemes() {
    try {
        const response = await fetch(urlMemes);
        const results = await response.json();

        console.log(results);
        memesContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            memesContainer.innerHTML += `<img src="${results[i].images[0].src}" class="meme">
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

// add modal
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