<template>
  <NavBar/>
  <HeaderComponent v-if="$route.path !== '/'" />
  <router-view v-slot="{ Component }">
    <transition :name="navDirection === 'forward' ? 'slide-forward' : 'slide-backward'">
      <component :is="Component" />
    </transition>
  </router-view>
  <FooterSection/>
</template>





<script>
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';
import HeaderComponent from './components/HeaderComponent.vue';


export default {
  name: 'App',
  components: {
    NavBar,
    FooterSection,
    HeaderComponent
  },
  data() {
    return {
      navDirection: 'forward'
    };
  },
  mounted() {
    window.addEventListener('keydown', this.handleArrowKeyPress);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleArrowKeyPress);
  },
  methods: {
    handleArrowKeyPress(event) {
      if (event.key === 'ArrowRight') {
        this.navigateRoutes('next');
      } else if (event.key === 'ArrowLeft') {
        this.navigateRoutes('prev');
      }
    },
    navigateRoutes(direction) {
      const currentPath = this.$route.path;
      const routeOrder = ['/', '/about', '/skills', '/projects', '/resume', '/resources', '/contact'];
      const currentIndex = routeOrder.indexOf(currentPath);
      let nextIndex = currentIndex;

      this.navDirection = (direction === 'next') ? 'forward' : 'backward';

      if (direction === 'next' && currentIndex < routeOrder.length - 1) {
        nextIndex = currentIndex + 1;
      } else if (direction === 'prev' && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }

      if (currentIndex !== nextIndex) {
        this.$router.push(routeOrder[nextIndex]);
      }
    }
  }
};
</script>

<style>
/* Global styles */
html, body {
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-size: large; 
  font-family: 'Open Sans', sans-serif; 
  background: #f9f9f9; 
  color: black;
}

h1 {
  color: #007BA7
}

button {
  background-color: #007BA7;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  

}

/* NavBar styles */
nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #333; 
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

nav a {
  text-decoration: none;
  color: f9f9f9;
  margin: 0 10px;
  transition: transform 0.3s ease;
  position: relative;
}

nav a:hover {
  color: #4A90E2; 
  transform: scale(1.3);
}


/* Content section styles */
#landing-content, #about-content {
  display: flex;
  padding: 20px;
  background-color: #f9f9f9;
  margin-bottom: 40px; 
}

.content-block {
  flex-basis: 50%;
  margin: 0 10px;
}

/* Footer styles */
footer {
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 0.9em;
}

/* Table Styling */
table,
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

/* Transition styles */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
  position: absolute;
  width: 100%;
}

/* Media queries */
@media screen and (max-width: 868px) {
  nav a {
    font-size: 12px;
    padding: 5px 0px;
    margin: 0;
  }

  nav {
    padding: 5px 0;
  }

  .hero {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .hero img,
  .hero-text {
    width: 60%;
    max-width: 100%;
    margin-top: 20px;
    padding-left: 0;
  }

  #landing-content,
  #about-content {
    flex-direction: column;
  }

  .content-block {
    margin: 10px 0;
    flex-basis: 100%;
  }

  .video {
    flex-basis: 100%;
  }

  .flex1,
  .flex2 {
    flex-direction: column;
    text-align: center;
  }

  .flex-item,
  .flex-container .text-content {
    width: 100%;
  }

  .flex-container img {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .hero h2 {
    font-size: 18px;
  }
}

@media screen and (max-width: 450px) {
  .hero img,
  .hero-text {
    width: 100%;
    padding-left: 0;
  }

  .hero h1 {
    font-size: 25px;
  }

}


/* Component styles */
.component-enter-active, .component-leave-active {
  transition: transform 0.5s ease-in-out;
}

.component-enter, .component-leave-to {
  transform: translateX(100%);
  position: absolute;
  width: 100%;
}

/* NavBar offset */
.router-view-container {
  padding-top: 50px; 
}


.component-container {
  min-height: calc(100vh - 50px); 
  display: flex;
  flex-direction: column;
}


/* Specific route component styling */
.home-page, .about-page, .resources-page {
  height: calc(100vh - 60px); 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;  
}

/* Forward Slide Transition Styles */
.slide-forward-enter-active, .slide-forward-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-forward-enter-from, .slide-forward-leave-to {
  transform: translateX(100%);
}
.slide-forward-leave-from, .slide-forward-enter-to {
  transform: translateX(0);
}

/* Backward Slide Transition Styles */
.slide-backward-enter-active, .slide-backward-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-backward-enter-from, .slide-backward-leave-to {
  transform: translateX(-100%);
}
.slide-backward-leave-from, .slide-backward-enter-to {
  transform: translateX(0);
}



</style>
