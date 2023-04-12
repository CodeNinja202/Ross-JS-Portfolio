// Get references to the navigation links and the content div
const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const projectLink = document.getElementById("projects-link");
const contactLink = document.getElementById("contact-link");
const contentDiv = document.getElementById("content");

// Function that loads the content of a page using AJAX
function loadPage(url) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      contentDiv.innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

// Refreshed the page
homeLink.addEventListener("click", function (event) {
  location.reload();
});

// Event listeners to the navigation links that load the content of each page
aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  loadPage("./about/about.html");
});

// Event listeners to the navigation links that load the content of each page
projectLink.addEventListener("click", function (event) {
  event.preventDefault();
  loadPage("./projects/projects.html");
});

// Event listeners to the navigation links that load the content of each page
contactLink.addEventListener("click", function (event) {
  event.preventDefault();
  loadPage("./contact/contact.html");
});
