<template>
    <div id="skillbody" class="component-container skill-page">
        
      <article id="skill-article">
        
        <table class="skills-table">
          <tr v-for="skill in skills" :key="skill.name" class="skill-row" @click="navigateTo(skill.docLink)">
            <td>
              <img :src="skill.logo" alt="" class="skill-logo" />
            </td>
            <td>
              {{ skill.name }}
            </td>
            <td>
              {{ skill.description }}
            </td>
          </tr>
        </table>
      </article>
    </div>
  </template>
  
  
  
  
  
  
  
  <script>
  
  import pythonLogo from "../assets/python.svg";
import djangoLogo from "../assets/django.svg";
import javascriptLogo from "../assets/javascript.svg";
import html5Logo from "../assets/html5.svg";
import cssLogo from "../assets/css.svg";
import vueLogo from "../assets/vue.svg";

export default {
  name: "ResourcesPage",
  data() {
    return {
      skills: [
        {
          logo: pythonLogo,
          name: "Python",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          docLink: "python.org"
        },
        {
          logo: djangoLogo,
          name: "Django",
          description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          docLink: "djangoproject.com"
        },
        {
          logo: javascriptLogo,
          name: "JavaScript",
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
          docLink: "javascript.com"
        },
        {
          logo: html5Logo,
          name: "HTML5",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
          docLink: "https://www.w3schools.com/html/"
        },
        {
          logo: cssLogo,
          name: "CSS",
          description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
          docLink: "https://www.w3schools.com/css/"
        },
        {
          logo: vueLogo,
          name: "Vue",
          description: "Fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident.",
          docLink: "https://vuejs.org/"
        }
      ]
    };
  }
};

</script>

  
<style scoped>
h1 {
    margin-left: 200px;
}
#skillbody {
  padding-top: 0px; /* Height of the navbar */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh; /* Full viewport height */
  overflow: auto; /* Allows scrolling if content overflows */
}

#skill-article {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  text-align: left;
  margin-top: 0;
  padding-top: 0;
}



.skills-list {
  list-style: none;
  padding: 0;
  margin: 0; /* Remove default margin */
}

.skill-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.skill-logo {
  width: 50px; /* Adjust the size as needed */
  height: auto;
  margin-right: 15px;
}

.skill-details {
  text-align: left;
}

@media screen and (max-width: 850px) {
  .skill-item {
    flex-direction: column;
    align-items: start;
  }

  .skill-logo {
    margin-bottom: 10px;
  }
  #skillbody {
    padding-top: 50px;
    margin-bottom: 100px;
    padding-left: 20px;
  }
  h1 {
    margin-left: 10px;
  }
}



@media screen and (max-width: 450px) {
  #skill-article h1 {
    font-size: 1.5em;
  }

  .embedded-image {
    width: 100%; /* Full width images on very small screens */
  }
  #skillbody {
    padding-top: 0;
    margin-bottom: 100px;
    padding-left: 10px;
  }
  h1 {
    margin-left: 10px;
  }
}


.skills-table {
  width: 100%;
  border-collapse: collapse;
}

.skill-row {
  cursor: pointer;
}

.skill-row:hover {
  background-color: #f0f0f0; /* Change as needed for hover effect */
}

.skill-logo {
  width: 50px;
  height: auto;
}

.skill-link {
  text-decoration: none;
  color: #007bff; /* Link color */
}

.skill-link:hover {
  text-decoration: underline;
}
</style>





