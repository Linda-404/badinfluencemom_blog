const blogIntro = document.querySelector(".blog_intro");
const detailsContent = document.querySelector(".details_content")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(queryString);
console.log(params);
console.log(id);

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

        console.log(results);
        let category = results.categories[0];
        console.log("cat: " + category)
        fetchPostByCategory(category);
        
        blogIntro.innerHTML = `<img src="${results._embedded['wp:featuredmedia'][0].source_url}" class="detail_image">
                                <div class="modal">
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
        modal.onclick = function() {
            modal.style.display = "none";
        }

    }
    catch (error) {
        console.log(error);
    }
}

fetchBlogDetails();


// fetch posts by category
const relatedPosts = document.querySelector(".related_posts");

async function fetchPostByCategory(category) {
    try {
        const response = await fetch(embedUrl + "&categories=" + category);
        const results = await response.json();

        console.log(results);
        relatedPosts.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            relatedPosts.innerHTML += `<a href="blogdetails.html?id=${results[i].id}" class="card_post">
                                            <img src="${results[i]._embedded['wp:featuredmedia'][0].source_url}" class="card_image">
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


















// modal image
// const modal = document.querySelector(".modal");
// const img = document.querySelector(".detail_image");
// const modalImg = document.querySelector(".modal_img");

// console.log(modal);
// console.log(img);
// console.log(modalImg);

// img.onclick = function() {
//     debugger;
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }
// modal.onclick = function() {
//     debugger;
//     modal.style.display = "none";
// }