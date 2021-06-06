const postContainer = document.querySelector(".posts_container");
const viewMoreBtn = document.querySelector(".view_more_posts");

// fetch posts
const url = "https://ellesdevdesigns.com/wp-json/wp/v2/posts?_embed";

async function fetchPosts(postUrl) {

    try {
        const response = await fetch(postUrl);
        const results = await response.json();

        postContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            postContainer.innerHTML += `<a href="blogdetails.html?id=${results[i].id}" class="card_post">
                                            <img src="${results[i]._embedded['wp:featuredmedia'][0].source_url}" class="blog_image" alt="${results[i]._embedded['wp:featuredmedia'][0].alt_text}>
                                            <div class="title">
                                                <h4 class="card_title">${results[i].title.rendered}</h4>
                                                <p class="publish_date">published: ${results[i].date}</p>
                                            </div>
                                        </a>`
        }
    }
    catch (error) {
        console.log(error);
        postContainer.innerHTML = displayError("An error occured when calling API");
    }
}

fetchPosts(url);

// fetch all posts
viewMoreBtn.addEventListener("click", function() {
    fetchPosts(url + "&per_page=100");
});