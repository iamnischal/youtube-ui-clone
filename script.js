var container = document.querySelector(".header");
const youtubeTags = [
  "New to you",
  "Mix",
  "Music",
  "Live",
  "Gaming",
  "Sports",
  "News",
  "Learning",
  "Movies",
  "Fashion & Beauty",
  "Podcasts",
  "Comedy",
  "Documentaries",
  "Trending",
  "Shorts",
  "Subscribed",
  "History",
  "For you"
];


youtubeTags.map((item)=>{
    const tag = document.createElement("span");
    tag.textContent = item;
    tag.classList.add("tag");
    container.appendChild(tag);
    return 0;
})