<template>
    <div id="projectbody" class="component-container project-page">
      <article id="project-article">
        <div class="project-container">
          <section v-for="project in projects" :key="project.name" class="project-card">
            <a class="card-link" :href="project.link" target="_blank">
              <img :src="project.image" :alt="project.alt" class="project-image" />
              <div class="project-info">
                <h2>{{ project.name }}</h2>
                <p class="short-description">{{ project.description }}</p>
                <p class="long-description">{{ project.longDesc }}</p>

                </div>

              <!-- Overlay element for long description -->
              <div class="project-overlay">
                <p>{{ project.longDesc }}</p>
              </div>

            </a>
            <a :href="project.link" class="project-button" target="_blank">View Project</a>

          </section>
        </div>
      </article>
    </div>
  </template>
  
  
  
  
  
  
  
  <script>
import portfolioImage from "../assets/portfolio.png";
import randoFitImage from "../assets/randofit.png";
import transitBuddyImage from "../assets/transitbuddy.png";

export default {
  name: "ProjectsPage",
  data() {
    return {
      projects: [
        {
          image: portfolioImage,
          name: "Portfolio",
          description: "A React based professional portfolio",
          link: "https://www.jesterwebdev.com/",
          longDesc: "This is my professional portfolio, written as a one page React app. I utilized Bootstrap for responsive design, with a focus on animation and design.",
          alt: "A screenshot of a professional portfolio."
        },
        {
          image: randoFitImage,
          name: "RandoFit",
          description: "A React project that generates a random workout",
          link: "https://inspiring-jones-2a1193.netlify.app/",
          longDesc: "This is a frontend only React application. It allows the user to generate a random workout, swapping out exercises as necessary.",
          alt: "A screenshot of Randofit."
        },
        {
          image: transitBuddyImage,
          name: "TransitBuddy",
          description: "A React/Node app that helps users navigate public transit.",
          link: "https://transitbuddy.netlify.app/",
          longDesc: "This is a fullstack app that utilizes a React front end and a Nodejs back end connected to a MySQL database.",
          alt: "A screenshot of TransitBuddy."
        }
      ]
    };
  }
};
</script>


  
<style scoped>
.card-link {
    text-decoration: none;
    color: black;
    
}

.card-link:hover {
    transform: scale(1.05);
}

#projectbody {
  padding-top: 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  overflow: auto;
  margin-top: 0px;
}

#project-article {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-top: 0;
}

#project-article h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
  padding-top: 0px;
  margin-top: 0px;
}

.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: visible; 
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distributes space between elements */
  align-items: center;
  width: 30%;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
  height: 500px; /* Ensures full height */
}

.project-info {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%; /* Ensures it takes the full width */
}

.project-button {
  text-decoration: none;
  background-color: #027BA7;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%); /* Center the button */
  z-index: 10; /* Higher z-index to ensure it's above other elements */
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #027BA7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 15px;
  z-index: 5; /* Lower than the button */
}

.project-card:hover .project-overlay {
  opacity: 0.9; /* Shows overlay on hover */
}

.project-image {
  width: 100%; 
  max-height: 100%; 
  object-fit: cover;
  border-radius: 10px;
}





.project-button:hover {
  background-color: #005f7a; /* Darker color on hover for visual feedback */
}

.project-info h2, .project-info p, .project-info a {
  margin-bottom: 10px; 
}

.long-description {
  display: none; /* Initially hidden */
}


@media screen and (max-width: 850px) {
  .project-card {
    width: 45%;
  }

  #projectbody {
    padding-top: 0;
    margin-bottom: 0;
    padding-left: 20px;
  }
  h1 {
    margin-left: 10px;
  }
}

@media screen and (max-width: 450px) {
  .project-overlay {
    display: none; /* Hide overlay on mobile */
  }

  .short-description {
    display: none; /* Hide short description on mobile */
  }

  .long-description {
    display: block; /* Show long description on mobile */
  }

  #project-article h1 {
    font-size: 1.5em;
  }
  .project-card {
    width: 80%;
  }

  #projectbody {
    padding-top:0; 
    padding-left: 10px;
    padding-right: 10px
    
 }
 h1 {
    margin-left: 10px;
  }
}
</style>