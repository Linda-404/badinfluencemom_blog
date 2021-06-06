const memeContainer = document.querySelector(".memes");
const allMemes = document.querySelector(".all_memes");
const parentingMemes = document.querySelector(".parenting_memes");
const programmingMemes = document.querySelector(".programming_memes");
const personalMemes = document.querySelector(".personal_memes");


// fetch first 10 memes
fetchMemes(urlMemes);
// fetch all memes
addEventListeners(allMemes, function() {
    fetchMemes(urlMemes + "?per_page=100");
});
// fetch parenting memes
addEventListeners(parentingMemes, function() {
    fetchMemes(urlMemes + "?per_page=100" + "&tag=20");
});
// fetch programming memes
addEventListeners(programmingMemes, function() {
    fetchMemes(urlMemes + "?per_page=100" + "&tag=21");
});
// fetch personal memes
addEventListeners(personalMemes, function() {
    fetchMemes(urlMemes + "?per_page=100" + "&tag=22");
});


// meme category indicator
const memeIcons = document.querySelectorAll(".meme_icon");
let isClicked = new Array(memeIcons.length).fill(false); 

function currentCategory() {
    let memeIcons = document.querySelectorAll(".meme_icon");
    for (let i = 0; i < memeIcons.length; i++) {
        let memeIcon = memeIcons[i];
        addEventListeners(memeIcon, function() {
            isClicked.fill(false);
            isClicked[i] = true;   
            for (let j = 0; j < memeIcons.length; j++){
                if (isClicked[j]) {
                    memeIcons[j].style = "box-shadow: 0 4px 8px 0 var(--lightpurple), 0 6px 6px 0 var(--lightpurple);";
                }
                else{
                    memeIcons[j].style = "";
                }
            }
            
        });
    }
        
}
currentCategory();

// meme tags
// parenting = 20
// programming = 21
// personal = 22
