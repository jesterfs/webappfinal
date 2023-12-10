<template>
    <div id="resumebody" class="component-container resume-page">
       
        <article id="resume-article">
       
        <div class="resume-container">
          <div class="resume-image-container">
            <img src="../assets/resume.png" class="resume-image" alt="Resume" />
          </div>
          <div class="resume-details">
            <p>Here's my professional resume detailing my skills, experience, and education. Feel free to download it as a PDF for a more detailed view.</p>
            <a href="../assets/resume.pdf" target="_blank" class="resume-link">Download Resume</a>
          </div>
        </div>
      </article>
    </div>
  </template>
  
  
  
  
  
  
  
 
  
  <script>
export default {
  name: "ResumePage"
  // No additional data or methods are needed for this static page
};
</script>

  
<style scoped>
h1 {
    margin-left: 200px;
}

#resumebody {
  /* padding-top: 75px; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  overflow: auto;
  padding-left: 10px;
  padding-right: 10px;
}

#resume-article {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-top: 0;
  text-align: left;
}

#resume-article h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
  padding-top: 0;
  margin-top: 0;
}

.resume-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.resume-image-container {
  width: 60%; /* Adjust as needed */
  height: 70vh; /* Set a fixed height */
  overflow-y: auto; /* Make only vertical scrolling */
  border-bottom: 4px solid #323639;
  margin-bottom: 20px; /* Space below the image container */
}

.resume-image {
  width: 100%; /* Image takes full width of the container */
  height: auto; /* Maintain aspect ratio */
}

.resume-details {
  width: 35%; /* Adjust as needed */
  text-align: justify;
}

.resume-link {
  display: block;
  background-color: #007BA7;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
}

.resume-link:hover {
    background-color: #0056b3;
}

@media screen and (max-width: 850px) {
  .resume-container {
    flex-direction: column;
  }
  .resume-image-container {
    width: 100%;
    height: fit-content;
  }

  .resume-image {
    width: 100vw;
  }

  .resume-container, .resume-details {
    width: 100%;
  }

  #resumebody {
    /* padding-top: 350px; */
    margin-bottom: 100px;
    padding-left: 20px;
    padding-top: 0;
    
  }
  h1 {
    margin-left: 10px;
  }
}

@media screen and (max-width: 450px) {
  #resume-article h1 {
    font-size: 1.5em;
  }
  h1 {
    margin-left: 10px;
  }

  #resumebody {
    padding-top: 0;
  }
}
</style>





