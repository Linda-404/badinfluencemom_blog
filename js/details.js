const blogIntro = document.querySelector(".blog_intro");
const detailsContent = document.querySelector(".details_content");
const title = document.querySelector("title");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// fetch blogDetails
const baseUrl = "https://ellesdevdesigns.com/wp-json/wp/v2/";
const urlDetails = baseUrl + "posts/" + id;
const embedUrl = baseUrl + "posts?_embed";

async function fetchBlogDetails() {
    blogIntro.innerHTML = "";   
    detailsContent.innerHTML = "";

    try {
        const respons = await fetch(urlDetails + "?_embed");
        const results = await respons.json();

        let category = results.categories[0];
        fetchPostByCategory(category);

        title.innerHTML = `${results.title.rendered} | badinfluencemom`
        
        blogIntro.innerHTML = `<img src="${results._embedded['wp:featuredmedia'][0].source_url}" class="detail_image" tabindex="0" alt="${results._embedded['wp:featuredmedia'][0].alt_text}">
                                <div class="modal" tabindex="-1">
                                    <img class="modal_img">
                                </div>
                                <div class="blog_title">
                                    <h1>${results.title.rendered}</h1>
                                </div>`
        
        detailsContent.innerHTML = `<div class="blogtext_container>${results.content.rendered}</div>
                                    <p class="publish_date">published: ${results.date}</p>`

        let modal = document.querySelector(".modal");
        let img = document.querySelector(".detail_image");
        let modalImg = document.querySelector(".modal_img");                            
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
        img.onkeydown = function(e) {
            if (e.key !== "Tab"){
                modal.style.display = "block";
                modalImg.src = this.src;
                modal.focus();
            }            
        };
        modal.onclick = function() {
            modal.style.display = "none";
        }
        modal.onkeydown = function(e) {
            if (e.key !== "Tab"){
                modal.style.display = "none";
            }            
        };

    }
    catch (error) {
        blogIntro.innerHTML = displayError("An error occured when calling API");
        detailsContent.innerHTML = displayError("An error occured when calling API");
    }
}

fetchBlogDetails();


// fetch posts by category
const relatedPosts = document.querySelector(".related_posts");

async function fetchPostByCategory(category) {
    try {
        const response = await fetch(embedUrl + "&categories=" + category);
        const results = await response.json();

        relatedPosts.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            relatedPosts.innerHTML += `<a href="blogdetails.html?id=${results[i].id}" class="card_post">
                                            <img src="${results[i]._embedded['wp:featuredmedia'][0].source_url}" class="card_image" alt="${results[i]._embedded['wp:featuredmedia'][0].alt_text}">
                                            <div class="title">
                                            <h4 class="card_title">${results[i].title.rendered}</h4>
                                            <p class="publish_date">published: ${results[i].date}</p>
                                            </div>
                                        </a>`
        }
    }
    catch (error) {
        console.log(error);
    }
}

// // categories posts
// // parenting = 2
// // lifestyle = 3
// // personal = 4

// add clickfunction to arrows
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

function scroll(amount) {
    const scrollDiv = document.querySelector(".scrolling_wrapper");
    scrollDiv.scrollLeft += amount;
}

addEventListeners(arrowLeft, function (){
    scroll(-250);
});
addEventListeners(arrowRight, function (){
    scroll(250);
});


// add comment
const comment = document.querySelector("#comment");
const button = document.querySelector(".cta_btn");

function validateComment() {
    if (comment.value.length >= 5) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}

comment.addEventListener("keyup", validateComment);
