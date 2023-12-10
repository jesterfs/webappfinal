<template>
    
    <div id="projectbody" class="component-container project-page">
        
        <article id="project-article">
        
        <div class="project-container">
          <section v-for="project in projects" :key="project.name" class="project-card">
            <a class="card-link" :href="project.link" target="_blank">
            <img :src="project.image" :alt="project.alt" class="project-image" />
            <div class="project-info">
              <h2>{{ project.name }}</h2>
              <p>{{ project.description }}</p>
              <a :href="project.link" target="_blank">View Project</a>
            </div>
            </a>
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
          alt: "A screenshot of a professional portfolio."
        },
        {
          image: randoFitImage,
          name: "RandoFit",
          description: "A React project that generates a random workout",
          link: "https://inspiring-jones-2a1193.netlify.app/",
          alt: "A screenshot of Randofit."
        },
        {
          image: transitBuddyImage,
          name: "TransitBuddy",
          description: "A React/Node app that helps users navigate public transit.",
          link: "https://transitbuddy.netlify.app/",
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
    transition: transform 0.3s ease;
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
  align-items: center;
  width: 30%;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%; 
  max-height: 100%; 
  object-fit: cover;
  border-radius: 10px;
}

.project-info {
  text-align: center;
  flex-grow: 1; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
}

.project-info h2, .project-info p, .project-info a {
  margin-bottom: 10px; 
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