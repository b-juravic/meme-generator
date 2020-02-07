// add event listener to form submit and generate new meme
var memeForm = document.getElementById("meme-form");
memeForm.addEventListener("submit", function() {
  event.preventDefault();
  handlerFuncs.newMeme();
  handlerFuncs.clearUserInput();
});

// add event listener to memeContainer for use with delete btn
var memeContainer = document.getElementById("memes");
memeContainer.addEventListener("click", function (event) {
  var itemClicked = event.target;
  if (itemClicked.className === "delete-meme-btn btn-danger btn") {
    var memeId = itemClicked.parentNode.id;
    handlerFuncs.deleteMeme(parseInt(memeId));
  }
});

var handlerFuncs = {
  newMeme: function () {
    var memeContainer = document.getElementById("memes");

    // access user input using .value
    var image = document.getElementById("pic-url");
    var topText = document.getElementById("top-text");
    var bottomText = document.getElementById("bottom-text");

    //create meme div
    var memeDiv = document.createElement("div");
    memeDiv.classList.add("meme");

    //create image
    var memePic = document.createElement("img");
    memePic.classList.add("pic");
    memePic.src = image.value;

    //create meme top text
    var topTextHeading = document.createElement("h3");
    topTextHeading.classList.add("upper-text");
    topTextHeading.innerText = topText.value;

    //create meme bottom text
    var bottomTextHeading = document.createElement("h3");
    bottomTextHeading.classList.add("lower-text");
    bottomTextHeading.innerText = bottomText.value;

    //create delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-meme-btn");
    deleteBtn.classList.add("btn-danger");
    deleteBtn.classList.add("btn");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.innerText = "Delete Meme";

    memeContainer.appendChild(memeDiv);
    memeDiv.appendChild(memePic);
    memeDiv.appendChild(topTextHeading);
    memeDiv.appendChild(bottomTextHeading);
    memeDiv.appendChild(deleteBtn);

    //add unique id to all existing memes. will need for deleting
    var setMemeId = document.getElementsByClassName("meme");
    for (var i = 0; i < setMemeId.length; i++) {
      setMemeId[i].id = i;
    }
  },
  clearUserInput: function () {
    document.getElementById("meme-form").reset();
  },
  deleteMeme: function (id) {
    var memeToDelete = document.getElementById(id);
    var memeContainer = document.getElementById("memes");
    memeContainer.removeChild(memeToDelete);
  }
};