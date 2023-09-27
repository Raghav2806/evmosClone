 window.onscroll = function() {sticky_nav()}; //onscroll: call a function on window being scrolled

var navbar = document.getElementById("nav");

var sticky = 100; //offsetTop: returns the top position (in pixels) relative to the parent.

function sticky_nav() {
    if (window.pageYOffset >= sticky) { //pageYOffset: returns the pixels a document has scrolled from the upper left corner of the window.
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollRight = document.getElementById("slideRight");
  const scrollLeft = document.getElementById("slideLeft");
  const flexbox = document.getElementByID("overflow");

  scrollRight.addEventListener("click", function () {
      flexbox.scrollBy(390, 0);
  });

  scrollLeft.addEventListener("click", function () {
      flexbox.scrollBy(-390, 0);
  });
});

// Function to simulate loading progress
function simulateLoading() {
  let progress = 0;
  const progressBar = document.getElementById('loading-progress');
  const mainContent = document.querySelector('.main-content');

  const interval = setInterval(() => {
      progress += 1;
      progressBar.textContent = progress;

      if (progress === 100) {
          clearInterval(interval);
          mainContent.style.display = 'block'; // Show the main content
          document.querySelector('.loading-screen').style.display = 'none'; // Hide the loading screen
      }
  }, 50); // Adjust the interval duration as needed
}

// Call the loading simulation function when the window is fully loaded
window.addEventListener('load', simulateLoading);

function showDivOne() {
  const newDivOne = document.getElementById('tech');
  newDivOne.style.display = 'block';
}

function hideDivOne() {
  const newDivOne = document.getElementById('tech');
  newDivOne.style.display = 'none';
}

const techNav = document.getElementById('nav-list-one');
const commNav = document.getElementById('nav-list-two');
const aboutNav = document.getElementById('nav-list-three');
const techDiv = document.getElementById('tech');

techNav.addEventListener('mouseover',showDivOne);
commNav.addEventListener('mouseover',showDivOne);
aboutNav.addEventListener('mouseenter',showDivOne);
techDiv.addEventListener('mouseout',hideDivOne);

