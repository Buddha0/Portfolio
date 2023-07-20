// MODAL
const modal = document.querySelector(".info-section");
const form = document.getElementById("myForm");
const submitButton = document.getElementById("submit_btn");

function toggle() {
  modal.classList.toggle("show");
}

// MY PROJECTS
const projects = [
  {
    title: "Ecommerce-Website",
    description: `  This is a ecommerce website made with <span>React</span>. It have dynamic routing for all the items.
        It have add to cart functunality and price functionality. It also have dynamic stars for the
        ratings. You can sort the items by price or ratings and u can also search for the items. Implemented skeleton loading when images are not loaded.`,
    githubLink: "https://github.com/Buddha0/Ecommerce-",
    websiteLink: "https://animeshoppy.netlify.app/",
    websiteImage:
      "./images/screencapture-localhost-5174-2023-06-30-23_00_20.png",
  },

  {
    title: "Movie Website",
    description: `A movie app made with <span>React</span> using the TMDb API where you can watch the movie trailers, select your genres and search for the movies. It have carousel scrooling. All the movies have dynamic routing and have skeleton loading when the images are not loaded.`,
    githubLink: "https://github.com/Buddha0/Ecommerce-",
    websiteLink: "https://fancy-mooncake-47efe2.netlify.app/",
    websiteImage: "./images/movie_screenshot.png",
  },
  {
    title: "SVG_LandingPage",
    description: `A Single Page Landing Page made with <span>HTML</span> and <span>CSS</span>`,
    githubLink: "https://github.com/Buddha0/SVG_LandingPage",
    websiteLink: "https://filolanding.netlify.app/",
    websiteImage: "./images/screenshot.png",
  },
  {
    title: "loopStudio LandingPage",
    description: `A Single Page Landing Page made with <span>HTML</span> and <span>CSS</span>`,
    githubLink: "https://github.com/Buddha0/LandingPage",
    websiteLink: "https://capable-griffin-da828c.netlify.app/",
    websiteImage: "./images/loopstudio.png",
  },
];

const projectsContainer = document.querySelector(".cards-container");
const imageContainer = document.querySelector(".image-container");

projectsContainer.innerHTML = projects
  .map((project, index) => {
    const isEven = index % 2 === 0;
    const flexDirection = isEven ? "row" : "row-reverse";

    return `

<div class="cards" >
<div class = "cards-flex" style = "display:flex; justify-content:space-between;flex-direction:${flexDirection};align-items:center;" >   
<div class="image-container" style="background-image: url(${project.websiteImage}); background-size:cover;background-repeat:no-repeat"></div>

<div class="content-description">
    <h1 class="heading">${project.title}</h1>
    <p>
       ${project.description}
    </p>
    <div class="icons">
    <a href=${project.websiteLink} target="_blank"> <button class="btn">View
                Site</button></a>
                <a href=${project.githubLink} target="_blank"><button class="btn">View
                Code <i class="fa-solid fa-code"></i></button></a>
    </div>
</div>
</div>
</div>
   
        `;
  })
  .join("");
