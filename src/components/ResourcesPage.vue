<template>
    <div id="resourcebody" class="component-container resource-page">
          
        <article id="resource-article">
        <!-- <h1>Learn to Code</h1> -->
        <div class="slideshow-container">
          <transition name="fade" mode="out-in">
            <div class="slide" v-if="slides[currentIndex]" :key="currentIndex">
              <img :src="currentSlide.image" :alt="currentSlide.alt" class="slide-image" />
              <div class="slide-text" v-html="currentSlide.text"></div>
            </div>
          </transition>
          <div class="controls">
            <button class="control prev" @click="prev">&#10094; Previous</button>
            <button class="control next" @click="next">&#10095; Next</button>
          </div>
        </div>
      </article>
    </div>
  </template>
  
  
  
  
  <script>
  import OdinProj from "../assets/odin.png";
  import MoshPage from "../assets/mosh.png";
  import FreeCode from "../assets/freecode.png";
  
  export default {
    name: "ResourcesPage",
    data() {
      return {
        slides: [
          {
            image: OdinProj,
            text: "<a href='https://www.theodinproject.com/' target='_blank'><strong><p>The Odin Project</p></strong></a><i><p>The Odin Project is an open-source community dedicated to providing the best information sources to take you from zero to a full-stack developer.</p></i><p>This free online learning resource offers full courses on fullstack development in either JavaScript of Ruby on Rails.</p> <p>While there is no shortage of great JavaScript courses, finding a course this robust about Ruby and RoR is rare. This is a great way to set yourself apart.</p> <p><a href='https://www.theodinproject.com/' target='_blank'>Link</a></p>",
            alt: "A screenshot of Odin Project.",
            link: "https://www.theodinproject.com"
          },
          {
            image: MoshPage,
            text: "<a href='https://www.youtube.com/c/programmingwithmosh' target='_blank'><strong><p>Programming with Mosh</p></strong></a><i><p>I train professional software engineers that companies love to hire. </p></i><p>Mosh is a wealth of knowledge in a variety of different programming disciplines. The face that he offers all of this content for free makes him an important resource for new programmers.</p> <p>If you want some more indepth instruction, he offers more programs through his paid membership.</p> <p><a href='https://www.youtube.com/c/programmingwithmosh' target='_blank'>Link</a></p>",
            alt: "A screenshot of Programming with Mosh's YouTube page.",
            link: "https://www.youtube.com/c/programmingwithmosh"
          
          },
          {
            image: FreeCode,
            text: "<a href='https://www.freecodecamp.org/' target='_blank'><strong><p>Free Code Camp</p></strong></a><i><p>How will freeCodeCamp help me learn to code? You will learn to code by building dozens of projects, step-by-step, right in your browser, code editor, or mobile app. You will also earn free verified certifications along the way.</p></i><p>Free Code Camp is by far the most robost free elearning program out there. From frontend development in JavaScript to Data Analysis and Python, Free Code Camp has a path for you.</p> <p>They have a suggested order, and while this is great for a complete rookie, feel free to skip around if you have the skills.<p><a href='https://www.freecodecamp.org/' target='_blank'>Link</a></p>",
            alt: "A screenshot of Free Code Camp.",
            link: "https://www.freecodecamp.org/"
          }
        ],
        currentIndex: 0
      };
    },
    mounted() {
      this.startSlide();
    },
    methods: {
      startSlide() {
        this.timer = setInterval(this.next, 8000);
      },
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex + this.slides.length - 1) % this.slides.length;
      }
    },
    computed: {
      currentSlide() {
        return this.slides[this.currentIndex];
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    margin-left: 200px;
}
#resourcebody {
  padding-top: 0; 
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

#resource-article {
  width: 100%;
  max-width: 1200px; 
  margin: auto;
  margin-top: 0;
  text-align: left;
}


.slideshow-container {
  width: 100%;
  max-width: 1200px;
  height: 70vh; 
 
  margin-top: 0; 
}

.slide {
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  margin-bottom: 0px;
  width: 100%;
  height: 100%; 
  overflow: hidden; 
}

.slide-image {
  max-width: 50%;
  height: 100%; 
  object-fit: cover;
  margin-right: 2px;
}

.slide-text {
  width: 50%;
  text-align: justify;
  margin-left: 2px;
}

.controls {
  text-align: center;
  margin-top: 0px;
}

.control {
  background-color: 007BA7(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  width: 150px;
}

.control:hover {
    background-color: #0056b3;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.9s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Adjustments for smaller screens */
@media screen and (max-width: 850px) {
  .slide {
    flex-direction: row; 
    height: auto; 
  }

  .slide-image {
    width: 100%; 
    height: auto; 
    margin-bottom: 10px; 
  }

  .slide-text {
    width: 100%; 
  }
}

/* @media screen and (max-width: 750px) {
  .slide {
    flex-direction: column; 
    height: auto; 
  }
} */
@media screen and (max-width: 450px) {
  .slide {
    flex-direction: column; 
    height: auto; 
  }
  #resourcebody {
    padding-top: 25px; 
  }

  .slideshow-container {
    height: auto; 
  }

  .slide-image {
    min-width: 90%; 
    height: auto; 
    margin-left: 5%;
    margin-right: 5%;
  }

  .slide-text {
    overflow: scroll;
    max-height: 300px;
  }
}
</style>



