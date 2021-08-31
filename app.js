async function fetchGif(gif) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      q: gif,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });

  const gifArray = res.data.data.length;
  const random = Math.floor(Math.random() * gifArray);
  const url = res.data.data[random].images.original.url;

  return url;
}

const postGif = url => {
  const img = document.createElement("img");
  img.src = url;
  img.classList.add("space");
  const gif = document.querySelector(".gif-container");
  gif.append(img);
};

// //Selectors
const entry = document.querySelector("#gif-entry");
const form = document.querySelector("form");
const remove = document.querySelector("#remove");
const container = document.querySelector(".gif-container");

form.addEventListener("submit", async function(e) {
  e.preventDefault();
  const url = await fetchGif(entry.value);
  postGif(url);
  entry.value = "";
});

remove.addEventListener("click", function() {
  container.innerHTML = "";
});
