// Get Slider Items | Array.from [ES6 Feature]
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Sliders
var slidesCount = sliderImages.length;

//Set Current Slide
var currentSlide = 1;

//Slide Number Element
var SlideNumberElemnt = document.getElementById("slide-number");

// Previous and Next Buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

//Hnadle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create main UL element
var paginationElement = document.createElement("ul");

// Set Id to the created UL Element
paginationElement.setAttribute("id", "pagination-ul");

// loop to create the list Items based on slider count
for (var i = 1; i <= slidesCount; i++) {
  //create the LI
  var paginationItem = document.createElement("li");

  //Set custom Attribute
  paginationItem.setAttribute("data-index", i);

  //Set Item content
  paginationItem.appendChild(document.createTextNode(i));

  //Append Items to the Main Ul List
  paginationElement.appendChild(paginationItem);
}

//Add The created Ul element to the Page
document.getElementById("indicators").appendChild(paginationElement);

//Get the new created UL
var paginationCreatedUl = document.getElementById("pagination-ul");

// Get Paginations Items | Array.from [ES6 Feature]
var paginationsBulltes = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

//Loop Through Bullets Items
for (var i = 0; i < paginationsBulltes.length; i++) {
  paginationsBulltes[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

//Trigger the checker function
theChecker();

//Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    //Do nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

//Previous Slide Function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    //Do nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

//Create the checker Function
function theChecker() {
  //Set The Slide Number
  SlideNumberElemnt.textContent = "Slide #" + currentSlide + "of" + slidesCount;
  //remove all active classes
  removeAllActive();
  //Set Active Class on current slide
  sliderImages[currentSlide - 1].classList.add("active");

  //Set Active Class on current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  //Checck if the current slide is the first
  if (currentSlide == 1) {
    //add disabled class on previous button
    prevButton.classList.add("disabled");
  } else {
    //remove disabled class on previous button
    prevButton.classList.remove("disabled");
  }

  //Checck if the current slide is the last
  if (currentSlide == slidesCount) {
    //add disabled class on next button
    nextButton.classList.add("disabled");
  } else {
    //remove disabled class on next button
    nextButton.classList.remove("disabled");
  }
}

//remove ll active class from images and pagination bullets
function removeAllActive() {
  //loop throw Images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  //loop throw pagination Bullets
  paginationsBulltes.forEach(function (bullets) {
    bullets.classList.remove("active");
  });
}
