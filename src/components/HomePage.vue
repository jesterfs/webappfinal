<template>
  <div id="landing-body" class="component-container landing-page">
    <article id="landing-article">
      <div class="profile-container">
        <img src="../assets/headshot-edit.png" alt="Headshot of Franklin Jester" class="profile-image" />
        <h1>My name is Franklin Jester</h1>
        <p>...and I am a software engineer based in Los Angeles California. I work for Johns Hopkins University in the Center for Inherited Disease Research. I'm currently pursuing a degree in Software Development at Boston University. I primarily work with Python and Django, but I got my start in programming with the MERN stack.</p>
      </div>
    </article>
    <div v-show="showGif" :class="{ 'fade-in': fadeEffect, 'fade-out': !fadeEffect }" class="gif-overlay">
    <img src="../assets/keyboard.gif" alt="Keyboard Typing" />
  </div>
  </div>
</template>






<script>
export default {
  name: "HomePage",
  data() {
    return {
      showGif: false,
      fadeEffect: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showGif = true; 
      this.fadeEffect = true; 
      setTimeout(() => {
        this.fadeEffect = false; 
        setTimeout(() => {
          this.showGif = false; 
        }, 1000); 
      }, 3000); 
    }, 5000);
  }
};
</script>





<style scoped>
h1 {
  color: #007BA7
}
#landing-body {
  padding-top: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  overflow: auto;
}

#landing-article {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

.profile-container {
  text-align: center;
  padding: 20px;
}

.profile-image {
  width: 450px;
  height: 450px;
  border-radius: 300px;
  object-fit: cover;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out; /* Smooth transition for the transform */

}

.profile-image:hover {
  transform: scale(1.1) rotate(10deg); /* Scale up and rotate on hover */
}

.profile-container h1 {
  font-size: 2em;
  color: #007BA7;
  margin-bottom: 20px;
}

.profile-container p {
  font-size: 1.2em;
  color: #555;
}

.gif-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
  transition: opacity 1s ease-in-out;
  opacity: 0;
}

.gif-overlay img {
  max-width: 30%;
  opacity: 0.8;
}

.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}

/* Mobile Responsiveness */
@media screen and (max-width: 850px) {
  .profile-container h1 {
    font-size: 1.5em;
  }

  .profile-container p {
    font-size: 1em;
    padding: 0 10px;
  }

  .profile-image {
    width: 70%;
    height: 70%;
    border-radius: 50%;
  }

  .gif-overlay img {
    max-width: 50%;
  }
}

@media screen and (max-width: 450px) {
  .profile-container h1 {
    font-size: 1.2em;
  }

  .profile-container p {
    font-size: 0.9em;
  }

  .gif-overlay img {
    max-width: 70%;
  }

  #landing-article {
    margin-top: 0;
  }
}
</style>





