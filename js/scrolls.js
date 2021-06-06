

const url = "https://ellesdevdesigns.com/wp-json/wp/v2/posts?_embed";


// fetch posts by category
const relatedPosts = document.querySelector(".related_posts");

async function fetchPostByCategory(category) {
    try {
        const response = await fetch(url + "&categories=" + category);
        const results = await response.json();

        console.log(results);
        relatedPosts.innerHTML = "";

        for (let i = 0; i < results.lenght; i++) {

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

fetchPostByCategory(3);

// categories posts
// parenting = 2
// lifestyle = 3
// personal = 4

