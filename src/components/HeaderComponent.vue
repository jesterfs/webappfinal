<template>
    <header>
      <h1>{{ headerText }}</h1>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    computed: {
      headerText() {
        // Map route paths to header texts
        const routeToHeaderText = {
          '/': 'Home Page',
          '/about': 'About Me',
          '/skills': 'My Skills',
          '/projects': 'Projects',
          '/resume': 'Resume',
          '/resources': 'Learn to Code',
          '/contact': 'Contact Me'
        };
  
        // Return the header text based on the current route
        return routeToHeaderText[this.$route.path] || 'Page Not Found';
      }
    }
  };
  </script>
  
  <style scoped>
  
  header {
    text-align: center;
    padding-top: 50px;
    display: block;
  }
  </style>
  