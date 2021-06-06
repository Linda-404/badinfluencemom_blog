const latestPosts = document.querySelector(".latest_posts");
const memeContainer = document.querySelector(".memes");
const postsContainer = document.querySelector(".post_container");


const url = "https://ellesdevdesigns.com/wp-json/wp/v2/posts?_embed";

// fetch posts
async function fetchPosts() {

    try {
        const response = await fetch(url);
        const results = await response.json();

        latestPosts.innerHTML = "";
        postsContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            latestPosts.innerHTML += `<a href="blogdetails.html?id=${results[i].id}" class="card_post">
                                            <img src="${results[i]._embedded['wp:featuredmedia'][0].source_url}" class="card_image" alt="${results[i]._embedded['wp:featuredmedia'][0].alt_text}">
                                            <div class="title">
                                                <h4 class="card_title">${results[i].title.rendered}</h4>
                                                <p class="publish_date">published: ${results[i].date}</p>
                                            </div>
                                        </a>`
        }
        for (let i =0; i < 4; i++) {
            postsContainer.innerHTML += `<div class="post_homepage">
                                            <a href="blogdetails.html?id=${results[i].id}"><img src="${results[i]._embedded['wp:featuredmedia'][0].source_url}" class="homepage_image" alt="${results[i]._embedded['wp:featuredmedia'][0].alt_text}"></a>
                                            <div class="homepage_content">
                                                <h3 class="post_title">${results[i].title.rendered}</h3>
                                                <div class="homepage_text">${results[i].content.rendered}...</div>
                                                <p class="publish_date">published: ${results[i].date}</p>
                                            </div>
                                            <a href="blogdetails.html?id=${results[i].id}" class="see_more">read more</a>
                                        </div>`
        }
    }
    catch (error) {
        console.log(error);
        latestPosts.innerHTML = displayError("An error occured when calling API");
        postsContainer.innerHTML = displayError("An error occured when calling API");
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

addEventListeners(arrowLeft, function (){
    scroll(-250);
});
addEventListeners(arrowRight, function (){
    scroll(250);
});


// fetch first 10 memes
fetchMemes(urlMemes);
