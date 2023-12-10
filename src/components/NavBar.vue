<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/resources">Learn</router-link>
        <router-link to="/contact">Contact Me</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-evenly; 
    align-items: center;           
    width: 100%;                   
    background-color: #007BA7;        
    padding: 10px 0;               
    position: fixed;               
    top: 0;                        
    left: 0;                       
    z-index: 1000;                
    overflow: hidden;
}





nav a {
    text-decoration: none;  
    color: white;            
    margin: 0 10px;          
    transition: transform 0.3s ease; 
    position: relative;      
}

/* Changes the link color and scale on hover */
nav a:hover {
    color: lightblue;
    transform: scale(1.3); 
    z-index: 1;             
}

@media screen and (max-width: 768px) {
    nav a {
        font-size: 12px; 
        padding: 5px 0px; 
        margin: 0 0 !important;
    }

    nav {
        padding: 5px 0; 
    }
}

.router-link-active {
  font-weight: bold; /* Example: make the active link bold */
  color: gray; /* Example: change the color for the active link */
}
  </style>
  