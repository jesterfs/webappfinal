<template>
    <div id="aboutbody" class="component-container about-page">
      <article id="about-article">
        
        <img id="headshot-left" src="../assets/richmond.jpeg" alt="An image of Richmond" class="embedded-image">
        <p>
          I was born and raised in the city of Richmond, VA. During high school, I was active in my school's theater department. I went on to earn a BA and MA in literature from Virginia Commonwealth University and starting a career in copywriting. I moved to LA in 2017 and worked a variety of different freelance jobs before deciding to switch careers to software engineering in 2020.
        </p>
        <p>After losing my fulltime copywriting position due to Covid layoffs, I dove head first into software engineering through a bootcamp. I worked several IT and support positions before finally finding my current Software Engineer position at Johns Hopkins Center for Inherited Diesease Research.</p>
        <img id="headshot-right" src="../assets/boston.jpeg" alt="The front of a Boston University building" class="embedded-image">
        <p>
          Outside of work, I enjoy cycling and playing music with friends. I am also passionate about philosophy. I'm taking advantage of LA's cheap community college system and earning an AA in philosophy on the side. While I don't have any career ambitions with this degree, I have the fantasy of eventually earning a PhD and teaching part time.
        </p>
        <p>I'm currently working on my Master's in Software Development at Boston University, with plans to finish in 2024. Regardless of the subject, learning has always been a passion of mine. That's exactly why I've found myself in the tech field. There are always new technologies and tools to master.</p>
      </article>
    </div>
  </template>
  
  
  
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  h1 {
    margin-left: 0px;
  }
#aboutbody {
  /* padding-top: 60px;  */
  padding-left: 20px;
  padding-right: 20px; 
  padding-bottom: 5px;
  margin-bottom: 0;
  max-height: 100vh;
  margin: 0; 
  box-sizing: border-box; 
  /* min-height: 100vh;  */
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

#about-article {
  width: 100%; 
  max-width: 1200px; 
  margin: auto; 
  text-align: left;
  margin-top: 0;
}



.embedded-image {
  float: left;
  margin: 0 20px 20px 0;
  width: 25%; 
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

#headshot-right {
  float: right;
  margin: 0 0 20px 20px;
}

#about-article p {
  text-align: justify;
  line-height: 1.6;
}

@media screen and (max-width: 850px) {
    #about-article h1 {
        margin-top: 0;
        padding-top: 0;
    }
  .embedded-image {
    float: left;
    display: block;
    margin: 0 auto 20px;
    width: 50%; 
    padding-right: 5px;
  }

  #aboutbody {
    padding-top: 0px;
    margin-bottom: 0px;
  }
  h1 {
    margin-left: 10px;
  }
}

@media screen and (max-width: 450px) {
  #about-article h1 {
    font-size: 1.5em;
  }

  .embedded-image {
    width: 100%; 
  }
 
  #aboutbody {
    margin-top: 450px;
  }
  
}
</style>



